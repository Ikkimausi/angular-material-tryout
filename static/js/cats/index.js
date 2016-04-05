'use strict';

// Load modules
let angular = require('angular');

// Define module
let catModule = angular.module('libraryApp.catModule', ['ngAnimate']);

// Load module parts
require('./controller');

// Submodule routing
catModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/cats/', {
			templateUrl: 'partials/cats/overviewCat.html',
			action: 'overviewCatCtrl'
		}).when('/cats/:catId', {
			templateUrl: 'partials/cats/detailCat.html',
			action: 'detailCatCtrl'
		});
	}]
);
