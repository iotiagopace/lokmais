const baseUrl = (process.env.CMS_BASE_URL || "https://lokmais.vercel.app/api/cms").replace(/\/$/, "");
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error("Defina ADMIN_EMAIL e ADMIN_PASSWORD para popular o CMS.");
  process.exit(1);
}

const motos = [
  {
    id: "moto-start-160-semi-nova",
    title: "Honda Start 160 Semi Nova",
    modelo: "Honda Start 160 Semi Nova",
    category: "Seminova",
    tag: "Seminova",
    preco_semanal: "399,90",
    disponivel: "A opcao mais economica para comecar a rodar.",
    specs: "160cc · Flex · Manutencao inclusa · Revisada · Economica",
    planos: "Minha Moto · 30m · 36m",
    filtro: "start semi",
    destaque: "Sim",
    cover: "assets/motos/start-2025-mov-1.jpg",
    display_order: 10,
  },
  {
    id: "moto-start-160-2024",
    title: "Honda Start 160 · 2024",
    modelo: "Honda Start 160 · 2024",
    category: "Start 160",
    tag: "2024",
    preco_semanal: "255,00",
    disponivel: "Confiavel e economica para o dia a dia.",
    specs: "160cc · Manutencao inclusa · CG Start · Baixo consumo",
    planos: "Mensal · Trimestral · Semestral · Minha Moto 30m",
    filtro: "start",
    destaque: "Nao",
    cover: "assets/motos/start-2025-estatica-1.jpg",
    display_order: 20,
  },
  {
    id: "moto-start-160-2025",
    title: "Honda Start 160 · 2025",
    modelo: "Honda Start 160 · 2025",
    category: "Start 160",
    tag: "2025",
    preco_semanal: "305,00",
    disponivel: "Versao mais recente com upgrades de serie.",
    specs: "160cc · Freio a disco · Roda de liga · Economica",
    planos: "Mensal · Trimestral · Semestral",
    filtro: "start",
    destaque: "Nao",
    cover: "assets/motos/start-2025-estatica-2.jpg",
    display_order: 30,
  },
  {
    id: "moto-start-160-0km",
    title: "Honda Start 160 · 0 km",
    modelo: "Honda Start 160 · 0 km",
    category: "0 km",
    tag: "0 km",
    preco_semanal: "419,90",
    disponivel: "Sair com a moto nova e rumo a propriedade dela.",
    specs: "160cc · 0 km · Freio a disco · Roda de liga · Valorizacao",
    planos: "Minha Moto · 30m · 36m",
    filtro: "start 0km",
    destaque: "Nao",
    cover: "assets/motos/start-2026-estatica-1.jpg",
    display_order: 40,
  },
  {
    id: "moto-fan-160-2025",
    title: "Honda Fan 160 · 2025",
    modelo: "Honda Fan 160 · 2025",
    category: "Fan 160",
    tag: "2025",
    preco_semanal: "315,00",
    disponivel: "A queridinha do mercado, agora com upgrades.",
    specs: "160cc · Freio a disco · Roda de liga · Top valorizacao",
    planos: "Mensal · Trimestral · Semestral",
    filtro: "fan",
    destaque: "Nao",
    cover: "assets/motos/fan-2025-estatica-1.jpg",
    display_order: 50,
  },
  {
    id: "moto-fan-2026-0km",
    title: "Honda Fan · 2026 · 0 km",
    modelo: "Honda Fan · 2026 · 0 km",
    category: "0 km",
    tag: "2026",
    preco_semanal: "419,90",
    disponivel: "A moto mais cobicada do mercado, zero km.",
    specs: "160cc · 0 km · Freio a disco · Roda de liga · Top valorizacao",
    planos: "Consulte disponibilidade",
    filtro: "fan 0km",
    destaque: "Sim",
    cover: "assets/motos/fan-2026-estatica-2.jpg",
    display_order: 60,
  },
];

