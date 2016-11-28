angular.module('hallbeauty').controller('WeekController', ['$scope','ServiceApi','$stateParams','$http','$timeout','$state', function($scope, ServiceApi,$stateParams, $http, $timeout, $state){

  $scope.week = [];
  $scope.semanas = ['28/11 - 04/12','05/12 - 11/12','12/12 - 18/12','19/12 - 25/12','26/12 - 01/01'];

  $scope.semana = $scope.semanas[$stateParams.week];

  $scope.user = $stateParams.user;

  $scope.mensagem = {
    texto: ''
  };

  ServiceApi.getWeeks($stateParams.user).query(function(data){
    $scope.week = data[$stateParams.week];
  });


  var dados = {};

  $scope.salvar = function(form){

    dados.nome = form.nome;
    dados.telefones = form.telefones;
    dados.servicos = form.servicos;
    dados.dia = form.dia;
    dados.horario = form.horario;
    dados.user = $stateParams.user;
    dados.week = $stateParams.week;

    console.log($stateParams);

    $http.post('api/v1/users/'+$stateParams.user+'/weeks/'+$stateParams.week, dados).then(function(data){
      $scope.mensagem.texto = 'Cadastrado com sucesso!';
      window.location.href = '/#/'+$stateParams.user+'/weeks';
    }, function(err){
      console.log(err);
      $scope.mensagem.texto = 'Não foi possível cadastrar :(';
    });

  };

}]);
