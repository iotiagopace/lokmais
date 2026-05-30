# LokMais

Site institucional + landing pages da **LokMais** — locação de motos Honda com planos semanais.
*Sua liberdade merece mais.*

> Stack: HTML puro + CSS (com tokens compartilhados em `lokmais.css`) + JavaScript vanilla.
> Sem build, sem framework. Pode ser hospedado direto em qualquer static host (Cloud Run, Vercel, Netlify, GitHub Pages, Firebase Hosting).

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
├── simulador.html              ← Simulador de aluguel (plano → moto → período)
├── lp-seja-franqueado.html     ← LP de alta conversão para franqueados
├── 00-sistema-de-design.html   ← Documentação visual do sistema
├── DESIGN.md                   ← Sistema de design (Markdown)
├── lokmais.css                 ← Tokens (cor, tipografia, espaço, raio, sombra)
└── assets/
    ├── logo-lockup-white.png   ← Logo principal (header/footer)
    ├── logo-full.png           ← Logo completo
    ├── icon-orange.png         ← Ícone (laranja, fundo escuro)
    ├── icon-navy.png           ← Ícone (navy, fundo claro)
    └── image-slot.js           ← Drag-and-drop para preencher imagens
```

---

## Antes de publicar — substituir placeholders

Estes pontos têm valores genéricos no código. **Trocar antes de subir para produção:**

| O quê | Onde | Valor atual |
|---|---|---|
| WhatsApp oficial | `simulador.html`, `contato.html`, `lp-seja-franqueado.html` | `const WA = '5500000000000'` |
| Floats e botões WhatsApp | todas as páginas | `href="#"` |
| ID do vídeo YouTube (hero) | `index.html` | `const YT_ID = "5qap5aO4i9A"` |
| Endereços/telefones das unidades | `unidades.html` | `0000-0000`, ruas com `0000` |
| Posição dos pinos no mapa | `unidades.html` | aproximação NE — refinar lat/lng |
| Nota e avaliações do Google | `index.html` | "4,9 placeholder" |
| Depoimentos em vídeo | `index.html` | image-slots vazios |
| E-mails | `contato.html`, footers | `contato@lokmais.com`, `expansao@lokmais.com` |
| Fotos reais (motos, equipe, depoimentos) | todas | `<image-slot>` drag-and-drop |

---

## Sistema de design

- **Tipografia:** Poppins (geométrica, bold) — display, títulos e corpo.
- **Cores:** Marinho `#191970` + Laranja `#F47A18`, neutros frios.
- **Componentes:** botões pílula, cards de plano, cards de moto, banners diagonais, FAQ accordion.
- **Documentação:** `00-sistema-de-design.html` e `DESIGN.md`.

---

## Como rodar localmente

Por ser HTML estático, basta abrir `index.html` em qualquer servidor estático local:

```bash
# com Python
python3 -m http.server 8000

# ou com Node
npx serve

# ou com PHP
php -S localhost:8000
```

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
