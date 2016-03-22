'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			title: '@'
		},
		templateUrl: '../../../partials/directives/dialog/dialogHeader.html',
		controller: ['$scope', '$mdDialog', require('./dialogController')]
	}
};