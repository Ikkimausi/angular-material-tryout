'use strict';

let angular = require('angular');
let catModule = angular.module('libraryApp.ownerModule');

catModule.controller('createOwnerCtrl', ['$scope', '$location', require('./registerOwner')]);
catModule.controller('overviewOwnerCtrl', ['$scope', require('./overviewOwner')]);