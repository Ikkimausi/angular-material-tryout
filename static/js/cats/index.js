'use strict';

// Load modules
let angular = require('angular');

// Define module
let catModule = angular.module('libraryApp.catModule', []);

// Load module parts
require('./controller');

// Submodule routing
catModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/cats/', {
			templateUrl: 'partials/cats/overview.html',
			action: 'overviewCatCtrl'
		}).when('/cats/create', {
			templateUrl: 'partials/cats/createCat.html',
			action: 'createCatCtrl'
		});
	}]
);
