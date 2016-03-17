'use strict';

// Load modules
let angular = require('angular');

// Define module
let genericItemModule = angular.module('libraryApp.genericItemModule', []);

// Load module parts
require('./controller');

// Submodule routing
genericItemModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/generic/:imageLabel', {
			templateUrl: 'partials/genericItem/grid.html',
			action: 'genericItemCtrl'
		})
	}]
);
