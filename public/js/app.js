angular.module('hallbeauty', ['ui.router','ngResource']).config(function($stateProvider, $urlRouterProvider, $locationProvider){

  //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })

      .state('weeks', {
        url: '/:user/weeks',
        templateUrl: 'partials/weeks.html',
        controller: 'WeeksControllers'
      })

      .state('weeksNew', {
        url: '/:user/weeks/:week',
        templateUrl: 'partials/weeks_new.html',
        controller: 'WeekController'
      })



      $urlRouterProvider.otherwise('/');

});

