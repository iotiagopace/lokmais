window.CMS_CONFIG = {
  brandName: "LokMais Admin",
  shortName: "LK",
  logoUrl: "assets/logo-lockup-white.png",

  // ─── SUPABASE ────────────────────────────────────────────────
  // Preencha após criar o projeto no Supabase
  supabaseUrl:     "https://SEU-PROJETO.supabase.co",
  supabaseAnonKey: "SUA_PUBLISHABLE_KEY",
  imageBucket:     "lokmais-assets",

  settingsTableName: "site_settings",
  leadsTableName:    "leads",
  publicStatus:      "published",
  draftStatus:       "draft",

  // ─── IMAGENS EDITÁVEIS DO SITE ────────────────────────────────
  // Chave = atributo data-cms-img nas tags <img> do frontend
  homeImages: [
    { key: "hero_lp_franqueado", label: "Hero — LP Franqueado (foto da moto lado direito)", defaultSrc: "assets/motos/fan-2026-mov-1.jpg" },
    { key: "honda_split",        label: "Seção Honda — LP Franqueado (imagem da frota)",    defaultSrc: "assets/motos/linha-cg-2026.jpg"  },
    { key: "sobre_hero",         label: "Sobre — Imagem principal",                         defaultSrc: ""                                },
    { key: "og_cover",           label: "OG Cover (compartilhamento social)",                defaultSrc: "assets/og-cover.jpg"             },
  ],

  // ─── SEÇÕES DO PAINEL ─────────────────────────────────────────
  sections: [

    // ── CONTEÚDO ─────────────────────────────────────────────────

    {
      id:    "motos",
      label: "Frota / Motos",
      group: "conteudo",
      icon:  "box",
      table: "motos",
      categories: ["Start 160", "Fan 160", "CG 160"],
      fields: [
        { id: "modelo",         label: "Modelo",              type: "text",     card: true,  placeholder: "Ex: Honda Start 160" },
        { id: "tag",            label: "Tag / Ano",           type: "text",     card: true,  placeholder: "Ex: 0km · 2026"      },
        { id: "preco_semanal",  label: "Preço semanal",       type: "text",     card: true,  placeholder: "Ex: 265"             },
        { id: "disponivel",     label: "Disponibilidade",     type: "select",   card: true,  options: ["Disponível","Sob consulta","Em manutenção"] },
        { id: "specs",          label: "Specs (separadas por ·)", type: "text", placeholder: "Ex: 160cc · 13cv · Flex · Freio CBS" },
        { id: "planos",         label: "Planos disponíveis",  type: "text",     placeholder: "Ex: Flex, Mensal, Longo Prazo"   },
        { id: "destaque",       label: "Destaque no catálogo",type: "select",   options: ["Não","Sim"]                         },
        { id: "observacao",     label: "Observação interna",  type: "textarea"                                                  },
      ]
    },

    {
      id:    "planos",
      label: "Planos e Preços",
      group: "conteudo",
      icon:  "file",
      table: "planos",
      categories: ["Aluguel", "Longo Prazo"],
      fields: [
        { id: "nome",            label: "Nome do plano",         type: "text",     card: true,  placeholder: "Ex: Flex"              },
        { id: "subtitulo",       label: "Subtítulo",             type: "text",     card: true,  placeholder: "Ex: Sem fidelidade"    },
        { id: "preco_semanal",   label: "Preço semanal (a partir de)", type: "text", card: true, placeholder: "Ex: 265"             },
        { id: "duracao",         label: "Duração / Período",     type: "text",                  placeholder: "Ex: 4 a 8 semanas"     },
        { id: "destaque",        label: "Plano em destaque",     type: "select",                options: ["Não","Sim"]              },
        { id: "features",        label: "Diferenciais (1 por linha)", type: "textarea",          placeholder: "Manutenção inclusa\nSem SPC/Serasa\nRastreamento incluso" },
        { id: "observacao",      label: "Observação / rodapé",   type: "textarea"                                                    },
      ]
    },

    {
      id:    "unidades",
      label: "Unidades",
      group: "conteudo",
      icon:  "map",
      table: "units",
      categories: ["Aberta", "Em breve"],
      fields: [
        { id: "numero",      label: "Número da unidade",           type: "text",  card: true,  placeholder: "Ex: 01"                                    },
        { id: "cidade",      label: "Cidade / Estado",             type: "text",  card: true,  placeholder: "Ex: Salvador · BA"                         },
        { id: "endereco",    label: "Endereço completo",           type: "text",  card: true,  placeholder: "Rua Exemplo, 123 — Bairro"                 },
        { id: "telefone",    label: "Telefone",                    type: "text",               placeholder: "(00) 00000-0000"                            },
        { id: "whatsapp",    label: "WhatsApp (com DDI)",          type: "text",               placeholder: "5531972285918"                             },
        { id: "horario",     label: "Horário de funcionamento",    type: "text",               placeholder: "Seg–Sex 8h–18h · Sáb 8h–12h"              },
        { id: "maps_url",    label: "Link Google Maps (embed)",    type: "text",               placeholder: "https://www.google.com/maps/embed?..."      },
        { id: "maps_link",   label: "Link Google Maps (externo)",  type: "text",               placeholder: "https://maps.google.com/..."               },
        { id: "responsavel", label: "Responsável",                 type: "text",               placeholder: "Nome do gestor da unidade"                 },
      ]
    },

    {
      id:    "simulador",
      label: "Simulador — Dados",
      group: "conteudo",
      icon:  "default",
      table: "simulador_motos",
      categories: ["Start 160", "Fan 160"],
      fields: [
        { id: "nome",          label: "Nome completo",           type: "text",   card: true,  placeholder: "Ex: Honda Start 160 Seminova"   },
        { id: "tag",           label: "Tag",                     type: "text",   card: true,  placeholder: "Ex: Seminova 2024"              },
        { id: "preco_semanal", label: "Preço semanal (R$)",      type: "text",   card: true,  placeholder: "Ex: 265"                        },
        { id: "planos_ids",    label: "Aparece nos planos",      type: "text",               placeholder: "flex,mensal,longo (separados por vírgula)" },
        { id: "specs",         label: "Specs",                   type: "text",               placeholder: "160cc · 13cv · Flex"            },
        { id: "ativo",         label: "Ativo no simulador",      type: "select",             options: ["Sim","Não"]                         },
      ]
    },

    // ── RELACIONAMENTO ────────────────────────────────────────────

    {
      id:    "depoimentos",
      label: "Depoimentos",
      group: "relacionamento",
      icon:  "star",
      table: "testimonials",
      categories: ["Locatário", "Franqueado"],
      fields: [
        { id: "autor",         label: "Nome do autor",           type: "text",     card: true,  placeholder: "Ex: João Silva"               },
        { id: "cidade_uf",     label: "Cidade / UF",             type: "text",     card: true,  placeholder: "Ex: Belo Horizonte · MG"      },
        { id: "avaliacao",     label: "Avaliação",               type: "select",   card: true,  options: ["5","4","3","2","1"]              },
        { id: "texto",         label: "Depoimento",              type: "textarea"                                                            },
        { id: "tipo",          label: "Tipo",                    type: "select",                options: ["Locatário","Franqueado"]         },
        { id: "fonte",         label: "Origem",                  type: "select",                options: ["Google","WhatsApp","Site","Indicação"] },
      ]
    },

    {
      id:    "faq",
      label: "FAQ — Perguntas",
      group: "relacionamento",
      icon:  "help",
      table: "faq",
      categories: ["Contrato", "Motos", "Pagamento", "Manutenção", "Uso", "Franquia"],
      fields: [
        { id: "categoria", label: "Categoria",  type: "select",   card: true, options: ["Contrato","Motos","Pagamento","Manutenção","Uso","Franquia"] },
        { id: "pergunta",  label: "Pergunta",   type: "text",     card: true, placeholder: "Ex: Quais documentos eu preciso?"  },
        { id: "resposta",  label: "Resposta",   type: "textarea",             placeholder: "Resposta completa da pergunta..."  },
        { id: "ordem",     label: "Ordem de exibição", type: "text",          placeholder: "Ex: 1"                            },
      ]
    },

    {
      id:    "franqueados_depoimentos",
      label: "Depoimentos — Franqueados",
      group: "relacionamento",
      icon:  "users",
      table: "franchisee_testimonials",
      categories: ["Ativo", "Destaque"],
      fields: [
        { id: "nome",       label: "Nome",                    type: "text",     card: true,  placeholder: "Ex: Carlos Mendes"                    },
        { id: "cidade_uf",  label: "Cidade / UF",             type: "text",     card: true,  placeholder: "Ex: Fortaleza · CE"                   },
        { id: "texto",      label: "Depoimento",              type: "textarea",                                                                   },
        { id: "resultado",  label: "Resultado alcançado",     type: "text",                  placeholder: "Ex: Expandiu para 10 motos em 6 meses" },
        { id: "motos",      label: "Qtd motos na unidade",    type: "text",     card: true,  placeholder: "Ex: 10"                               },
      ]
    },

  ]
};
