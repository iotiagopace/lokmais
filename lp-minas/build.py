"""Monta a prévia autocontida; não publica e não envia dados."""
from pathlib import Path
import base64,mimetypes,re,urllib.request
HERE=Path(__file__).resolve().parent
SRC=HERE/'src'
def data_uri(path):
 path=Path(path)
 return f'data:{mimetypes.guess_type(path)[0] or "application/octet-stream"};base64,'+base64.b64encode(path.read_bytes()).decode()
cache=HERE/'font-cache'
cache.mkdir(exist_ok=True)
font_css=cache/'general-sans.css'
if not font_css.exists() or '//cdn.fontshare.com' in font_css.read_text():
 req=urllib.request.Request('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap',headers={'User-Agent':'Mozilla/5.0'})
 css=urllib.request.urlopen(req,timeout=30).read().decode()
 faces=[]
 for i,block in enumerate(re.findall(r'@font-face\s*\{(.*?)\}',css,re.S)):
  link=re.search(r"url\(['\"]?([^)'\"]+\.woff2)",block).group(1)
  if link.startswith('//'):link='https:'+link
  weight=re.search(r'font-weight:\s*(\d+)',block).group(1)
  dest=cache/f'general-sans-{weight}.woff2'
  dest.write_bytes(urllib.request.urlopen(link,timeout=30).read())
  faces.append("@font-face{font-family:'General Sans';font-weight:"+weight+";font-style:normal;font-display:swap;src:url('"+data_uri(dest)+"') format('woff2');}")
 font_css.write_text('\n'.join(faces))
assets={
 'logo':HERE/'media/logo-lokmais.png','favicon':HERE/'media/favicon-lokmais.png',
 'campanhaEstudio':HERE/'media/start-estudio-web.jpg',
 'campanhaMotociclista':HERE/'media/fan-motociclista-web.jpg',
 'campanhaJaqueta':HERE/'media/motorista-jaqueta-web.jpg',
 'motoStart':HERE/'media/start-2025.webp',
 'motoSemi':HERE/'media/start-2026-seminova.webp',
 'motoZero':HERE/'media/start-2026-zero.webp',
 'motoFan':HERE/'media/fan-2025.webp'
}
html=(SRC/'index.html').read_text()
html=html.replace('/* INLINE_STYLE */',(SRC/'styles.css').read_text().replace('/* FONT_FACES */',font_css.read_text())).replace('/* INLINE_PLANS */',(SRC/'plans.js').read_text()).replace('/* INLINE_SCRIPT */',(SRC/'app.js').read_text())
for key,path in assets.items():html=html.replace('{{'+key+'}}',data_uri(path))
assert not re.search(r'\{\{[A-Za-z]+\}\}',html)
assert '08248f20' in html
out=HERE/'index.html'
out.write_text(html)
print(f'Prévia montada: {out} ({out.stat().st_size:,} bytes)')
