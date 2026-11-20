---
name: "LokMais Belo Horizonte e região — LP V6"
description: "Campanha fotográfica, catálogo em areia/carvão e formulário único compacto que acompanha a página."
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
  display: {fontFamily: "General Sans, Arial, sans-serif", fontSize: "clamp(2.5rem,3.6vw,3.5rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-.03em"}
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
  input: {backgroundColor: "{colors.white}", textColor: "{colors.ink}", rounded: "{rounded.square}", padding: "10px 12px"}
  inquiry-rail: {width: "320px", position: "fixed bottom-right 20px (desktop) / bottom bar (<1100px)"}
  inquiry-panel: {backgroundColor: "{colors.paper}", textColor: "{colors.ink}"}
  process: {backgroundColor: "{colors.sand}", textColor: "{colors.ink}"}
---

# Design System: LokMais — LP V7

## Overview

**Creative North Star: "Balcão de catálogo da unidade 855"**

Campanha fotográfica de trabalho na abertura, percurso em areia e escolha comercial com fotos de modelos, prazos e cotação destacada. General Sans conserva proporções naturais; a ação laranja conecta as etapas sem urgência ou promessa inventada.

Escopo exclusivo: `lp-minas/` neste checkout de aprovação. Fonte: `src/index.html`, `src/styles.css`, `src/app.js` e `src/plans.js`. Não substitui o DESIGN raiz nem outras páginas. O contrato comercial e a base de cor estão em `/Users/tiagopace/Documents/Metry-IA/tarefas/lokmais/2026-11-20-github-vercel-aprovacao-lp/v5/REVISAO.md`; este documento registra também as correções V6 atuais de cidade, seleção inicial e formulário persistente; a semente original 08248f20, candidato 7, permanece registrada na tarefa original. Sem novo sorteio ou comp aprovado. A documentação não autoriza publicação, merge, CRM nem aprovação comercial.

**Key Characteristics:**
- Fotografia integral sob o cabeçalho e rotação de cidade independente da oferta.
- Processo em areia, catálogo em papel/cinza quente, cotação em carvão e ação laranja.
- Controles reais de modelo e prazo, Minha Moto inicial e formulário único persistente com demonstração explícita.

Evidência V6 em preparação pelo responsável: `/Users/tiagopace/Documents/Metry-IA/work/lokmais-lp-v6-qa/final`, com primeira rodada no diretório irmão `first`. Não se registra zero FAIL nem parecer final antes do fechamento da revisão V6. O deslocamento do conteúdo no desktop é deliberado: a faixa direita é ocupada pelo formulário. Sobreposição do painel inferior foi pedida pelo usuário; o documento reserva espaço ao fim e o painel expandido tem rolagem própria. Avisos mecânicos de centralização/cobertura não comprovam, por si, leitura livre de sobreposição. Lint informado: 0 FAIL/2 WARN por bordas funcionais; detector DEGRADED por parsers ausentes. Sem mídia nova. Nenhuma nova renderização ou scan nesta documentação.

## Colors

Azul permanece na campanha, marca, ícones e unidade; o percurso usa `sand` com tinta escura. `sand-deep` organiza abas/inclusões; `paper` sustenta catálogo e contato; `warm-ground` cobre a seção de planos; o formulário persistente usa `paper` sobre trilho `sand`, com campos brancos. O estágio de foto usa areia. `charcoal` destaca a cotação com branco e `quote-muted`; laranja identifica CTA e bordas de seleção. `warm-quiet` mantém notas legíveis sobre os fundos quentes. Valores normativos no frontmatter.

**The Contraste Funcional Rule.** Aplicar a paleta quente construída sem degradês; sobre as fotografias usar scrim neutro uniforme por imagem e tamanho, conforme sidecar. Não trocar a areia por um grande campo azul no processo.

## Typography

