'use strict';

var angular = require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-route');
module.exports = 'ngMaterial';

// Define modules
require('./bookModule');

// Define app
var libraryApp = angular.module('libraryApp', [
  require('angular-material'),
  require('angular-route'),
  'libraryApp.bookModule'
]);

// Global routing
libraryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      otherwise({
        redirectTo: '/books'
      });
  }]
);

// Material design theming
libraryApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});