const planos = [
  {
    id: "plano-mensal",
    title: "Mensal",
    nome: "Mensal",
    category: "Mensal",
    subtitulo: "Aluguel temporario · minimo de 30 dias.",
    preco_semanal: "280",
    duracao: "30 dias",
    tabela_precos: "Start 160 · 2023/2024 | R$ 280,00\nStart 160 · 2025 · roda de liga e freio a disco | R$ 330,00\nFan 160 · 2025 | R$ 350,00",
    features: "Manutencao inclusa\nCaucao conforme o modelo\nSem consulta a SPC/Serasa",
    destaque: "Nao",
    display_order: 10,
  },
  {
    id: "plano-trimestral",
    title: "Trimestral",
    nome: "Trimestral",
    category: "Trimestral",
    subtitulo: "Aluguel temporario · minimo de 90 dias.",
    preco_semanal: "265",
    duracao: "3 meses",
    tabela_precos: "Start 160 · 2023/2024 | R$ 265,00\nStart 160 · 2025 · roda de liga e freio a disco | R$ 315,00\nFan 160 · 2025 | R$ 330,00",
    features: "Manutencao inclusa\nCaucao conforme o modelo\nSem consulta a SPC/Serasa",
    destaque: "Nao",
    display_order: 20,
  },
  {
    id: "plano-semestral",
    title: "Semestral",
    nome: "Semestral",
    category: "Semestral",
    subtitulo: "Aluguel temporario · minimo de 180 dias.",
    preco_semanal: "255",
    duracao: "180 dias",
    tabela_precos: "Start 160 · 2023/2024 | R$ 255,00\nStart 160 · 2025 · roda de liga e freio a disco | R$ 305,00\nFan 160 · 2025 | R$ 315,00",
    features: "Manutencao inclusa\nCaucao conforme o modelo\nSem consulta a SPC/Serasa",
    destaque: "Nao",
    display_order: 30,
  },
  {
    id: "plano-minha-moto",
    title: "Plano Minha Moto",
    nome: "Minha Moto",
    category: "Plano Minha Moto",
    subtitulo: "Plano fidelidade de 30 ou 36 meses.",
    preco_semanal: "379,90",
    duracao: "30 ou 36 meses",
    tabela_precos: "30m · Start 2024 | R$ 379,90\n30m · Start 2025 seminova | R$ 419,90\n30m · Start 0 km 2026 | R$ 449,90\n36m · Start 2025 seminova | R$ 399,90\n36m · Start 0 km 2026 | R$ 419,90",
    features: "Manutencao preventiva e 2 trocas de oleo ao mes\nIPVA e documentacao inclusos\nProtecao veicular inclusa\nCaucao R$ 800",
    destaque: "Sim",
    ribbon: "Plano fidelidade",
    display_order: 40,
  },
];

const unidades = [
  ["01", "Salvador / BA", "Av. Tancredo Neves, 0000 · Caminho das Arvores · Salvador / BA · 41820-020", "(71) 0000-0000", "LokMais Salvador"],
  ["02", "Feira de Santana / BA", "Av. Getulio Vargas, 0000 · Centro · Feira de Santana / BA · 44000-000", "(75) 0000-0000", "LokMais Feira de Santana"],
  ["03", "Aracaju / SE", "Av. Beira Mar, 0000 · Atalaia · Aracaju / SE · 49000-000", "(79) 0000-0000", "LokMais Aracaju"],
  ["04", "Maceio / AL", "Av. Fernandes Lima, 0000 · Farol · Maceio / AL · 57000-000", "(82) 0000-0000", "LokMais Maceio"],
].map(([numero, cidade, endereco, telefone, title], index) => {
  const query = encodeURIComponent(title);
  return {
    id: `unidade-${numero}`,
    title,
    numero,
    cidade,
    category: "Aberta",
    endereco,
    telefone,
    whatsapp: "5531972285918",
    horario: "Seg-Sab · 08h-18h",
    maps_url: `https://www.google.com/maps?q=${query}&output=embed`,
    maps_link: `https://www.google.com/maps/search/?api=1&query=${query}`,
    display_order: (index + 1) * 10,
  };
});

