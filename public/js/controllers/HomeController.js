angular.module('hall-beauty').controller('HomeController', ['$scope','ServiceApi', function($scope, ServiceApi){

  $scope.eventos = [];

  ServiceApi.getUsers().query(function(data){
    $scope.eventos = data[0].eventos;
  });



}]);
