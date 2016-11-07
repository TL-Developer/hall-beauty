'use strict';

var Users = [
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


module.exports = function(app){
  var API = app.get('API');

  app.route(API+'/users')
    .get(function(req, res){
      res.json(Users);
    });

  app.route(API+'/users/:id')
    .get(function(req, res){
      res.json(Users[0]);
    });

  app.route(API+'/users/:id/hours')
    .get(function(req, res){
      res.json(Users[0].horarios[0]);
    });

};
