'use strict';

describe('App', function(){

  describe('Routes', function(){
    it('GET /users deve retornar uma lista de usuarios', function(done) {
      request.get(API+'/users').end(function(err, res){
        expect(res.body[0]).to.be.keys(KEYS_USERS);
        done();
      });
    });

    it('GET /users/:id deve retornar um usuario', function(done) {
      request.get(API+'/users/0').end(function(err, res){
        expect(res.body).to.be.keys(KEYS_USERS);
        done();
      });
    });

    it('GET /users/:id/hours deve retornar uma lista de horarios', function(done) {
      request.get(API+'/users/0/hours').end(function(err, res){
        expect(res.body).to.be.keys(KEYS_USERS_ID_HOURS);
        done();
      });
    });

    // it('POST /users deve salvar um usuario', function(done) {
    //   request.post(API+'/users/0').send(USERS[0]).expect(200).end(function(err, res){
    //     expect(res.body).to.be.keys(KEYS_USERS);
    //     done();
    //   });
    // });
  });
});
