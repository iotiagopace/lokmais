---
name: "LokMais Belo Horizonte e região — LP V5"
description: "Campanha fotográfica, percurso em areia e catálogo comercial com cotação em carvão."
colors:
  blue: "#142d87"
  blue-deep: "#102366"
  ink: "#111b2b"
  orange: "#f47a18"
  orange-hover: "#ff963e"
  white: "#fff"
  sand: "#f1e5d5"
  sand-deep: "#ded0bc"
  paper: "#f8f4ed"
  charcoal: "#18222d"
  warm-quiet: "#49433c"
  warm-ground: "#e9e6e0"
  control: "#e4ded3"
  selected: "#f0ddbf"
  quote-muted: "#eadfce"
  field-border: "#aebbcf"
  error: "#a12518"
  on-blue-muted: "#e0e8ff"
  soft: "#e2e9f3"
  pale: "#eef2f8"
  route-line: "#b7a991"
typography:
  display: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "clamp(3rem,4.45vw,4rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-.03em"}
  headline: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "clamp(2rem,3.1vw,2.75rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-.03em"}
  title: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-.02em"}
  body: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "1rem", fontWeight: 400, lineHeight: 1.5}
  small: {fontFamily: "General Sans, Arial, sans-serif", fontSize: ".875rem", fontWeight: 400, lineHeight: 1.5}
  hero-message: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "1.375rem", fontWeight: 500, lineHeight: 1.4, letterSpacing: "0"}
  quote: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "2.75rem", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-.025em"}
rounded: {square: "0", circle: "50%"}
spacing: {edge: "32px", section: "112px", panel: "32px", control-gap: "12px"}
components:
  button-primary: {backgroundColor: "{colors.orange}", textColor: "{colors.ink}", rounded: "{rounded.square}", padding: "15px 28px"}
  button-light: {backgroundColor: "{colors.white}", textColor: "{colors.blue}", rounded: "{rounded.square}", padding: "15px 28px"}
  model-card: {backgroundColor: "{colors.control}", textColor: "{colors.ink}", padding: "16px"}
  model-card-selected: {backgroundColor: "{colors.paper}", textColor: "{colors.ink}"}
  term-control: {backgroundColor: "{colors.control}", textColor: "{colors.ink}", padding: "16px"}
  term-control-selected: {backgroundColor: "{colors.selected}", textColor: "{colors.ink}"}
  quote: {backgroundColor: "{colors.charcoal}", textColor: "{colors.white}", padding: "24px 26px"}
  input: {backgroundColor: "{colors.white}", textColor: "{colors.ink}", rounded: "{rounded.square}", padding: "13px 14px"}
  process: {backgroundColor: "{colors.sand}", textColor: "{colors.ink}"}
---

# Design System: LokMais — LP V5

## Overview

**Creative North Star: "Balcão de catálogo da unidade 855"**

Campanha fotográfica de trabalho na abertura, percurso em areia e escolha comercial com fotos de modelos, prazos e cotação destacada. General Sans conserva proporções naturais; a ação laranja conecta as etapas sem urgência ou promessa inventada.

Escopo exclusivo: `lp-minas/` neste checkout de aprovação. Fonte: `src/index.html`, `src/styles.css`, `src/app.js` e `src/plans.js`. Não substitui o DESIGN raiz nem outras páginas. O contrato está em `/Users/tiagopace/Documents/Metry-IA/tarefas/lokmais/2026-11-20-github-vercel-aprovacao-lp/v5/REVISAO.md`; a semente original 08248f20, candidato 7, permanece registrada na tarefa original. Sem novo sorteio ou comp aprovado. A documentação não autoriza publicação, merge, CRM nem aprovação comercial.

**Key Characteristics:**
- Fotografia integral sob o cabeçalho e rotação de cidade independente da oferta.
- Processo em areia, catálogo em papel/cinza quente, cotação em carvão e ação laranja.
- Controles reais de modelo e prazo, seleção preservada no contato e demonstração explícita.

Evidência já produzida: `/Users/tiagopace/Documents/Metry-IA/work/lokmais-lp-v5-qa/final`, com capturas 1440/768/390 e 1280 × 720. Inspector: 0 FAIL e 3 WARN justificados por controles funcionais, paleta quente solicitada e campanha sem vídeo; detector DEGRADED por parsers ausentes. Revisão visual independente não encontrou correção material. Isso não comprova conversão, indexação ou entrega de leads. Nenhuma nova renderização ou scan nesta documentação.

## Colors

Azul permanece na campanha, marca, ícones e unidade; o percurso usa `sand` com tinta escura. `sand-deep` organiza abas/inclusões; `paper` sustenta catálogo e contato; `warm-ground` cobre seção de planos e formulário. O estágio de foto usa areia. `charcoal` destaca a cotação com branco e `quote-muted`; laranja identifica CTA e bordas de seleção. `warm-quiet` mantém notas legíveis sobre os fundos quentes. Valores normativos no frontmatter.

**The Contraste Funcional Rule.** Aplicar a paleta quente construída sem degradês; sobre as fotografias usar scrim neutro uniforme por imagem e tamanho, conforme sidecar. Não trocar a areia por um grande campo azul no processo.

## Typography

General Sans real nos pesos 400/500/600/700, sem síntese, condensação, itálico ou transformação horizontal. H1: escala `display`; 3.3rem até 1100 px, 2.75rem até 800 px e `clamp(1.875rem,8.9vw,2.6rem)` até 600 px. Quebra editorial após “moto”; cidade sem quebra interna, em janela de entrelinha 1.14 (1.18 no celular).