const simulador = [
  ["tri-start24", "Honda Start 160", "2024", "265.00", "trimestral", "trimestral", "160cc · Confiavel"],
  ["tri-fan25", "Honda Fan 160", "2025", "315.00", "trimestral", "trimestral", "Freio a disco · Roda liga"],
  ["tri-start25", "Honda Start 160", "2025", "335.00", "trimestral", "trimestral", "160cc · Economica"],
  ["m30-semi", "Honda Start 160 Semi Nova", "Seminova", "419.90", "m30", "m30,m36", "Revisada · Menor valor"],
  ["m30-fan", "Honda Fan 2026", "0 km", "449.90", "m30", "m30", "Zero km · Freio a disco"],
  ["m30-start", "Honda Start 160", "0 km", "465.90", "m30", "m30", "Zero km · Roda liga"],
  ["m36-semi", "Honda Start 160 Semi Nova", "Seminova", "399.90", "m36", "m30,m36", "Revisada · Menor valor"],
  ["m36-fan", "Honda Fan 2026", "0 km", "419.90", "m36", "m36", "Zero km · Freio a disco"],
  ["m36-start", "Honda Start 160", "0 km", "444.90", "m36", "m36", "Zero km · Roda liga"],
].map(([id, nome, tag, preco_semanal, plano_id, planos_ids, specs], index) => ({
  id: `simulador-${id}`,
  title: `${nome} · ${tag} · ${plano_id}`,
  nome,
  tag,
  preco_semanal,
  plano_id,
  planos_ids,
  specs,
  ativo: "Sim",
  category: plano_id === "trimestral" ? "Trimestral" : plano_id === "m30" ? "30 meses" : "36 meses",
  display_order: (index + 1) * 10,
}));

const faq = [
  ["Contrato", "Quais documentos eu preciso?", "CNH categoria A valida, RG, CPF e comprovante de residencia recente. Sem consulta a SPC/Serasa."],
  ["Contrato", "Preciso ter nome limpo?", "Nao. A LokMais nao faz consulta a SPC ou Serasa para fechar o contrato."],
  ["Contrato", "Posso fechar contrato em outro estado?", "O contrato e vinculado a unidade onde a moto sera retirada. Veja as nossas unidades no site."],
  ["Contrato", "No fim do plano a moto fica minha?", "Nos planos de 30 e 36 meses voce caminha no sentido de levar a moto pra casa. Fale com o time para entender as condicoes."],
  ["Motos", "Quais modelos voces trabalham?", "Trabalhamos exclusivamente com Honda: Start 160, Fan 160 e Fan 2026 0 km."],
  ["Motos", "Posso escolher a moto?", "Sim, conforme disponibilidade da unidade. Fale com o atendimento para conferir quais motos estao disponiveis em cada plano."],
  ["Motos", "Por que so Honda?", "Honda lidera o mercado em durabilidade, baixo custo de manutencao e valorizacao."],
  ["Pagamento", "Como funciona a caucao?", "A caucao e de R$ 750 para a Start 2024 e R$ 800 para a Start 2025 e o Plano Minha Moto, conforme as condicoes do contrato."],
  ["Pagamento", "Os valores semanais variam?", "Nao. O valor e fixo durante todo o contrato, conforme a tabela vigente no dia da assinatura."],
  ["Pagamento", "Quais as formas de pagamento?", "Aceitamos boleto, PIX e cartao. Fale com a unidade para detalhes regionais."],
  ["Manutencao", "A manutencao esta inclusa?", "Sim. A manutencao preventiva e feita pela oficina LokMais, sem custo extra para voce."],
  ["Manutencao", "E se a moto der defeito?", "Acione o suporte LokMais. Trazemos a moto para a oficina e priorizamos para voce ficar parado o menor tempo possivel."],
  ["Manutencao", "Posso fazer revisao em qualquer oficina?", "A manutencao do plano e feita na oficina LokMais. Em emergencia, fale com o suporte antes de levar a outro lugar."],
  ["Uso", "Posso usar para trabalhar em aplicativos?", "Com certeza. Nossas motos sao perfeitas para entregadores e motoristas de aplicativo."],
  ["Uso", "Tem limite de quilometragem?", "Nao ha limite de KM imposto pela LokMais. Voce usa a moto livremente, respeitando o uso responsavel."],
  ["Uso", "Posso viajar com a moto?", "Sim, dentro do territorio nacional. Avise a unidade para deslocamentos longos por seguranca."],
  ["Franquia", "Preciso ter experiencia com motos ou locacao?", "Nao. O modelo foi desenhado para ser operado com suporte completo da LokMais, da implantacao a gestao do dia a dia."],
  ["Franquia", "Qual o valor do investimento?", "O investimento e montado sob medida conforme o tamanho da unidade e o seu perfil. Fale com um especialista para receber uma simulacao completa."],
  ["Franquia", "Em quanto tempo recupero o investimento?", "O prazo medio de retorno e de 18 a 24 meses, variando conforme praca, modelo e performance da unidade."],
  ["Franquia", "A LokMais ajuda a captar clientes?", "Sim. A captacao e estruturada com marketing validado e geracao continua de leads qualificados para a sua unidade."],
  ["Franquia", "Posso abrir em qualquer cidade?", "Avaliamos a disponibilidade e o potencial de cada praca. Informe sua cidade no formulario e nosso time retorna com a analise."],
].map(([categoria, pergunta, resposta], index) => ({
  id: `faq-${index + 1}`,
  title: pergunta,
  pergunta,
  resposta,
  categoria,
  category: categoria,
  ordem: String(index + 1),
  display_order: (index + 1) * 10,
}));

