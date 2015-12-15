'use strict';

var angular = require('angular');
var bookModule = angular.module('libraryApp.bookModule');

bookModule.controller('bookListCtrl', require('./bookListController'));
bookModule.controller('bookDetailCtrl', require('./bookDetailController'));
