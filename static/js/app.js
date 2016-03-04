'use strict';

var angular = require('angular');
var angularMaterial = require('angular-material');
var angularRoute = require('angular-route');
module.exports = 'ngMaterial';

// Load modules
require('./navigation');
require('./book');
require('./genericItem');

// Define app
var libraryApp = angular.module('libraryApp', [
	angularMaterial,
	angularRoute,
	'libraryApp.bookModule',
	'libraryApp.genericItemModule',
	'libraryApp.navigationModule'
]);

libraryApp.directive('ngLoad', ['$parse', require('./directive/ngLoad')]);

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
		.primaryPalette('blue')
		.accentPalette('orange');
});