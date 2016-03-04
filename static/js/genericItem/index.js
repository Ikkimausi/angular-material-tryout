'use strict';

// Load modules
var angular = require('angular');
var angularRoute = require('angular-route');

// Define module
var genericItemModule = angular.module('libraryApp.genericItemModule', []);

// Load module parts
require('./controller');

// Submodule routing
genericItemModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/generic/kittens', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		}).when('/generic/dogs', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		}).when('/generic/skulls', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		}).when('/generic/bees', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		}).when('/generic/architecture', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		}).when('/generic/food', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		})
	}]
);
