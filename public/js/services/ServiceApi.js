angular.module('hallbeauty').factory('ServiceApi', function($resource){

  var urlPath = '/api/v1/users';

  var _getUsers = function(){
    return $resource(urlPath);
  };

  var _getWeeks = function(user){
    return $resource(urlPath+'/'+user+'/weeks');
  };

  var _getWeek = function(user, week){
    return $resource(urlPath+'/'+user+'/weeks/'+week);
  };

  return {

    getUsers: _getUsers,
    getWeeks: _getWeeks,
    getWeek: _getWeek

  };

});
