angular.module('hallbeauty').controller('HomeController', ['$scope','ServiceApi','$stateParams','$http', function($scope, ServiceApi, $stateParams, $http){

  $scope.semana = [];
  $scope.semanaSelected = 0;
  $scope.diaSelected;
  $scope.datas = [
    {
      dias: ['12-12','13-12','14-12','15-12','16-12','17-12','18-12']
    },
    {
      dias: ['19-12','20-12','21-12','22-12','23-12','24-12','25-12']
    },
    {
      dias: ['26-12','27-12','28-12','29-12','30-12','31-12','01-01']
    }
  ];


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
