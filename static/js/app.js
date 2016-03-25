'use strict';

let angular = require('angular');
let angularMaterial = require('angular-material');
let angularRoute = require('angular-route');
let ngFileUpload = require('ng-file-upload');
let ngMask = require('ng-mask/dist/ngMask');
module.exports = 'ngMaterial';

// Load modules
require('./directives');
require('./services');
require('./navigation');
require('./cats');
require('./owners');

// Define app
let libraryApp = angular.module('libraryApp', [
	angularMaterial,
	angularRoute,
	ngFileUpload,
	'ngMask',
	'libraryApp.directiveModule',
	'libraryApp.serviceModule',
	'libraryApp.navigationModule',
	'libraryApp.catModule',
	'libraryApp.ownerModule'
]);

// Global routing
libraryApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/cats'
		});
	}]
);

// Material design theming
libraryApp.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('blue');
});