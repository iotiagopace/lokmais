/**
 * CONFIGURAÇÃO DE UNIDADES — fonte única de verdade
 *
 * Para adicionar uma nova unidade:
 * 1. Inclua um objeto neste array
 * 2. Adicione o rewrite correspondente em vercel.json (1 linha)
 *
 * Campos:
 *   slug      — parte da URL: /contagem → "contagem"
 *   nome      — nome da cidade (ex: "Contagem")
 *   uf        — sigla do estado (ex: "MG")
 *   whatsapp  — número completo com DDI+DDD, sem símbolos (ex: "5531972285918")
 *   endereco  — endereço completo para exibição e Google Maps
 *   horario   — horário de funcionamento
 *   lat/lng   — coordenadas para o mapa
 *   gtm       — ID do GTM (ex: "GTM-XXXXXXX") ou "" para não usar
 *   pixel     — ID do Meta Pixel (ex: "1234567890") ou "" para não usar
 *   precos    — tabela de valores semanais da unidade (ver PRECOS_* abaixo).
 *               temporario: planos Mensal/Trimestral/Semestral (omita se a unidade não oferece)
 *               minhaMoto:  opções do plano fidelidade { moto, prazo (meses), preco }
 *               caucao:     texto da caução exibido no FAQ da página
 */

// Minas Gerais (Contagem e Grande BH) · tabela de novembro/2026
var PRECOS_MG = {
  temporario: [
    { nome: 'Mensal',     desc: 'Mínimo de 30 dias para quem precisa de flexibilidade.',
      itens: [['Start 160 · 2023/2024', '280'], ['Start 2025 · roda de liga e freio a disco', '330'], ['Fan 2025', '350']] },
    { nome: 'Trimestral', desc: 'Mínimo de 90 dias e valor semanal mais econômico.',
      itens: [['Start 160 · 2023/2024', '265'], ['Start 2025 · roda de liga e freio a disco', '315'], ['Fan 2025', '330']] },
    { nome: 'Semestral',  desc: 'Mínimo de 180 dias com o menor valor semanal do aluguel temporário.',
      itens: [['Start 160 · 2023/2024', '255'], ['Start 2025 · roda de liga e freio a disco', '305'], ['Fan 2025', '315']] },
  ],
  minhaMoto: [
    { moto: 'Start 2026 seminova', prazo: 36, preco: '389,90' },
    { moto: 'Start 2026 seminova', prazo: 30, preco: '399,90' },
    { moto: 'Start 2026 seminova', prazo: 24, preco: '429,90' },
    { moto: 'Start 2026 0 km',     prazo: 33, preco: '419,90' },
    { moto: 'Start 2026 0 km',     prazo: 27, preco: '449,90' },
  ],
  caucao: 'A caução é de R$ 750 para a Start 2024 e R$ 800 para a Start 2025 e o Plano Minha Moto, conforme as condições do contrato.',
};

// São Paulo · promoção de inauguração (novembro/2026)
var PRECOS_SP = {
  minhaMoto: [
    { moto: 'Start 160 2026', prazo: 36, preco: '429,90' },
    { moto: 'Start 160 2026', prazo: 30, preco: '459,90' },
  ],
  caucao: 'Na promoção de inauguração, a caução do Plano Minha Moto sai de R$ 1.000 por R$ 800. Para retirar a moto, você paga a primeira semana + a caução.',
};

// Manaus · novembro/2026
var PRECOS_MANAUS = {
  minhaMoto: [
    { moto: 'Start 160 2026', prazo: 36, preco: '419,90' },
    { moto: 'Start 160 2026', prazo: 30, preco: '449,90' },
  ],
  caucao: 'O valor da caução do Plano Minha Moto é informado pelo atendimento da unidade no WhatsApp, conforme as condições do contrato.',
};

window.LOKMAIS_UNITS = [
  {
    slug:     'contagem',
    nome:     'Contagem',
    uf:       'MG',
    whatsapp: '5531972285918',
    endereco: 'Av. Juscelino Kubitschek, 855 · Contagem / MG · CEP 32223-400',
    horario:  'Seg a Sáb · 08h às 18h',
    lat:      -19.9321,
    lng:      -44.0534,
    gtm:      '',
    pixel:    '',
    precos:   PRECOS_MG,
  },
  {
    slug:     'manaus',
    nome:     'Manaus',
    uf:       'AM',
    whatsapp: '5592988031388',
    endereco: 'Rua Rio das Bicas, 175 · Manaus / AM · CEP 69057-200',
    horario:  'Seg a Sáb · 08h às 18h',
    lat:      -3.1190,
    lng:      -60.0217,
    gtm:      '',
    pixel:    '',
    planos:   'minha-moto', // 'todos' | 'minha-moto'
    frota:    '2026',       // 'todas' | '2026'
    precos:   PRECOS_MANAUS,
  },
  {
    slug:     'sao-paulo',
    nome:     'São Paulo',
    uf:       'SP',
    whatsapp: '5511936228651',
    endereco: 'Av. Rudge, 936 · Bom Retiro · São Paulo / SP · CEP 01134-000',
    horario:  'Seg a Sáb · 08h às 18h',
    lat:      -23.5201,
    lng:      -46.6521,
    gtm:      '',
    pixel:    '',
    planos:   'minha-moto', // SP opera só o Plano Minha Moto
    frota:    '2026',       // mesma regra de Manaus: só motos 0 km do Minha Moto
    precos:   PRECOS_SP,
  },
];
