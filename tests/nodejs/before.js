'use strict';

global.API = '/api/v1';

global.KEYS_USERS = [
  'nome',
  'estabelecimento',
  'endereco',
  'horarios',
  'servicos',
  'produtos',
  'tipo'
];

global.KEYS_USERS_ID_HOURS = [
  'dia',
  'horario',
  'agendado'
];

global.USERS = [
  {
    nome: 'Lion man',
    estabelecimento: 'Lion Cabeleleiros',
    endereco: {
      logradouro: 'Rua borboleta amarela',
      numero: '57',
      cep: '08081-570',
      bairro: 'São Martinho',
      localidade: 'São Paulo',
      uf: "SP"
    },
    horarios: [
      {
        dia: 'segunda-feira',
        horario: '9:00',
        agendado: {
          nome: 'tiago',
          telefone: ['11-2222-2222','11-1111-1111'],
          celular: ['11-92222-2222','11-91111-1111']
        }
      }
    ],
    servicos: [
      {
        nome: 'Relaxamento',
        valor: 'R$ 5,00',
        tempo: '1h'
      }
    ],
    produtos: [
      {
        nome: 'Gel fixador',
        valor: 'R$ 5,00'
      }
    ],
    tipo: 'usuario'
  }
];
