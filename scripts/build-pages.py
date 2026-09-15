"""Prepare the static site for root or repository-path GitHub Pages hosting."""
import os
import re
import shutil
from pathlib import Path

root = Path(__file__).resolve().parents[1]
base = os.environ.get('PAGES_BASE_PATH', '').strip('/')
if base and not re.fullmatch(r'[A-Za-z0-9._~%/-]+', base):
    raise SystemExit('Invalid Pages base path')
base = '/' + base if base else ''
output = root / '_site'
if output.exists():
    shutil.rmtree(output)
shutil.copytree(root / 'site', output)
for path in output.rglob('*'):
    if path.suffix not in {'.html', '.js', '.css'}:
        continue
    content = path.read_text()
    # Root-relative URLs with a path, including route keys and asset URLs.
    content = re.sub(r'''(["'`(])/(?!/)(?=[A-Za-z0-9_#])''', lambda m: m[1] + base + '/', content)
    # Root links and homepage route keys. Keep slash separators and path tests intact.
    content = content.replace('href="/"', 'href="' + base + '/"')
    content = content.replace("link('/',", "link('" + base + "/',")
    content = content.replace("button('/',", "button('" + base + "/',")
    content = content.replace("'/':", "'" + base + "/':")
    path.write_text(content)
(output / '.nojekyll').touch()
print(f'Prepared {sum(p.is_file() for p in output.rglob("*"))} files for {base or "/"}')
