angular.module('hallbeauty').controller('HomeController', ['$scope','ServiceApi','$stateParams','$http', function($scope, ServiceApi, $stateParams, $http){

  $scope.semana = [];
  $scope.semanaSelected = 0;
  $scope.diaSelected;


  $scope.selectSemana = function(semana){
    ServiceApi.getWeeks('Laion').query(function(semanas){
      $scope.semana = semanas[semana];
    });
  };

  $scope.selectDia = function(dia){
    if(dia == 'todos') {
      $scope.diaSelected = '';
    }
  };

}]);
