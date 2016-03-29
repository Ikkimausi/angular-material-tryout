'use strict';

let angular = require('angular');
let catModule = angular.module('libraryApp.catModule');

catModule.controller('registerCatCtrl', ['$scope', '$location', 'catService', require('./registerCat')]);
catModule.controller('overviewCatCtrl', ['$scope', 'catService', require('./overviewCat')]);
