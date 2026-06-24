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
    slug:     'contagem',
    nome:     'Contagem',
    uf:       'MG',
    whatsapp: '5531972285918',
    endereco: 'Av. Juscelino Kubitscheck, 855 · Contagem / MG · CEP 32223-400',
    horario:  'Seg a Sáb · 08h às 18h',
    lat:      -19.9321,
    lng:      -44.0534,
    gtm:      '',
    pixel:    '',
  },
];
