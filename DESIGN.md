# LokMais — Sistema de Design

> Identidade visual da locação de motos **LokMais**.
> Tom: **esportivo, veloz, em movimento.** Promessa: *Sua liberdade merece.*
> Versão visual navegável: `00-sistema-de-design.html`

---

## 1. Marca & contexto

- **Negócio:** locação de motos (Honda Start 160, Fan 2024–2026), planos semanais, caução única R$800.
- **Público:** pessoas que querem uma moto para o dia a dia e liberdade de locomoção.
- **Objetivo nº 1 do site:** gerar contato/lead no **WhatsApp**.
- **Origem da paleta:** reconstruída a partir do logo oficial (não dos design systems anexados, que não batem com moto-rental).

---

## 2. Cores

### Azul-marinho
| Token | Hex | Uso |
|---|---|---|
| `--navy-900` | `#0B0B2E` | fundo profundo |
| `--navy-800` | `#111146` | seções escuras |
| `--navy-700` | `#191970` | **marinho primário** (wordmark) |
| `--navy-600` | `#222291` | hover / realce |
| `--navy-500` | `#2D2DB4` | detalhes |

### Laranja
| Token | Hex | Uso |
|---|---|---|
| `--orange-deep` | `#CE6407` | texto laranja sobre claro |
| `--orange` | `#F47A18` | **laranja primário / CTA** |
| `--orange-bright` | `#FB970A` | hover / destaque |
| `--orange-soft` | `#FFEAD3` | tags / fundos suaves |

### Neutros & apoio
| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#13132B` | texto principal |
| `--muted` | `#666C86` | texto secundário |
| `--cloud` | `#F4F5FB` | fundo de seção claro |
| `--paper` | `#FFFFFF` | cartões |
| WhatsApp | `#25D366` | botão WhatsApp |

---

## 3. Tipografia

| Papel | Fonte | Peso/estilo |
|---|---|---|
| Display / títulos | **Saira Condensed** | 900, **itálico**, CAIXA-ALTA |
| Títulos de UI | **Saira** | 600–800 |
| Corpo | **Barlow** | 400–600 |

- Display sempre em CAIXA-ALTA, `line-height` ~0.92, itálico para passar direção/velocidade.
- Corpo em Sentence case, `line-height` 1.6.
- Realce: primeira(s) palavra(s) do título em **laranja**.

---

## 4. Logo

- **Fundo claro:** logo completo (`assets/logo-full.png`).
- **Fundo escuro:** ícone laranja+branco (`assets/icon-orange.png`) + wordmark "LOKMAIS" em branco (Saira Condensed itálico 900).
- **Ícone isolado:** favicon, avatar, selo (`assets/icon-navy.png`).
- Área de respiro mínima = altura do "L".

---

## 5. Botões

- Cantos **pílula** (`999px`), Saira 800 CAIXA-ALTA.
- `btn-primary` (laranja) = ação principal · `btn-wa` (verde) = WhatsApp · `btn-navy`/`btn-white` = secundário · `btn-ghost` = sobre escuro.
- Hover: sobe 2px + brilho. Press: `translateY(1px) scale(.99)`.

---

## 6. Componentes

- **Card de plano:** retrato escuro com recorte diagonal, preço em itálico laranja, CTA full-width.
- **Passo (como funciona):** número gigante itálico laranja + título + descrição.
- **Card de moto:** foto (placeholder hachurado) + nome em itálico marinho + specs.
- **Placeholder de foto:** hachura diagonal rotulada `FOTO · …` até chegarem imagens reais.

---

## 7. Movimento & ritmo

- Cortes **diagonais** (clip-path) em seções/cards = velocidade.
- **Speed lines** laranja atrás de números e títulos.
- Entradas fade-up 26px / 600ms ao rolar. Sem parallax exagerado.
- Itálico = "indo pra frente".

---

## 8. Espaço, raio, sombra

- Base 4px. Seções 64–128px de respiro vertical. Coluna máx. **1200px**, padding lateral 24px.
- Raios: `8 / 14 / 22 / 32 / pílula`.
- Sombras: suave (`sh-sm`), card (`sh-md`), flutuante (`sh-lg`), laranja/marinho tingidas para CTAs.

---

## 9. Páginas previstas (em sequência)

1. **Home / Landing** — 2–3 variações
2. **Planos e Preços**
3. **Como Funciona**
4. **Catálogo de Motos**
5. **Sobre a LokMais**
6. **FAQ**
7. **Contato / Unidades**
8. **LP Seja Franqueado** — alta conversão, sem exibir valores (lead no WhatsApp)

Todos os tokens vivem em `lokmais.css`.