General Sans real nos pesos 400/500/600/700, sem síntese, condensação, itálico ou transformação horizontal. H1: escala `display` em desktop a partir de 1100 px, 4rem a partir de 1660 px; abaixo de 1100 px usa 3.3rem até 800 px, 2.75rem até 600 px e `clamp(1.875rem,8.9vw,2.6rem)` até 600 px. Quebra editorial após “moto”; cidade sem quebra interna, em janela de entrelinha 1.14 (1.18 no celular).

H2 de seção: escala `headline`, 2.5rem até 800 px e 2rem até 600 px. H2 da campanha: `hero-message`, 1.25rem até 1100 px e 1.125rem até 800 px. Cotação: `quote`, 2.5rem até 600 px e 2.25rem até 375 px. Preços usam números tabulares. Notas ficam em .875rem, corpo em 1rem; parágrafos têm limite geral de 65ch.

**The Proporção Nativa Rule.** Preservar largura natural, títulos fortes em caixa normal e logo oficial; não inserir rótulos decorativos acima dos títulos.

## Layout

Contêiner máximo de 1328 px com bordas internas de 32/28/24/20/18 px nos intervalos padrão/1100/800/600/375 px. Seções comuns: 112/88/64 px de respiro em desktop/até 1100/até 600 px. Abertura com foto integral e cabeçalho absoluto transparente; altura mínima 760 px no desktop (a partir de 1100 px) e 820 px abaixo desse limite. Em até 600 px, padding inferior de 260 px mantém a oferta acima do painel; os controles da galeria ficam a 218/220 px do fundo nos tamanhos estreitos.

Faixa laranja sobreposta ao fim da abertura, sem sombra; três benefícios viram coluna até 600 px. Processo: quatro colunas, duas até 800 px, padding vertical 64/60/52 px em desktop/tablet/celular. Sequência: contato → dados/CNH/comprovante → análise e aprovação → retirada após contratação.

Catálogo: cartões de modelo ocupam a largura do painel. Acima de 800 px, estágio e cotação em 43/57 (V7 removeu o empilhamento criado para a coluna lateral); até 800 px vira uma coluna. Até 600 px, painel com 20 × 14 px e fotos menores nos controles. Prazos mantêm duas colunas (condição e semanal), com diária equivalente abaixo.

Há um único formulário real, compacto, que acompanha a página (V7, a pedido do usuário: a coluna lateral fixa da V6 foi rejeitada). Desktop a partir de 1100 px: cartão de 320 px fixo a 20 px do canto inferior direito, cabeçalho carvão "Fale com a LokMais", oferta atual e WhatsApp + Continuar; Continuar ou o toggle expandem os demais campos no mesmo cartão (altura máxima `100dvh - 48px`, rolagem interna). Abaixo de 1100 px: barra inferior carvão de ~68 px com diária/semanal e "Quero alugar", que expande o formulário completo; body reserva 84 px. Sem reserva lateral no body ou cabeçalho. O cartão/barra fica fora de cena (e `inert`) enquanto a abertura ocupa a tela e, só no desktop, enquanto o comparador está no centro da tela (ele tem CTA próprio e o cartão cobriria os preços); reaparece ao expandir, ao receber foco ou por qualquer CTA de contato. A seção de contato contém resumo e ação para abrir o formulário.

## Elevation & Depth

Sem sombras. Contraste de superfícies e bordas de seleção criam hierarquia; fotos preservam materialidade. Hover de botões e modelos desloca −2 px, sem transformar o conjunto em cards ornamentais.

## Shapes

Cantos retos em painéis, campos, fotos e botões. Bordas funcionais: campos de 1 px; modelo/prazo de 2 px, laranja quando selecionado. Marcador circular do prazo tem 22 px, contorno e ponto interno de 10 px no estado ativo; os números dos passos usam círculos de 25 px. A máscara dos passos tem margem negativa de 16 px para não cortar números/ícones.

## Components

