'use strict';

var express        = require('express')
  , consign        = require('consign')
  , bodyParser     = require('body-parser')
  , methodOverride = require('method-override');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3000);

  app.set('API', '/api/v1');

  app.set('json spaces', 4);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({"extended": true}));
  app.use(express.static('./public'));
  app.use(methodOverride());

  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
  });

  consign({cwd: 'api', logger: console})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
