'use strict';

var http = require('http')
  , app  = require('./config/app')();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening in port ' + app.get('port'))
});
