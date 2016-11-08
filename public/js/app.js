angular.module('hall-beauty', ['ui.router','ui.materialize']).config(function($stateProvider, $urlRouterProvider, $locationProvider){

  //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })

      $urlRouterProvider.otherwise('/');

});
