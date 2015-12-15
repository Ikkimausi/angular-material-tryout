'use strict';

var angular = require('angular');
var bookModule = angular.module('libraryApp.bookModule');

bookModule.controller('listCtrl', require('./list'));
bookModule.controller('detailCtrl', require('./detail'));
