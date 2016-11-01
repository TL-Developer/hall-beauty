'use strict';

var Clients = [
  {
    name: 'Lion'
  }
];


module.exports = function(app){
  var API = app.get('API');

  app.route(API+'/clients')
    .get(function(req, res){
      res.json(Clients);
    });

};
