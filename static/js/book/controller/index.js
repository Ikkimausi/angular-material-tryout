'use strict';

let angular = require('angular');
let bookModule = angular.module('libraryApp.bookModule');

bookModule.controller('listCtrl', require('./list'));
bookModule.controller('detailCtrl', require('./detail'));
