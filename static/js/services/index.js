'use strict';

let angular = require('angular');

// Define app
let serviceModule = angular.module('libraryApp.serviceModule', []);

serviceModule.service('imageUrlService', ['$http', require('./imageUrlService')]);