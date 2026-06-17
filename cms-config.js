window.CMS_CONFIG = {
  brandName: "LokMais Admin",
  shortName: "LK",
  logoUrl: "assets/logo-lockup-white.png",
  apiBaseUrl: "/api/cms",
  demoMode: false,

  settingsTableName: "site_settings",
  leadsTableName: "leads",
  publicStatus: "published",
  draftStatus: "draft",
  defaultCover: "assets/og-cover.jpg",

  homeImages: [
    { key: "hero_lp_franqueado", label: "Hero - LP Franqueado", defaultSrc: "assets/motos/fan-2026-mov-1.jpg" },
    { key: "honda_split", label: "Secao Honda - LP Franqueado", defaultSrc: "assets/motos/linha-cg-2026.jpg" },
    { key: "sobre_hero", label: "Sobre - Imagem principal", defaultSrc: "" },
    { key: "og_cover", label: "OG Cover", defaultSrc: "assets/og-cover.jpg" }
  ],

  sections: [
    {
      id: "motos",
      label: "Frota / Motos",
      group: "conteudo",
      icon: "box",
      table: "motos",
      categories: ["Start 160", "Fan 160", "CG 160", "0 km", "Seminova"],
      fields: [
        { id: "modelo", label: "Modelo", type: "text", card: true, placeholder: "Ex: Honda Start 160" },
        { id: "tag", label: "Tag / Ano", type: "text", card: true, placeholder: "Ex: 0 km - 2026" },
        { id: "preco_semanal", label: "Preco semanal", type: "text", card: true, placeholder: "Ex: 265" },
        { id: "disponivel", label: "Disponibilidade", type: "select", card: true, options: ["Disponivel", "Sob consulta", "Em manutencao"] },
        { id: "specs", label: "Specs (separadas por ·)", type: "text", placeholder: "Ex: 160cc · Flex · Freio CBS" },
        { id: "planos", label: "Planos disponiveis", type: "text", placeholder: "Ex: Trimestral, 30m, 36m" },
        { id: "filtro", label: "Filtros da pagina (classes)", type: "text", placeholder: "Ex: start semi" },
        { id: "destaque", label: "Destaque no catalogo", type: "select", options: ["Nao", "Sim"] },
        { id: "observacao", label: "Observacao interna", type: "textarea" }
      ]
    },
    {
      id: "planos",
      label: "Planos e Precos",
      group: "conteudo",
      icon: "file",
      table: "planos",
      categories: ["Mensal", "Trimestral", "Semestral", "Plano Minha Moto"],
      fields: [
        { id: "nome", label: "Nome do plano", type: "text", card: true, placeholder: "Ex: Trimestral" },
        { id: "subtitulo", label: "Subtitulo", type: "text", card: true, placeholder: "Ex: 3 meses de aluguel" },
        { id: "preco_semanal", label: "Preco semanal (a partir de)", type: "text", card: true, placeholder: "Ex: 265" },
        { id: "duracao", label: "Duracao / Periodo", type: "text", placeholder: "Ex: 3 meses" },
        { id: "tabela_precos", label: "Tabela de precos (1 por linha: Modelo | Valor)", type: "textarea" },
        { id: "features", label: "Diferenciais (1 por linha)", type: "textarea" },
        { id: "destaque", label: "Plano em destaque", type: "select", options: ["Nao", "Sim"] },
        { id: "ribbon", label: "Selo do destaque", type: "text", placeholder: "Ex: Mais escolhido" },
        { id: "observacao", label: "Observacao / rodape", type: "textarea" }
      ]
    },
    {
      id: "unidades",
      label: "Unidades",
      group: "conteudo",
      icon: "map",
      table: "units",
      categories: ["Aberta", "Em breve"],
      fields: [
        { id: "numero", label: "Numero da unidade", type: "text", card: true, placeholder: "Ex: 01" },
        { id: "cidade", label: "Cidade / Estado", type: "text", card: true, placeholder: "Ex: Salvador / BA" },
        { id: "endereco", label: "Endereco completo", type: "text", card: true },
        { id: "telefone", label: "Telefone", type: "text" },
        { id: "whatsapp", label: "WhatsApp (com DDI)", type: "text", placeholder: "5531972285918" },
        { id: "horario", label: "Horario de funcionamento", type: "text", placeholder: "Seg-Sab 08h-18h" },
        { id: "maps_url", label: "Link Google Maps (embed)", type: "text" },
        { id: "maps_link", label: "Link Google Maps (externo)", type: "text" },
        { id: "responsavel", label: "Responsavel", type: "text" }
      ]
    },
    {
      id: "simulador",
      label: "Simulador - Dados",
      group: "conteudo",
      icon: "default",
      table: "simulador_motos",
      categories: ["Trimestral", "30 meses", "36 meses"],
      fields: [
        { id: "nome", label: "Nome completo", type: "text", card: true },
        { id: "tag", label: "Tag", type: "text", card: true },
        { id: "preco_semanal", label: "Preco semanal (R$)", type: "text", card: true },
        { id: "plano_id", label: "Plano do simulador", type: "select", options: ["trimestral", "m30", "m36"] },
        { id: "planos_ids", label: "Aparece nos planos", type: "text", placeholder: "trimestral,m30,m36" },
        { id: "specs", label: "Specs", type: "text" },
        { id: "ativo", label: "Ativo no simulador", type: "select", options: ["Sim", "Nao"] }
      ]
    },
    {
      id: "depoimentos",
      label: "Depoimentos",
      group: "relacionamento",
      icon: "star",
      table: "testimonials",
      categories: ["Locatario", "Franqueado"],
      fields: [
        { id: "autor", label: "Nome do autor", type: "text", card: true },
        { id: "cidade_uf", label: "Cidade / UF", type: "text", card: true },
        { id: "avaliacao", label: "Avaliacao", type: "select", card: true, options: ["5", "4", "3", "2", "1"] },
        { id: "texto", label: "Depoimento", type: "textarea" },
        { id: "tipo", label: "Tipo", type: "select", options: ["Locatario", "Franqueado"] },
        { id: "fonte", label: "Origem", type: "select", options: ["Google", "WhatsApp", "Site", "Indicacao"] }
      ]
    },
    {
      id: "faq",
      label: "FAQ - Perguntas",
      group: "relacionamento",
      icon: "help",
      table: "faq",
      categories: ["Contrato", "Motos", "Pagamento", "Manutencao", "Uso", "Franquia"],
      fields: [
        { id: "categoria", label: "Categoria", type: "select", card: true, options: ["Contrato", "Motos", "Pagamento", "Manutencao", "Uso", "Franquia"] },
        { id: "pergunta", label: "Pergunta", type: "text", card: true },
        { id: "resposta", label: "Resposta", type: "textarea" },
        { id: "ordem", label: "Ordem de exibicao", type: "text", placeholder: "Ex: 1" }
      ]
    },
    {
      id: "franqueados_depoimentos",
      label: "Depoimentos - Franqueados",
      group: "relacionamento",
      icon: "users",
      table: "franchisee_testimonials",
      categories: ["Ativo", "Destaque"],
      fields: [
        { id: "nome", label: "Nome", type: "text", card: true },
        { id: "cidade_uf", label: "Cidade / UF", type: "text", card: true },
        { id: "texto", label: "Depoimento", type: "textarea" },
        { id: "resultado", label: "Resultado alcancado", type: "text" },
        { id: "motos", label: "Qtd motos na unidade", type: "text", card: true }
      ]
    }
  ]
};
