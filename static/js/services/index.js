'use strict';

let angular = require('angular');

// Define app
let serviceModule = angular.module('libraryApp.serviceModule', []);

serviceModule.service('navigationService', ['$http', require('./navigationService')]);