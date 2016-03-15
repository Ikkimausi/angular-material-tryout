'use strict';

// Load modules
var angular = require('angular');

// Define module
var navigationModule = angular.module('libraryApp.navigationModule', []);

navigationModule.controller('navigationCtrl', ['$scope', '$location', '$route', '$mdDialog', 'imageUrlService', require('./tabs')]);