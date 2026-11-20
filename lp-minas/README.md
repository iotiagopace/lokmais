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

A coluna lateral fixa da V6 foi substituída por um formulário menor que acompanha a página: no computador, cartão compacto no canto inferior direito (WhatsApp + Continuar, que expande os demais campos); no celular, barra inferior com o preço e "Quero alugar". Fica fora de cena durante a abertura e, no computador, enquanto o comparador de planos está no centro da tela. Continua demonstrativo, sem envio ou armazenamento.
