# LokMais

Site institucional e landing pages da **LokMais**, locacao de motos Honda com planos semanais.

URL de producao: <https://lokmais.vercel.app/>

> Stack: HTML estatico + CSS compartilhado em `lokmais.css` + JavaScript vanilla.
> O site publico continua simples e estatico; o painel admin e a API CMS rodam em Vercel Functions com Turso/libSQL.

---

## Estrutura

```
├── index.html                  ← Home
├── planos.html                 ← Planos
├── como-funciona.html          ← Passo a passo do aluguel
├── motos.html                  ← Catalogo da frota Honda
├── sobre.html                  ← Sobre a LokMais
├── unidades.html               ← Mapa interativo Leaflet/OpenStreetMap
├── faq.html                    ← Duvidas frequentes
├── contato.html                ← Formulario e canais de atendimento
├── seja-franqueado.html        ← Landing page para franqueados
├── arquivados/simulador.html   ← Simulador arquivado temporariamente
├── admin.html                  ← Painel CMS Turso
├── cms-config.js               ← Configuracao das secoes editaveis do CMS
├── schema.sql                  ← Schema Turso/libSQL do CMS
├── api/cms/                    ← API Vercel conectada ao Turso
├── 00-sistema-de-design.html   ← Documentacao visual do sistema
├── DESIGN.md                   ← Sistema de design em Markdown
├── lokmais.css                 ← Tokens e componentes globais
└── assets/
    ├── logo-lockup-white.png   ← Logo principal do header/footer
    ├── favicon-blue.png        ← Icone de aba e apple-touch-icon
    ├── og-cover.jpg            ← Imagem OG/Twitter
    ├── hero-moto.jpg           ← Foto do hero da home
    ├── nav.js                  ← Menu mobile e controle do drawer
    ├── cms-public.js           ← Hidratacao publica via /api/cms/public
    ├── image-slot.js           ← Ferramenta para slots editaveis de imagem
    └── motos/                  ← Fotos reais dos modelos Honda
```

---

## Estado atual

- Rotas limpas ativas via `vercel.json`, com redirects para slugs antigos como `/index.html`, `/sejafranqueado` e `/simulador`.
- Home com video institucional no hero (`IZzNOIcdNOA`), foto real lateral e CTAs para aluguel/franquia.
- Catalogo de motos com fotos locais em `assets/motos/` e miniaturas por modelo.
- Pagina de unidades com Leaflet + OpenStreetMap, sem dependencia de chave Google Maps.
- Pagina de franqueados com formulario no primeiro bloco, videos de prova social e dados comerciais ajustados.
- Simulador removido da navegacao publica e preservado em `arquivados/simulador.html`.
- Mobile com drawer fullscreen e barra fixa de CTAs.

---

## CMS Turso

O painel fica em `/admin.html` e usa as rotas em `/api/cms`. Configure no ambiente do deploy:

```bash
TURSO_DATABASE_URL=libsql://...
TURSO_AUTH_TOKEN=...
ADMIN_EMAIL=admin@cliente.com
ADMIN_PASSWORD=senha-forte
ADMIN_SESSION_SECRET=string-longa-aleatoria
```

Rotas principais:

- `GET /api/cms/public/sections/:section?status=published`
- `GET /api/cms/public/settings/home_images`
- `POST /api/cms/leads`
- `POST /api/cms/auth/login`

As paginas publicas preservam o HTML atual. Quando o Turso tiver itens publicados, `assets/cms-public.js` pode substituir blocos de motos, planos, FAQ, depoimentos e imagens editaveis. A pagina `unidades.html` mantem o mapa Leaflet estatico atual para preservar os pins e interacoes configuradas.

---

## Pontos pendentes conhecidos

- Outlet LokMais: proxima fase comercial.
- Simulador de financiamento/aluguel: arquivado para possivel retomada futura.
- Preco oficial da Fan 160: aguarda tabela oficial.
- Fotos finais enviadas pelo cliente: substituir quando aprovadas.
- Atualizacao direta das imagens no banco Turso: hoje existe fallback local em `assets/cms-public.js`.

---

## Sistema de design

- Tipografia: Poppins.
- Cores: marinho `#191970` + laranja `#F47A18`.
- Componentes: botoes pilula, cards de plano, cards de moto, banners diagonais, FAQ accordion, mobile drawer e CTA bar.
- Documentacao: `00-sistema-de-design.html` e `DESIGN.md`.

---

## Como rodar localmente

Para testar o HTML estatico:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
```

Para testar as rotas `/api/cms`, use Vercel local:

```bash
npm install
npx vercel dev --listen 127.0.0.1:3000
npm run check
```

No ambiente local (`localhost` ou `127.0.0.1`), o `/admin.html` pode abrir em modo de desenvolvimento conforme as variaveis configuradas. Em producao, o login deve exigir `ADMIN_EMAIL`, `ADMIN_PASSWORD` e `ADMIN_SESSION_SECRET`.

---

## Deploy

O deploy principal e feito pela integracao GitHub + Vercel. Ao subir para `main`, a Vercel publica em:

```text
https://lokmais.vercel.app/
```

Tambem existe `.vercelignore` para evitar envio de arquivos locais, caches e pastas sem relacao com a build.

---

© 2026 LokMais. Sua liberdade merece mais.
