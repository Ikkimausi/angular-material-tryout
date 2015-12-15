'use strict';

var angular = require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-route');
module.exports = 'ngMaterial';

require('./book');

var libraryApp = angular.module('libraryApp', [require('angular-material'), require('angular-route'), 'libraryApp.bookModule']);

libraryApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/books', {
          templateUrl: 'partials/book-list.html',
          action: 'libraryApp.book.bookListCtrl'
        }).
        when('/books/:isbn', {
          templateUrl: 'partials/book-detail.html',
          action: 'libraryApp.book.bookDetailCtrl'
        }).
        otherwise({
          redirectTo: '/books'
        });
    }]
  )
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
  });