**Catálogo comercial.** Cartões com foto, nome e preço semanal de entrada selecionam modelos; o menor valor considera somente prazos daquele modelo. São botões com `aria-pressed`; o foco retorna ao modelo após atualizar a seleção. Abas de modalidade aceitam setas, Home/End. Prazos são botões com estado circular e preço semanal; a condição fica junto ao prazo e também abaixo da cotação, sem eyebrow. O painel carvão mostra diária equivalente, semana, prazo e nota de cálculo. Caução e custo inicial continuam explícitos. CTA distingue temporário de Minha Moto e abre o formulário com a escolha. Na inicialização JavaScript, Minha Moto/Start 2026 seminova/36 meses (`mm-semi-36`) é a seleção: R$389,90/semana, R$55,70/dia equivalente e caução R$800. Cotação, inclusões, resumo e formulário acompanham `updateCosts`/`setContact`. O primeiro banner também usa esse plano; o link genérico Planos preserva a escolha atual.

**Oferta e movimento.** Três campanhas ilustrativas por IA: jaqueta, Start vermelha no estúdio, motociclista/Fan azul na rua. H2/oferta/CTA acompanham os banners a cada 6.5s e selecionam planos do mesmo array; cidade do H1 gira por `cityNames` (Belo Horizonte/Contagem/Minas) a cada 3s, independentemente. A cidade sai para −105% em 200 ms e entra de +105% em 360 ms; a janela evita transbordamento. A pausa explícita, aba oculta, saída do viewport e movimento reduzido interrompem os dois ciclos. Mouse/foco na galeria pausam somente banners; a cidade continua sem reiniciar o temporizador. Navegação manual dos slides também não reinicia o relógio da cidade. Minas no H1 não confirma atendimento estadual; Santa Luzia permanece no conteúdo fixo e retirada somente em Contagem.

**Feedback.** Crossfade de foto em 1s, reenquadramento 1→1.035 em 9s, entrada de mensagem em .4s, foto do modelo em 350 ms/12 px. Passos entram em .65s com atrasos 0/100/200/300 ms e desenho SVG de .75s; benefícios em .6s com 0/90/180 ms. Movimento reduzido remove animações/autoplay mantendo conteúdo e cotação visíveis.

**Ações e contato.** Botões laranja com tinta ou claros com azul, peso 600 e padding padrão 15 × 28 px. Foco laranja de 3 px, afastamento 5 px. No cartão, campos têm altura mínima de 44 px e padding 9 × 12 px; rótulos persistentes, validação textual local e erro explícito. Resultado inline tem `role=status`. Todos os links para contato e CTA de escolha abrem o mesmo formulário e focam o nome, sem rolar a página; os dados preenchidos são preservados. No estado compacto, Continuar expande antes de validar/enviar a demonstração. Toggle de 44 × 44 px atualiza `aria-expanded`; Escape recolhe (todas as larguras) e devolve o foco ao toggle. Ao expandir, cabeçalho do painel é sticky; abaixo de 1100 px há rolagem interna. FAQ permanece `details/summary` nativo. Não há dock com recolhimento por títulos/foco: o formulário persistente substitui esse comportamento V5.

**The Demonstração Clara Rule.** Preservar as 14 opções MG, semana como cobrança, diária como semana/7 arredondada e cauções por modalidade: R$800 no Minha Moto, temporário a confirmar. Óleo: duas trocas mensais no Minha Moto, excluído no temporário. Formulário não envia nem salva, não recebe documentos e não reserva moto; não apresentar contato ou recebimento como efetivos.

## Do's and Don'ts

- **Do** preservar campanha/ativo oficial, seleção por modelo/prazo e condições junto do preço.
- **Do** manter a cidade independente de hover/foco/navegação dos banners; preservar pausa explícita, visibilidade e movimento reduzido.
- **Do** manter retirada em Contagem, formulário único compacto, valores sincronizados e rolagem interna do cartão expandido.
- **Don't** voltar à coluna lateral fixa de altura total (rejeitada pelo usuário em 20/11/2026).
- **Don't** introduzir degradês, fontes distorcidas, eyebrows, sombras ou urgência inventada.
- **Don't** usar imagem de campanha como prova de estoque, cliente ou local real; nem “Minas” como promessa de cobertura estadual.
- **Don't** afirmar publicação, aprovação comercial, ganhos, conversão ou entrega no CRM a partir desta prévia.
