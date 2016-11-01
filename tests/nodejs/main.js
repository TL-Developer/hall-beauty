'use strict';

describe('App Routes', function(){

  it('GET /api deve retornar uma lista de clientes', function(done) {

    request.get(API+'/clients').end(function(err, res){
      expect(res.body[0].name).to.be.eql(CLIENTS[0].name);
      done();
    });

  });

});
