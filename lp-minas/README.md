# LP Minas — aprovação interna

Prévia V5 da LokMais para Belo Horizonte, Contagem e Santa Luzia. Retirada informada na unidade de Contagem.

## Revisar

Use `/lp-minas` no deployment de **Preview** desta branch na Vercel. O domínio de produção e suas páginas não são substituídos. Não promover ou mergear esta branch antes da aprovação comercial e visual.

O formulário é demonstrativo: valida campos e mostra a escolha, mas não envia nem salva dados. Não há integração de CRM, reserva efetiva, anúncio ou tags nesta LP. A página contém `noindex,nofollow` e cabeçalho `X-Robots-Tag` próprio; isso impede indexação solicitada, não equivale a controle de acesso.

## Editar e montar

Edite `src/index.html`, `src/styles.css`, `src/app.js` e `src/plans.js` e execute na raiz do repositório:

```sh
python3 lp-minas/build.py
```

O `index.html` gerado incorpora fontes, imagens e scripts e deve acompanhar o commit das fontes. Os arquivos do cache de fontes General Sans permitem montar sem baixar dependências. A primeira montagem sem cache consulta a distribuição oficial Fontshare.

As 14 opções de Minas ficam em `src/plans.js`. Diária é um equivalente do preço semanal dividido por sete; cobrança, mínimos e cauções continuam explícitos. Imagens de campanha são ilustrativas, incluindo adaptações por IA, sem comprovação de estoque ou localização.

## Validação da entrega

V5: processo em areia, escolha visual por modelo e cotação destacada. H1 alterna Belo Horizonte, Contagem e Minas com animação vertical independente dos banners, mantendo pausa e movimento reduzido. Santa Luzia permanece no conteúdo regional fixo.

JavaScript e montagem verificados; 14 preços conferidos na interface e escolha preservada no formulário demonstrativo. Conferir o deployment de Preview após cada atualização. Não testar envio de leads reais nesta etapa.

## Ajustes V6

Minha Moto é a seleção inicial. Cidades continuam alternando em todos os banners mesmo com foco ou mouse nos controles. Formulário único acompanha a página: coluna fixa no computador e painel com WhatsApp/expansão no celular; preserva dados e sincroniza o plano escolhido. Continua demonstrativo, sem envio ou armazenamento. A revisão e os artefatos internos permanecem na central Metry, fora do repositório público.

## Ajustes V7

A coluna lateral fixa da V6 foi substituída por um formulário menor que acompanha a página: no computador, cartão compacto no canto inferior direito (WhatsApp + Continuar, que expande os demais campos); no celular, barra inferior com o preço e "Quero alugar". Aparece já no primeiro scroll (só fica escondido no topo da página). No computador, sobre o comparador de planos, encolhe para uma barra com o título, que abre o formulário ao clique. Continua demonstrativo, sem envio ou armazenamento.

## Ajustes V8

Feedback do cliente: a escolha entre Aluguel temporário e Minha Moto ficava escondida e a primeira visão do comparador mostrava preços demais. O comparador virou três passos numerados: 1) como você quer sua moto (cartões Minha Moto e Aluguel temporário com a diferença explicada, sem preço), 2) modelo (cartões sem preço), 3) prazo (lista com o preço semanal). O resumo destaca um único valor, o semanal; a diária aparece como "equivale a cerca de". Caução e primeira semana viraram uma linha "Para começar". A barra/cartão de contato também mostra o semanal primeiro.

## Ajustes V9

O preço semanal é o valor principal também na abertura. Os banners alternam fotos e mensagens; a oferta permanece no plano escolhido. Modelo/prazo e seleção no formulário sincronizam abertura, comparador e contato. Minha Moto explicita aquisição conforme contrato. Os 14 preços de MG e o formulário demonstrativo permanecem preservados.

## Botões da abertura — 23/11/2026

Dois caminhos fixos: Conhecer o Minha Moto e Conhecer o aluguel temporário. Cada um abre a modalidade correspondente no comparador, preserva a última escolha dessa modalidade e mantém preços sincronizados. Botões empilham no celular.

## Captação no CRM Atriva

O formulário deixou de ser demonstrativo: carrega o snippet público do Atriva (`api.atriva.com.br/api/public/leads/snippet/atv_a2efdb7edc4e4c8559e15e90.js`, o mesmo das páginas do site) e, depois de validar nome, WhatsApp e cidade, chama `window.atriva.submit` com `nome`, `fone` (mapeados no Atriva) e `cidade`, `plano`, `valor_semanal`, `origem` (vão para as Observações). O envio automático do snippet é interceptado para este formulário, para que "Continuar" ou um telefone inválido não gerem lead parcial. A CSP libera somente `api.atriva.com.br` (script e conexão). Se o envio falhar, a página mostra o WhatsApp da unidade com mensagem pronta.

## Google Analytics 4 e Google Ads

A LP tem propriedade GA4 própria, separada do site: conta "[b] LOK MAIS MOTOS" › propriedade "LP Minas - belohorizonte.lokmais.com" › fluxo "LP Belo Horizonte" (ID de medição `G-CY0NR01GN9`). Instalada por gtag.js no `<head>` (logo após a CSP), sem GTM, junto com a tag do Google Ads da LokMais (`AW-17617352212`, a mesma do site). Após envio validado ao Atriva, dispara `generate_lead` (currency BRL, value = valor semanal, plan_id, plan_name, plan_mode, lead_city; sem nome/telefone) e só então abre o WhatsApp (callback com limite de 1,5 s). A CSP libera apenas domínios do Google Analytics/Ads (googletagmanager, google-analytics, analytics.google, doubleclick, google.com/.com.br, googleadservices).
