angular.module('hall-beauty', ['ui.router','ngResource']).config(function($stateProvider, $urlRouterProvider, $locationProvider){

  //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })

      $urlRouterProvider.otherwise('/');

});

