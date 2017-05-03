var ananth=angular.module('ananth',['location','history','ngRoute']).config(function ($routeProvider, $locationProvider, $httpProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/location.html',
      controller: 'locationController'
    })
    .when('/history', {
      templateUrl: 'app/views/history.html',
      controller: 'historyController'
    })
})
