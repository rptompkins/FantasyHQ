'use strict';

/**
 * @ngdoc function
 * @name fantasyHqApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fantasyHqApp
 */
var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('statCtrl', ['$scope', '$http', function ($scope, $http) {
	console.log('hi');
    $http.get('dicksteakstats.json').success(function(data) {
    	$scope.stats = data;
    	console.log(data);
    	
    });
    	$scope.managers = 'Manager';
  }]);
