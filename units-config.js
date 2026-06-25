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
 */
window.LOKMAIS_UNITS = [
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
  },
];
