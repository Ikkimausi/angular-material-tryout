'use strict';

var angular = require('angular');

// Define app
var serviceModule = angular.module('libraryApp.serviceModule', []);

serviceModule.service('imageUrlService', ['$http', require('./imageUrlService')]);