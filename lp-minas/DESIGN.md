---
name: "LokMais Belo Horizonte e região — LP V10"
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
  input: {backgroundColor: "{colors.white}", textColor: "{colors.ink}", rounded: "{rounded.square}", padding: "9px 12px"}
  inquiry-rail: {width: "320px"}
  mode-control: {backgroundColor: "{colors.control}", textColor: "{colors.ink}", padding: "18px 20px"}
  mode-control-selected: {backgroundColor: "{colors.selected}", textColor: "{colors.ink}"}
  inquiry-panel: {backgroundColor: "{colors.paper}", textColor: "{colors.ink}"}
  process: {backgroundColor: "{colors.sand}", textColor: "{colors.ink}"}
---

# Design System: LokMais — LP V10

## Overview

**Creative North Star: "Balcão de catálogo da unidade 855"**

Campanha fotográfica de trabalho na abertura, percurso em areia e escolha comercial com fotos de modelos, prazos e cotação semanal destacada. General Sans conserva proporções naturais; a ação laranja conecta as etapas sem urgência ou promessa inventada.

Escopo exclusivo: `lp-minas/` neste checkout de aprovação. Fonte: `src/index.html`, `src/styles.css`, `src/app.js` e `src/plans.js`. Não substitui o DESIGN raiz nem outras páginas. O contrato comercial e a base de cor estão em `/Users/tiagopace/Documents/Metry-IA/tarefas/lokmais/2026-11-20-github-vercel-aprovacao-lp/v5/REVISAO.md`; este documento registra o estado V10: preço semanal principal, escolha única entre abertura/catálogo/contato, comparador em três passos e formulário compacto; a semente original 08248f20, candidato 7, permanece registrada na tarefa original. Sem novo sorteio ou comp aprovado. A documentação não autoriza publicação, merge, CRM nem aprovação comercial.

**Key Characteristics:**
- Fotografia integral sob o cabeçalho e rotação de cidade independente da oferta.
- Processo em areia, catálogo em papel/cinza quente, cotação em carvão e ação laranja.
- Três passos funcionais de modalidade/modelo/prazo, Minha Moto inicial e formulário único compacto.
- Semanal principal em todas as ofertas; diária equivalente secundária e sem troca autônoma do plano pelos banners.

Evidência V9 em `/Users/tiagopace/Documents/Metry-IA/work/lokmais-lp-v9-qa/first` (1440/768/375); pacote `final` em preparação pelo responsável. Não antecipar zero FAIL ou parecer final. Cobertura em 375 px pelo painel móvel é comportamento fixo preexistente solicitado pelo usuário; há reserva inferior e acesso por rolagem, sujeito à revisão independente. Lint informado: 0 FAIL/3 WARN por bordas funcionais. Detector DEGRADED, sem afirmar auditoria completa. Sem mídia nova. Escopo de entrega autorizado: atualizar o mesmo Preview, sem produção; esta documentação não executa publicação, renderização ou scan.

## Colors

Azul permanece na campanha, marca, ícones e unidade; o percurso usa `sand` com tinta escura. `sand-deep` organiza abas/inclusões; `paper` sustenta catálogo e contato; `warm-ground` cobre a seção de planos; o cartão compacto usa `paper`, cabeçalho/barra em carvão e campos brancos. O estágio de foto usa areia. `charcoal` destaca a cotação com branco e `quote-muted`; laranja identifica CTA e bordas de seleção. `warm-quiet` mantém notas legíveis sobre os fundos quentes. Valores normativos no frontmatter.

**The Contraste Funcional Rule.** Aplicar a paleta quente construída sem degradês; sobre as fotografias usar scrim neutro uniforme por imagem e tamanho, conforme sidecar. Não trocar a areia por um grande campo azul no processo.

## Typography

General Sans real nos pesos 400/500/600/700, sem síntese, condensação, itálico ou transformação horizontal. H1 usa `display` no desktop; 3.3rem em até 1100 px, 2.75rem em até 800 px e `clamp(1.875rem,8.9vw,2.6rem)` em até 600 px. Quebra editorial após “moto”; cidade sem quebra interna, em janela de entrelinha 1.14 (1.18 no celular).

H2 de seção: escala `headline`, 2.5rem até 800 px e 2rem até 600 px. H2 da campanha: `hero-message`, 1.25rem até 1100 px e 1.125rem até 800 px. Preço semanal principal: `quote` no comparador, 2.5rem até 600 px e 2.25rem até 375 px. Na abertura, semanal de 2.75rem, 2.5rem até 800 px e 2.25rem até 600 px; “por semana” fica adjacente e a diária equivalente é nota de .875rem. Preços usam números tabulares. Notas ficam em .875rem, corpo em 1rem; parágrafos têm limite geral de 65ch.

