import shutil
from pathlib import Path

cwd = Path.cwd()
docs = cwd / 'docs'
shutil.copytree(cwd / 'build', docs)

with open(docs / 'index.html', 'r+') as f:
    content = f.read()
    content = content.replace('WeddingQR/', '')
    f.write(content)


shutil.move(docs / 'static/media', docs / 'WeddingQR/static/media')
print('Done')
