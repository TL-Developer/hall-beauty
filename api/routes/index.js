'use strict';


// var user = [
//   {
//     nome: 'Laion',
//     estabelecimento: 'Lion Cabeleleiros',
//     semanas: [
//       {
//         segunda: [],
//         terca: [],
//         quarta: [],
//         quinta: [],
//         sexta: [],
//         sabado: [],
//         domingo: []
//       }
//     ]
//   }
// ];


module.exports = function(app){
  var API = app.get('API')
    , Users = app.models.users;

  // CADASTRANDO ÚNICO USUARIO
  // (function cadastrando_user(){
  //   Users.findOne({nome: 'Laion'}).exec().then(function(data){

  //     if(data == null){

  //       // CRIANDO ÚNICO USUARIO
  //       Users.create(user[0]).then(function(data){
  //         console.log(data);
  //       }, function(err){
  //         console.log(err);
  //       });

  //     }
  //   });
  // })();


  app.route(API+'/users')
    .get(function(req, res){
      Users.find({}).exec().then(function(usuarios){
        res.status(200).json(usuarios);
      });
    });

  app.route(API+'/users/:id')
    .get(function(req, res){

      var _nome = req.params.id;

      Users.findOne({"nome": _nome}).exec().then(function(usuario){
        res.status(200).json(usuario);
      });
    });

  app.route(API+'/users/:id/weeks')
    .get(function(req, res){

      var _nome = req.params.id;

      Users.findOne({"nome": _nome}).exec().then(function(usuario){
        res.status(200).json(usuario.semanas);
      });

    });

  app.route(API+'/users/:user/weeks/:id')
    .get(function(req, res){


      var _nome = req.params.user;

      Users.findById({"nome": _nome}).exec().then(function(usuario){
        res.status(200).json(usuario.semanas);
      });

    })

    .post(function(req, res){

      var agendado = {
        dia: req.body.dia,
        nome: req.body.nome,
        telefones: req.body.telefones,
        servicos: req.body.servicos,
        horario: req.body.horario
      }

      var _user = req.body.user
        , _week = req.body.week;


      var usuario = Users.findOne({"nome": _user});

      usuario.exec().then(function(usuario){
        usuario.semanas[_week][agendado.dia].push({
          "nome": agendado.nome,
          "servicos": agendado.servicos,
          "horario": agendado.horario,
          "telefones": agendado.telefones
        });

        usuario.save();
      });

      res.status(201);
    })

    .delete(function(req, res){
      console.log(req.body);
    });


  app.route(API+'/users/:user/weeks/:semana/:dia/:id')
    .delete(function(req, res){

      var user = req.params.user
        , semana = req.params.semana
        , dia = req.params.dia
        , _id = req.params.id;

      var usuario = Users.findOne({"nome": user});

      usuario.exec().then(function(usuario){
        //console.log(usuario.semanas[semana][dia])
        usuario.semanas[semana][dia].forEach(function(element, index){
          if(element._id == _id){
            usuario.semanas[semana][dia].splice(index,1);
          }
        });

        usuario.save();
      });
    });

};
