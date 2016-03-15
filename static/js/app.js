'use strict';

let angular = require('angular');
let angularMaterial = require('angular-material');
let angularRoute = require('angular-route');
module.exports = 'ngMaterial';

// Load modules
require('./directives');
require('./services');
require('./navigation');
require('./book');
require('./genericItem');

// Define app
var libraryApp = angular.module('libraryApp', [
	angularMaterial,
	angularRoute,
	'libraryApp.directiveModule',
	'libraryApp.serviceModule',
	'libraryApp.navigationModule',
	'libraryApp.bookModule',
	'libraryApp.genericItemModule'
]);

// Global routing
libraryApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/books'
		});
	}]
);

// Material design theming
libraryApp.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('blue');
});