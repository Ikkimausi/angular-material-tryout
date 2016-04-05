'use strict';

let angular = require('angular');
let catModule = angular.module('libraryApp.ownerModule');

catModule.controller('registerOwnerCtrl', ['$scope', '$mdDialog', 'ownerService', 'eventService', require('./registerOwner')]);
catModule.controller('overviewOwnerCtrl', ['$scope', 'ownerService', 'eventService', require('./overviewOwner')]);