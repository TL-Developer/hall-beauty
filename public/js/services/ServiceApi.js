angular.module('hall-beauty').factory('ServiceApi', function($resource){

  var urlPath = '/api/v1/users';

  var _getUsers = function(){
    return $resource(urlPath);
  };

  return {

    getUsers: _getUsers

  };

});
