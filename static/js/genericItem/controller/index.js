'use strict';

let angular = require('angular');
let genericItemModule = angular.module('libraryApp.genericItemModule');

genericItemModule.controller('genericItemCtrl', ['$scope', '$location', '$routeParams', 'imageUrlService', require('./grid')]);
