angular.module('hallbeauty').controller('WeeksControllers', ['$scope','ServiceApi','$stateParams','$http', function($scope, ServiceApi, $stateParams, $http){

  $scope.semana = [];
  $scope.user = $stateParams.user;
  $scope.semanaSelected = 0;
  $scope.diaSelected;


  $scope.selectSemana = function(semana){
    ServiceApi.getWeeks($scope.user).query(function(semanas){
      $scope.semana = semanas[semana];
    });
  };

  $scope.selectDia = function(dia){
    if(dia == 'todos') {
      $scope.diaSelected = '';
    }
  };

  $scope.remove = function(id, dia, semana){

    var excluir = confirm('Tem certeza que deseja excluir?');

    if(excluir){
      $scope.semana[dia].forEach(function(element, index){
        if(element._id == id){
          $scope.semana[dia].splice(index, 1);
        }
      });
      $http.delete('api/v1/users/'+$stateParams.user+'/weeks/'+semana+'/'+dia+'/'+id).then(function(data){
        console.log(data);
      });
    }
  };

}]);