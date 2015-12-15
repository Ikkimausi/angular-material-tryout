'use strict';

var angular = require('angular');
require('angular-route');

var bookModule = angular.module('libraryApp.bookModule', []);

// Load submodules
require('./controller');

// Submodule routing
bookModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'partials/book/list.html',
        action: 'listCtrl'
      }).
      when('/books/:isbn', {
        templateUrl: 'partials/book/detail.html',
        action: 'detailCtrl'
      });
  }]
);
