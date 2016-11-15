'use strict';

var date = new Date(),
    d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear();

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
    eventos: [
      {
        segunda: [
          {
            nome: 'Tiago Juvenal de Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          },
          {
            nome: 'Nicolas Santos',
            horario: '08:00'
          },
          {
            nome: 'Henrique Kawai',
            horario: '08:30'
          }
        ],
        terca: [
          {
            nome: 'Tiago Juvenal de Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          }
        ],
        quarta: [
          {
            nome: 'Tiago Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          }
        ],
        quinta: [
          {
            nome: 'Tiago Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          }
        ],
        sexta: [
          {
            nome: 'Tiago Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          }
        ],
        sabado: [
          {
            nome: 'Tiago Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          }
        ],
        domingo: [
          {
            nome: 'Tiago Lima',
            horario: '09:00'
          },
          {
            nome: 'Ricardo Lopes',
            horario: '09:30'
          },
          {
            nome: 'Felipe',
            horario: '10:00'
          }
        ]
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
