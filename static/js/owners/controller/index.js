'use strict';

let angular = require('angular');
let catModule = angular.module('libraryApp.ownerModule');

catModule.controller('registerOwnerCtrl', ['$scope', '$mdDialog', 'ownerApiService', 'eventService', require('./registerOwner')]);
catModule.controller('overviewOwnerCtrl', ['$scope', 'ownerApiService', 'eventService', require('./overviewOwner')]);