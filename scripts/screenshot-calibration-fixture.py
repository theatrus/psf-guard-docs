#!/usr/bin/env python3
"""Clone real local inputs into disposable catalogs for documentation captures.

Usage: python3 scripts/screenshot-calibration-fixture.py SOURCE_CATALOG IMAGE_ROOT NEW_OUTPUT_DIRECTORY
The source catalog must contain lights and at least two real calibration frames.
No source file or database is modified. The copies stage manual Keep out / Use
anyway choices and duplicate records; they do not invent measured findings.
"""
import hashlib
import json
from pathlib import Path
import shutil
import sqlite3
import sys
import time
import uuid

source, images, out = (Path(arg).resolve() for arg in sys.argv[1:])
assert source.is_file() and images.is_dir()
out.mkdir()  # Refuse to replace a previous capture run.
shutil.copytree(images, out / 'images')
original = sqlite3.connect(f'file:{source}?mode=ro', uri=True)
manifest = []
for path in sorted((out / 'images').rglob('*')):
    if path.is_file():
        manifest.append({'name': str(path.relative_to(out / 'images')),
                         'sha256': hashlib.sha256(path.read_bytes()).hexdigest()})
for name in ['source', 'review', 'duplicates']:
    catalog = out / f'{name}.sqlite'
    conn = sqlite3.connect(catalog)
    conn.row_factory = sqlite3.Row
    original.backup(conn)
    rows = conn.execute('SELECT * FROM psf_guard_calibration_frame ORDER BY id').fetchall()
    assert len(rows) >= 2, 'At least two real calibration frames are required.'
    for row in rows:
        path = Path(row['source_path'])
        relative = path.relative_to(images)
        conn.execute('UPDATE psf_guard_calibration_frame SET source_path=? WHERE id=?',
                     (str(out / 'images' / relative), row['id']))
    # The review copy has no manual choices. The source stages two choices
    # a person could make in the UI, without changing a measured grade.
    conn.execute('UPDATE psf_guard_calibration_frame_quality SET override_choice=NULL, override_at=NULL')
    if name == 'source':
        for row, choice in zip(rows[:2], ['exclude', 'use']):
            conn.execute('''INSERT INTO psf_guard_calibration_frame_quality
                (frame_uuid, override_choice, override_at, updated_at) VALUES (?,?,?,?)
                ON CONFLICT(frame_uuid) DO UPDATE SET override_choice=excluded.override_choice,
                override_at=excluded.override_at, updated_at=excluded.updated_at''',
                (row['frame_uuid'], choice, int(time.time()), int(time.time())))
    if name == 'duplicates':
        # Copy the same real exposures under another folder, then reproduce
        # the duplicate records an older import could have created.
        copies = out / 'images' / 'second-copies'
        copies.mkdir()
        for row in rows:
            path = Path(row['source_path'])
            copied = copies / path.name
            shutil.copy2(path, copied)
            values = dict(row)
            values.pop('id')
            values['source_path'] = str(copied)
            values['frame_uuid'] = str(uuid.uuid5(uuid.NAMESPACE_URL, f'psf-guard-docs-duplicate:{row["frame_uuid"]}'))
            columns = list(values)
            conn.execute(f'INSERT INTO psf_guard_calibration_frame ({",".join(columns)}) '
                         f'VALUES ({",".join("?" for _ in columns)})',
                         [values[column] for column in columns])
    conn.commit()
    conn.close()
original.close()
(out / 'input-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(out)