const franqueados = [
  {
    id: "franqueado-depoimento-1",
    title: "Franqueado LokMais 1",
    nome: "Franqueado · placeholder",
    cidade_uf: "Unidade · Cidade/UF",
    texto: "Em poucos meses minha frota ja estava rodando no positivo. O suporte na operacao fez toda a diferenca.",
    resultado: "Frota rodando no positivo",
    motos: "3+ motos",
    category: "Destaque",
    display_order: 10,
  },
  {
    id: "franqueado-depoimento-2",
    title: "Franqueado LokMais 2",
    nome: "Franqueado · placeholder",
    cidade_uf: "Unidade · Cidade/UF",
    texto: "O modelo e simples de operar e a demanda por motos e real. Reinvesti o lucro e ja ampliei a frota.",
    resultado: "Ampliacao de frota",
    motos: "5+ motos",
    category: "Ativo",
    display_order: 20,
  },
  {
    id: "franqueado-depoimento-3",
    title: "Franqueado LokMais 3",
    nome: "Franqueado · placeholder",
    cidade_uf: "Unidade · Cidade/UF",
    texto: "Tecnologia, oficina propria e marca forte. Entrei num mercado em alta com seguranca e previsibilidade.",
    resultado: "Entrada com previsibilidade",
    motos: "10+ motos",
    category: "Ativo",
    display_order: 30,
  },
];

const depoimentos = [
  {
    id: "depoimento-locatario-1",
    title: "Cliente LokMais",
    autor: "Cliente LokMais",
    cidade_uf: "Brasil",
    avaliacao: "5",
    texto: "Moto revisada, manutencao inclusa e atendimento rapido para continuar trabalhando.",
    tipo: "Locatario",
    fonte: "Site",
    category: "Locatario",
    display_order: 10,
  },
  {
    id: "depoimento-franqueado-1",
    title: "Franqueado LokMais",
    autor: "Franqueado LokMais",
    cidade_uf: "Brasil",
    avaliacao: "5",
    texto: "Modelo claro, suporte proximo e alta demanda por locacao de motos.",
    tipo: "Franqueado",
    fonte: "Site",
    category: "Franqueado",
    display_order: 20,
  },
];

const sections = {
  motos,
  planos,
  unidades,
  simulador,
  faq,
  franqueados_depoimentos: franqueados,
  depoimentos,
};

const homeImages = {
  hero_lp_franqueado: "assets/motos/fan-2026-mov-1.jpg",
  honda_split: "assets/motos/linha-cg-2026.jpg",
  sobre_hero: "",
  og_cover: "assets/og-cover.jpg",
};

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.token ? { authorization: `Bearer ${options.token}` } : {}),
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(`${options.method || "GET"} ${path} falhou (${response.status}): ${text}`);
  }
  return data;
}

const login = await request("/auth/login", {
  method: "POST",
  body: { email, password },
});

const token = login.access_token;
const summary = {};

for (const [section, items] of Object.entries(sections)) {
  summary[section] = 0;
  for (const item of items) {
    await request(`/sections/${section}/${item.id}`, {
      method: "PUT",
      token,
      body: { ...item, status: "published" },
    });
    summary[section] += 1;
  }
}

await request("/settings/home_images", {
  method: "PUT",
  token,
  body: { value: homeImages },
});

console.log(JSON.stringify({ ok: true, baseUrl, summary, settings: ["home_images"] }, null, 2));
