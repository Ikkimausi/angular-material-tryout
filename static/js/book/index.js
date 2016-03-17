'use strict';

// Load modules
let angular = require('angular');

// Define module
let bookModule = angular.module('libraryApp.bookModule', []);

// Load module parts
require('./controller');

// Submodule routing
bookModule.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/books', {
			templateUrl: 'partials/book/list.html',
			action: 'listCtrl'
		}).when('/books/:isbn', {
			templateUrl: 'partials/book/detail.html',
			action: 'detailCtrl'
		});
	}]
);
