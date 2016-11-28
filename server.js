'use strict';

var http = require('http')
  , app  = require('./config/app')();

// if(process.env.NODE_ENV == 'production'){
//   require('./config/database.js')('mongodb://tiago:admin@ds113668.mlab.com:13668/hallbeauty');
// }else{
//   require('./config/database.js')('mongodb://localhost/hallbeauty');
// }

require('./config/database.js')('mongodb://tiago:admin@ds113668.mlab.com:13668/hallbeauty');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening in port ' + app.get('port'));
});
