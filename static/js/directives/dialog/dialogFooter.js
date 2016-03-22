'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			showError: '=',
			error: '@'
		},
		templateUrl: '../../../partials/directives/dialog/dialogFooter.html',
		controller: ['$scope', '$mdDialog', require('./dialogController')]
	}
};