**The Proporção Nativa Rule.** Preservar largura natural, títulos fortes em caixa normal e logo oficial; não inserir rótulos decorativos acima dos títulos.

## Layout

Contêiner máximo de 1328 px com bordas internas de 32/28/24/20/18 px nos intervalos padrão/1100/800/600/375 px. Seções comuns: 112/88/64 px de respiro em desktop/até 1100/até 600 px. Abertura com foto integral e cabeçalho absoluto transparente; altura mínima de 740 px no desktop, 800 px a partir de 1600 px, 730 px até 1100 px, 720 px até 800 px e 748 px até 600 px. Os controles da galeria seguem dentro da abertura.

Faixa laranja sobreposta ao fim da abertura, sem sombra; três benefícios viram coluna até 600 px. Processo: quatro colunas, duas até 800 px, padding vertical 64/60/52 px em desktop/tablet/celular. Sequência: contato → dados/CNH/comprovante → análise e aprovação → retirada após contratação.

Catálogo: cartões de modelo ocupam a largura do painel. Acima de 800 px, estágio e cotação em 43/57 (V7 removeu o empilhamento criado para a coluna lateral); até 800 px vira uma coluna. Até 600 px, painel com 20 × 14 px e fotos menores nos controles. Prazos mantêm duas colunas (condição e semanal), com semanal principal e diária equivalente secundária no painel abaixo.

Há um único formulário real, compacto, que acompanha a página (V7, a pedido do usuário: a coluna lateral fixa da V6 foi rejeitada). Desktop a partir de 1100 px: cartão de 320 px fixo a 20 px do canto inferior direito, cabeçalho carvão "Fale com a LokMais", oferta atual e WhatsApp + Continuar; Continuar ou o toggle expandem os demais campos no mesmo cartão (altura máxima `100dvh - 48px`, rolagem interna). Abaixo de 1100 px: barra inferior carvão de ~68 px com diária/semanal e "Quero alugar", que expande o formulário completo; body reserva 84 px. Sem reserva lateral no body ou cabeçalho. O cartão/barra só fica fora de cena (e `inert`) no topo da página (rolagem < 80 px, onde a abertura tem CTA próprio); aparece no primeiro scroll (V7.1, a pedido do usuário: antes demorava três scrolls). No desktop, enquanto o comparador está no centro da tela, encolhe para a barra do título (~50 px) em vez de sumir, para não cobrir os preços; clicar nela abre o formulário. Expandir, foco ou qualquer CTA de contato sempre mostram o formulário completo. A seção de contato contém resumo e ação para abrir o formulário.

## Elevation & Depth

Superfícies comerciais planas. O cartão de contato desktop usa uma sombra difusa de sobreposição (`0 18px 40px -24px rgba(17,27,43,.45)`); no celular ela é removida. Contraste de superfícies e bordas de seleção criam hierarquia; fotos preservam materialidade. Hover de botões e modelos desloca −2 px, sem transformar o conjunto em cards ornamentais.

## Shapes

Cantos retos em painéis, campos, fotos e botões. Bordas funcionais: campos de 1 px; modelo/prazo de 2 px, laranja quando selecionado. Marcador circular do prazo tem 22 px, contorno e ponto interno de 10 px no estado ativo; os números dos passos usam círculos de 25 px. A máscara dos passos tem margem negativa de 16 px para não cortar números/ícones.

## Components

**Catálogo comercial.** Três passos com marcador laranja de 28 px: modalidade → modelo → prazo. Modalidade tem dois cartões `role=tab`, Minha Moto primeiro e inicial, com rádio visual, nome e descrição; selecionado usa fundo `selected` e borda laranja, e empilha até 600 px. Texto de aquisição é qualificado: “Para ficar com a moto ao final, conforme contrato. De 24 a 36 meses.” Temporário não prevê aquisição. Cartões de modelo têm foto/nome, sem preço; são botões `aria-pressed`, com foco devolvido após atualização. Abas aceitam setas/Home/End. Prazos exibem condição e semanal; cotação carvão destaca somente o valor semanal com “por semana” adjacente, sem rótulo “Você paga”. Diária é equivalente secundário; “Para começar” reúne primeira semana e caução.

