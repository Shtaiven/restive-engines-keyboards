"""Turn fairyboard_params.csv into SolidCraft batch files.

usage: python3 sync_params.py [csv] [out_dir]

Writes two batch files (run them with the SolidCraft MCP `batch` tool, `path` = the file):
  params_import.json  first time in a design: parameters.import of the whole table
  params_sync.json    afterwards: one parameters.change {changes} that sets every value
                      (all or nothing, one rebuild). A design that lacks a parameter refuses
                      the sync, naming it; import it there first.
"""
import csv
import json
import os
import sys

here = os.path.dirname(os.path.abspath(__file__))
src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, 'fairyboard_params.csv')
out = sys.argv[2] if len(sys.argv) > 2 else here

with open(src, newline='') as f:
    rows = [r for r in csv.DictReader(f) if r.get('name')]

table = [{k: r[k] for k in ('name', 'expression', 'unit', 'comment') if r.get(k)} for r in rows]
with open(os.path.join(out, 'params_import.json'), 'w') as f:
    json.dump({'commands': [{'command': 'parameters.import', 'params': {'text': json.dumps(table)}}]}, f, indent=1)
with open(os.path.join(out, 'params_sync.json'), 'w') as f:
    json.dump({'commands': [{'command': 'parameters.change',
                             'params': {'changes': {r['name']: r['expression'] for r in rows}}}]}, f, indent=1)
print(f'{len(rows)} parameters -> params_import.json, params_sync.json in {out}')
