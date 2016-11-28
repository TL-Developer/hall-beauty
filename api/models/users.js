var mongoose = require('mongoose');

module.exports = function(){

  var schema = new mongoose.Schema({

    nome: {type: String, required: true},
    estabelecimento: {type: String, required: true},
    semanas: [
      {
        segunda: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        terca: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quarta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quinta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sexta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sabado: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        domingo: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ]
      },
      {
        segunda: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        terca: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quarta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quinta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sexta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sabado: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        domingo: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ]
      },
      {
        segunda: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        terca: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quarta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quinta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sexta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sabado: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        domingo: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ]
      },
      {
        segunda: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        terca: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quarta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quinta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sexta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sabado: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        domingo: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ]
      },
      {
        segunda: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        terca: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quarta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        quinta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sexta: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        sabado: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ],
        domingo: [
          {
            nome: {type: String},
            horario: {type: String},
            telefones: {type: String},
            servicos: {type: String}
          }
        ]
      }
    ],
    servicos: {type: String},
    created: {
      type: Date,
      default: Date.now
    }
  });

  return mongoose.model('Users', schema);
};
