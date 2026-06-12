# LokMais

Site institucional + landing pages da **LokMais** — locação de motos Honda com planos semanais.
*Sua liberdade merece mais.*

> Stack: HTML puro + CSS (com tokens compartilhados em `lokmais.css`) + JavaScript vanilla.
> O site publico continua estatico, mas o painel admin e a API CMS rodam em Vercel Functions com Turso/libSQL.

---

## Estrutura

```
├── index.html                  ← Home (hero com vídeo YouTube de fundo)
├── planos.html                 ← Planos e Preços
├── como-funciona.html          ← Passo a passo do aluguel
├── motos.html                  ← Catálogo da frota Honda
├── sobre.html                  ← Sobre a LokMais
├── unidades.html               ← Mapa interativo de unidades
├── faq.html                    ← Dúvidas frequentes (categorizadas)
├── contato.html                ← Formulário + canais de atendimento
├── arquivados/simulador.html   ← Simulador de aluguel arquivado temporariamente
├── seja-franqueado.html        ← LP de alta conversão para franqueados
├── admin.html                  ← Painel CMS Turso
├── cms-config.js               ← Configuração das seções editáveis do CMS
├── schema.sql                  ← Schema Turso/libSQL do CMS
├── api/cms/                    ← API Vercel conectada ao Turso
├── 00-sistema-de-design.html   ← Documentação visual do sistema
├── DESIGN.md                   ← Sistema de design (Markdown)
├── lokmais.css                 ← Tokens (cor, tipografia, espaço, raio, sombra)
└── assets/
    ├── logo-lockup-white.png   ← Logo principal (header/footer)
    ├── logo-full.png           ← Logo completo
    ├── icon-orange.png         ← Ícone (laranja, fundo escuro)
    ├── icon-navy.png           ← Ícone (navy, fundo claro)
    ├── image-slot.js           ← Drag-and-drop para preencher imagens
    └── cms-public.js           ← Hidratação publica via /api/cms/public
```

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

As paginas publicas preservam o HTML atual. Quando o Turso tiver itens publicados, `assets/cms-public.js` substitui os blocos de motos, planos, unidades, FAQ, depoimentos e imagens editaveis. Se o banco estiver vazio, o conteudo estatico atual permanece visivel.

---

## Antes de publicar — substituir placeholders

Estes pontos têm valores genéricos no código. **Trocar antes de subir para produção:**

| O quê | Onde | Valor atual |
|---|---|---|
| WhatsApp oficial | páginas principais | `5531972285918` aplicado como padrão |
| Floats e botões WhatsApp | páginas principais | `https://wa.me/5531972285918` |
| ID do vídeo YouTube (hero) | `index.html` | `const YT_ID = "5qap5aO4i9A"` |
| Endereços/telefones das unidades | `unidades.html` | `0000-0000`, ruas com `0000` |
| Posição dos pinos no mapa | `unidades.html` | aproximação NE — refinar lat/lng |
| Nota e avaliações do Google | `index.html` | "4,9 placeholder" |
| Depoimentos em vídeo | `index.html` | image-slots vazios |
| E-mails | `contato.html`, footers | `contato@lokmais.com`, `expansao@lokmais.com` |
| Fotos reais de equipe/depoimentos | páginas secundárias | `<image-slot>` drag-and-drop |

---

## Sistema de design

- **Tipografia:** Poppins (geométrica, bold) — display, títulos e corpo.
- **Cores:** Marinho `#191970` + Laranja `#F47A18`, neutros frios.
- **Componentes:** botões pílula, cards de plano, cards de moto, banners diagonais, FAQ accordion.
- **Documentação:** `00-sistema-de-design.html` e `DESIGN.md`.

---

## Como rodar localmente

Para testar apenas o HTML estatico, basta abrir `index.html` em qualquer servidor local:

```bash
# com Python
python3 -m http.server 8000

# ou com Node
npx serve

# ou com PHP
php -S localhost:8000
```

Para testar as rotas `/api/cms`, use Vercel local:

```bash
npm install
npx vercel dev --listen 127.0.0.1:3000
npm run check
```

No ambiente local (`localhost` ou `127.0.0.1`), o `/admin.html` abre em modo demonstração com qualquer e-mail/senha se a API de autenticação ainda não tiver `ADMIN_EMAIL` e `ADMIN_PASSWORD`. Em produção, o login sempre exige as variáveis reais.

---

## Deploy

Já compatível com qualquer static host. Para o Google Cloud Run (atual):

```bash
# subir como container estático (nginx servindo a raiz)
gcloud run deploy lok-mais --source .
```

Para GitHub Pages, basta habilitar nas configurações do repo.

---

© 2026 LokMais. Sua liberdade merece mais.
