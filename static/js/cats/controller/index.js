'use strict';

let angular = require('angular');
let catModule = angular.module('libraryApp.catModule');

catModule.controller('createCatCtrl', ['$scope', '$location', require('./createCat')]);
catModule.controller('overviewCatCtrl', ['$scope', require('./overviewCat')]);
