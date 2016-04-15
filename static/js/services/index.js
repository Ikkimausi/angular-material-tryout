'use strict';

let angular = require('angular');

// Define app
let serviceModule = angular.module('libraryApp.serviceModule', []);

serviceModule.service('eventService', ['$rootScope', require('./eventService')]);
serviceModule.service('navigationService', ['$mdDialog', require('./navigationService')]);
serviceModule.service('catService', ['$http', 'Upload', require('./catService')]);
serviceModule.service('ownerService', ['$http', 'Upload', require('./ownerService')]);
