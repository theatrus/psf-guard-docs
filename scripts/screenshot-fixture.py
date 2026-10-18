#!/usr/bin/env python3
"""Create a disposable catalog for documentation captures; never touch live data.

Usage: python3 scripts/screenshot-fixture.py APP_CHECKOUT NEW_OUTPUT_DIRECTORY
Inputs are the app's four cached e2e FITS files, verified against its manifest.
The catalog's HFR/star counts are staged test metadata, not pixel measurements.
"""
import hashlib
import json
from pathlib import Path
import shutil
import sqlite3
import sys
import subprocess

app, out = (Path(x).resolve() for x in sys.argv[1:])
manifest = json.loads((app / 'static/e2e/fixtures/manifest.json').read_text())
cache = Path.home() / '.cache/psf-guard-e2e-fixtures'
files = sorted(manifest['files'], key=lambda x: x['name'])
for item in files:
    source = cache / item['name']
    assert hashlib.sha256(source.read_bytes()).hexdigest() == item['sha256'], source
out.mkdir()  # Refuse to replace a previous capture run.
(out / 'images').mkdir()
for item in files:
    shutil.copy2(cache / item['name'], out / 'images' / item['name'])
# Use the same minimal Target Scheduler schema as the browser fixture.
setup = (app / 'static/e2e/global-setup.ts').read_text()
schema = setup.split('  db.exec(`', 1)[1].split('    INSERT INTO project', 1)[0]
con = sqlite3.connect(out / 'scheduler.sqlite')
con.executescript(schema)
con.execute("INSERT INTO project (Id,profileId,name,description) VALUES (1,'default','M44 screenshot fixture','Disposable catalog; staged quality metadata')")
con.execute("INSERT INTO target (Id,projectId,name,active,ra,dec) VALUES (1,1,'M44',1,8.6738009234116,19.6601508517091)")
for i,item in enumerate(files[:3],1):
    meta = dict(FileName=item['name'], ExposureDuration=60, DetectedStars=[520,150,500][i-1], HFR=[2.4,6.5,2.6][i-1])
    con.execute('INSERT INTO acquiredimage (Id,projectId,targetId,acquireddate,filtername,gradingStatus,metadata) VALUES (?,1,1,?,\'B\',0,?)', (i,1776378300+(i-1)*66,json.dumps(meta)))
con.commit()
con.close()
(out / 'config.toml').write_text('[server]\n[cache]\n')
(out / 'input-manifest.json').write_text(json.dumps(files,indent=2)+'\n')
# A full-schema catalog for import previews. Only the first light is imported.
subprocess.run([
    str(app / 'target/debug/psf-guard'), 'create-db',
    str(out / 'import-review.sqlite'), str(out / 'images' / files[0]['name']),
    '--no-register', '--registry', str(out / 'registry.json'),
], check=True)
print(out)
