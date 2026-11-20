# LP Minas — aprovação interna

Prévia V4 da LokMais para Belo Horizonte, Contagem e Santa Luzia. Retirada informada na unidade de Contagem.

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

Montagem reproduz o HTML da prévia V4. JavaScript verificado quanto à sintaxe e interações revisadas na demonstração local; confirmar a página no deployment de Preview antes de compartilhar para aprovação. Não testar envio de leads reais nesta etapa.
