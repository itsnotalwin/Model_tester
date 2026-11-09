#!/usr/bin/env python3
"""Safely import one benchmark submission ZIP into submissions/<slug>/."""
import json
import re
import stat
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
ALLOWED = {"index.html", "meta.json", "AUDIT.md", "thumb.png"}
MAX_ARCHIVE = 30 * 1024 * 1024
MAX_TOTAL = 25 * 1024 * 1024
MAX_RATIO = 200


def reject(message):
    raise ValueError(message)


def main():
    if len(sys.argv) != 2:
        reject("Usage: python scripts/import-submission-zip.py incoming/file.zip")

    archive_path = Path(sys.argv[1]).resolve()
    incoming = (ROOT / "incoming").resolve()
    if incoming not in archive_path.parents or archive_path.suffix.lower() != ".zip":
        reject("ZIP must be a .zip file inside the incoming/ folder.")
    if not archive_path.is_file() or archive_path.stat().st_size > MAX_ARCHIVE:
        reject("ZIP is missing or exceeds the 30 MB compressed-size limit.")

    with zipfile.ZipFile(archive_path) as archive:
        infos = archive.infolist()
        if not infos:
            reject("ZIP is empty.")

        files = {}
        root_names = set()
        total_size = 0
        for info in infos:
            name = info.filename
            if "\\" in name or name.startswith("/"):
                reject("Unsafe ZIP path: " + name)
            path = PurePosixPath(name)
            if any(part in ("", ".", "..") for part in path.parts):
                reject("Unsafe ZIP path: " + name)
            if len(path.parts) not in (1, 2):
                reject("Nested folders are not allowed: " + name)
            if len(path.parts) == 1:
                if not info.is_dir():
                    reject("ZIP must contain exactly one top-level folder.")
                root_names.add(path.parts[0])
                continue

            root, filename = path.parts
            root_names.add(root)
            if info.is_dir() or filename not in ALLOWED:
                reject("Unexpected folder or file in ZIP: " + name)
            if name in files:
                reject("Duplicate ZIP entry: " + name)
            mode = (info.external_attr >> 16) & 0xFFFF
            if stat.S_ISLNK(mode):
                reject("Symbolic links are not allowed: " + name)
            if info.flag_bits & 0x1:
                reject("Encrypted ZIP entries are not supported.")
            limit = 10 * 1024 * 1024 if filename == "thumb.png" else 5 * 1024 * 1024
            if info.file_size > limit:
                reject(filename + " exceeds its size limit.")
            total_size += info.file_size
            if total_size > MAX_TOTAL:
                reject("Uncompressed submission exceeds 25 MB.")
            if info.file_size and (info.compress_size == 0 or info.file_size / info.compress_size > MAX_RATIO):
                reject("Suspicious compression ratio in " + name)
            files[name] = info

        if len(root_names) != 1:
            reject("ZIP must contain exactly one top-level folder.")
        slug = next(iter(root_names))
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
            reject("Top-level folder must use the assigned lowercase model slug.")
        if archive_path.stem != slug:
            reject("ZIP filename must match its top-level model slug: " + slug + ".zip")
        expected = {f"{slug}/{name}" for name in ALLOWED}
        actual = set(files)
        if not {"index.html", "meta.json", "AUDIT.md"}.issubset({PurePosixPath(p).name for p in actual}):
            reject("ZIP is missing index.html, meta.json or AUDIT.md.")
        if any(not p.startswith(slug + "/") for p in actual):
            reject("All files must be inside the single top-level folder.")
        if actual - expected:
            reject("ZIP contains unexpected files.")
        if ("thumb.png" in {PurePosixPath(p).name for p in actual}) != (f"{slug}/thumb.png" in actual):
            reject("Invalid thumbnail entry.")
        bad_entry = archive.testzip()
        if bad_entry:
            reject("ZIP CRC check failed for " + bad_entry)

        with tempfile.TemporaryDirectory(prefix="model-tester-zip-") as temp:
            handoff = Path(temp) / slug
            handoff.mkdir()
            for filename in ALLOWED:
                member = f"{slug}/{filename}"
                if member in files:
                    target = handoff / filename
                    with archive.open(files[member]) as src, target.open("wb") as dst:
                        while chunk := src.read(1024 * 1024):
                            dst.write(chunk)

            meta = json.loads((handoff / "meta.json").read_text(encoding="utf-8"))
            if meta.get("slug") != slug:
                reject("ZIP folder name must match meta.json slug.")
            subprocess.run(["node", "publish-submission.mjs", "--check", str(handoff)], cwd=ROOT, check=True)
            subprocess.run(["node", "publish-submission.mjs", str(handoff)], cwd=ROOT, check=True)

    print(f"SUCCESS: imported {slug} from {archive_path.name}")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, zipfile.BadZipFile, json.JSONDecodeError, subprocess.CalledProcessError) as error:
        print(f"REJECTED: {error}", file=sys.stderr)
        sys.exit(1)
