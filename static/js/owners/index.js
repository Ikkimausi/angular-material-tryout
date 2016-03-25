'use strict';

// Load modules
let angular = require('angular');

// Define module
let catModule = angular.module('libraryApp.ownerModule', []);

// Load module parts
require('./controller');

// Submodule routing
catModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/owners/', {
			templateUrl: '../../partials/owners/overviewOwner.html',
			action: 'overviewOwnerCtrl'
		}).when('/owners/create', {
			templateUrl: '../../partials/owners/registerOwner.html',
			action: 'createOwnerCtrl'
		});
	}]
);
