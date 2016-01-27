'use strict';

/**
 * @ngdoc overview
 * @name fantasyHqApp
 * @description
 * # fantasyHqApp
 *
 * Main module of the application.
 */
var dsApp = angular.module('dsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mainControllers'
  ]);

dsApp.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'statCtrl',
        controllerAs: 'controller'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'statCtrl',
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