**Escolha única.** Padrão `ownership`/`mm-semi-36`: R$389,90 por semana, R$55,70/dia equivalente, caução R$800. `updateCosts → setContact → renderHeroOffer` sincroniza catálogo, oferta da abertura, resumo e contato. Alterar plano no formulário chama `selectContactPlan → setMode`, atualizando o catálogo e a abertura. “Quero ajuda para escolher” oculta a oferta do cartão de contato e conserva o plano do catálogo como referência, sem fingir escolha concluída. A abertura mantém dois CTAs fixos: “Conhecer o Minha Moto” (laranja) e “Conhecer o aluguel temporário” (claro). Cada um abre a respectiva modalidade no comparador, preservando a última escolha daquela modalidade; Planos preserva a escolha.

**Oferta e movimento.** Três campanhas ilustrativas por IA: jaqueta, Start vermelha no estúdio, motociclista/Fan azul na rua. Banners mudam fotos e H2 visível a cada 6.5s; não escolhem planos nem alteram preços/CTA. H2 0/1 adaptam o texto à modalidade selecionada, evitando promessa de aquisição no temporário; a terceira mensagem permanece “Liberdade para seu corre”. Termos do hero usam nome/modelo/prazo do plano e caução correspondente; cidade do H1 gira por `cityNames` (Belo Horizonte/Contagem/Minas) a cada 3s, independentemente. A cidade sai para −105% em 200 ms e entra de +105% em 360 ms; a janela evita transbordamento. A pausa explícita, aba oculta, saída do viewport e movimento reduzido interrompem os dois ciclos. Mouse/foco na galeria pausam somente banners; a cidade continua sem reiniciar o temporizador. Navegação manual dos slides também não reinicia o relógio da cidade. Minas no H1 não confirma atendimento estadual; Santa Luzia permanece no conteúdo fixo e retirada somente em Contagem.

**Feedback.** Crossfade de foto em 1s, reenquadramento 1→1.035 em 9s, entrada de mensagem em .4s, foto do modelo em 350 ms/12 px. Passos entram em .65s com atrasos 0/100/200/300 ms e desenho SVG de .75s; benefícios em .6s com 0/90/180 ms. Movimento reduzido remove animações/autoplay mantendo conteúdo e cotação visíveis.

**Ações e contato.** Botões laranja com tinta ou claros com azul, peso 600 e padding padrão 15 × 28 px. Foco laranja de 3 px, afastamento 5 px. No cartão, campos têm altura mínima de 44 px e padding 9 × 12 px; rótulos persistentes, validação textual local e erro explícito. Resultado inline tem `role=status`. Todos os links para contato e CTA de escolha abrem o mesmo formulário e focam o nome, sem rolar a página; os dados preenchidos são preservados. No estado compacto, Continuar expande antes de validar/enviar a demonstração. Toggle de 40 × 40 px atualiza `aria-expanded`; Escape recolhe (todas as larguras) e devolve o foco ao toggle. Ao expandir, cabeçalho do painel é sticky; abaixo de 1100 px há rolagem interna. FAQ permanece `details/summary` nativo. Não há dock com recolhimento por títulos/foco: o formulário persistente substitui esse comportamento V5.

**The Demonstração Clara Rule.** Preservar as 14 opções MG, semana como cobrança, diária como semana/7 arredondada e cauções por modalidade: R$800 no Minha Moto, temporário a confirmar. Óleo: duas trocas mensais no Minha Moto, excluído no temporário. Formulário não envia nem salva, não recebe documentos e não reserva moto; não apresentar contato ou recebimento como efetivos.

## Do's and Don'ts

- **Do** preservar campanha/ativo oficial, seleção única e condições junto do semanal principal; diária fica secundária.
- **Do** manter a cidade independente de hover/foco/navegação dos banners; preservar pausa explícita, visibilidade e movimento reduzido.
- **Do** manter retirada em Contagem, formulário único compacto, valores sincronizados e rolagem interna do cartão expandido.
- **Don't** voltar à coluna lateral fixa de altura total (rejeitada pelo usuário em 20/11/2026).
- **Don't** introduzir degradês, fontes distorcidas, eyebrows, sombras decorativas ou urgência inventada.
- **Don't** usar imagem de campanha como prova de estoque, cliente ou local real; nem “Minas” como promessa de cobertura estadual.
- **Don't** afirmar publicação, aprovação comercial, ganhos, conversão ou entrega no CRM a partir desta prévia.

## Duas modalidades na abertura — 23/11/2026

`.hero-actions` reúne os dois links para `#planos`, com `data-mode-link` específico. Grupo flex com wrap, gap de 12px, largura máxima de660px e margem superior de24px; botões sem margem própria, padding horizontal22px e gap10px. Até600px, coluna com largura máxima360px, gap10px e margem superior18px. Rótulos permanecem fixos ao trocar modalidade, foto ou prazo. A oferta semanal continua seguindo a seleção única; nenhum preço ou condição comercial mudou.
