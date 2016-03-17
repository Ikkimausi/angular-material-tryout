'use strict';

// Load modules
let angular = require('angular');

// Define module
let navigationModule = angular.module('libraryApp.navigationModule', []);

navigationModule.controller('navigationCtrl', ['$scope', '$location', '$route', '$mdDialog', 'imageUrlService', require('./tabs')]);