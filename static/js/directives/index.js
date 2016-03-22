'use strict';

let angular = require('angular');

// Define app
let directiveModule = angular.module('libraryApp.directiveModule', []);

directiveModule.directive('myLoad', ['$parse', require('./load')]);
directiveModule.directive('myImageGridTile', [require('./imageGridTile')]);
directiveModule.directive('myTab', [require('./tab')]);
directiveModule.directive('myDialogHeader', [require('./dialog/dialogHeader')]);
directiveModule.directive('myDialogFooter', [require('./dialog/dialogFooter')]);
directiveModule.directive('myMenuButton', [require('./menuButton')]);