H2 de seção: escala `headline`, 2.5rem até 800 px e 2rem até 600 px. H2 da campanha: `hero-message`, 1.25rem até 1100 px e 1.125rem até 800 px. Cotação: `quote`, 2.5rem até 600 px e 2.25rem até 375 px. Preços usam números tabulares. Notas ficam em .875rem, corpo em 1rem; parágrafos têm limite geral de 65ch.

**The Proporção Nativa Rule.** Preservar largura natural, títulos fortes em caixa normal e logo oficial; não inserir rótulos decorativos acima dos títulos.

## Layout

Contêiner máximo de 1328 px com bordas internas de 32/28/24/20/18 px nos intervalos padrão/1100/800/600/375 px. Seções comuns: 112/88/64 px de respiro em desktop/até 1100/até 600 px. Abertura com foto integral e cabeçalho absoluto transparente; altura mínima 740 px, 800 px a partir de 1600, 730 px até 1100, 720 px até 800 e 748 px até 600.

Faixa laranja sobreposta ao fim da abertura, sem sombra; três benefícios viram coluna até 600 px. Processo: quatro colunas, duas até 800 px, padding vertical 64/60/52 px em desktop/tablet/celular. Sequência: contato → dados/CNH/comprovante → análise e aprovação → retirada após contratação.

Catálogo: cartões de modelo ocupam a largura do painel; abaixo, estágio de foto e cotação em 43/57. Até 800 px, uma coluna; até 600 px, painel com 20 × 14 px, fotos menores nos controles e estágio de foto amplo. Prazos mantêm duas colunas (condição e semanal), com diária equivalente destacada abaixo. Contato e chamada regional empilham nas adaptações existentes; o celular reserva 98 px ao fim e scroll-padding inferior de 112 px para o dock.

## Elevation & Depth

Sem sombras. Contraste de superfícies e bordas de seleção criam hierarquia; fotos preservam materialidade. Hover de botões e modelos desloca −2 px, sem transformar o conjunto em cards ornamentais.

## Shapes

Cantos retos em painéis, campos, fotos e botões. Bordas funcionais: campos de 1 px; modelo/prazo de 2 px, laranja quando selecionado. Marcador circular do prazo tem 22 px, contorno e ponto interno de 10 px no estado ativo; os números dos passos usam círculos de 25 px. A máscara dos passos tem margem negativa de 16 px para não cortar números/ícones.

## Components

**Catálogo comercial.** Cartões com foto, nome e preço semanal de entrada selecionam modelos; o menor valor considera somente prazos daquele modelo. São botões com `aria-pressed`; o foco retorna ao modelo após atualizar a seleção. Abas de modalidade aceitam setas, Home/End. Prazos são botões com estado circular e preço semanal; a condição fica junto ao prazo e também abaixo da cotação, sem eyebrow. O painel carvão mostra diária equivalente, semana, prazo e nota de cálculo. Caução e custo inicial continuam explícitos. CTA distingue temporário de Minha Moto e transfere a escolha ao contato.

**Oferta e movimento.** Três campanhas ilustrativas por IA: jaqueta, Start vermelha no estúdio, motociclista/Fan azul na rua. H2/oferta/CTA acompanham os banners a cada 6.5s e selecionam planos do mesmo array; cidade do H1 gira por `cityNames` (Belo Horizonte/Contagem/Minas) a cada 3s, independentemente. A cidade sai para −105% em 200 ms e entra de +105% em 360 ms; a janela evita transbordamento. Pausa, foco/mouse na galeria, aba oculta, saída do viewport e movimento reduzido interrompem os ciclos. Minas no H1 não confirma atendimento estadual; Santa Luzia permanece no conteúdo fixo e retirada somente em Contagem.

**Feedback.** Crossfade de foto em 1s, reenquadramento 1→1.035 em 9s, entrada de mensagem em .4s, foto do modelo em 350 ms/12 px. Passos entram em .65s com atrasos 0/100/200/300 ms e desenho SVG de .75s; benefícios em .6s com 0/90/180 ms. Movimento reduzido remove animações/autoplay mantendo conteúdo e cotação visíveis.

**Ações e contato.** Botões laranja com tinta ou claros com azul, peso 600, padding padrão 15 × 28 px e mínimo de 54 px. Foco laranja de 3 px, afastamento 5 px. Campos brancos com rótulos persistentes, validação textual local e erro explícito; resultado inline tem `role=status`. Dock até 600 px aparece após saída do CTA hero e recolhe no formulário/foco ou quando H2 cruza sua área; oculto fica `inert`, `aria-hidden` e fora da tabulação. FAQ usa `details/summary` nativos.

**The Demonstração Clara Rule.** Preservar as 14 opções MG, semana como cobrança, diária como semana/7 arredondada e cauções por modalidade: R$800 no Minha Moto, temporário a confirmar. Óleo: duas trocas mensais no Minha Moto, excluído no temporário. Formulário não envia nem salva, não recebe documentos e não reserva moto; não apresentar contato ou recebimento como efetivos.

## Do's and Don'ts

- **Do** preservar campanha/ativo oficial, seleção por modelo/prazo e condições junto do preço.
- **Do** manter rotação de cidade independente dos banners e todos os controles de pausa/foco.
- **Do** manter retirada em Contagem e recolher o dock para leitura e formulário.
- **Don't** introduzir degradês, fontes distorcidas, eyebrows, sombras ou urgência inventada.
- **Don't** usar imagem de campanha como prova de estoque, cliente ou local real; nem “Minas” como promessa de cobertura estadual.
- **Don't** afirmar publicação, aprovação comercial, ganhos, conversão ou entrega no CRM a partir desta prévia.
