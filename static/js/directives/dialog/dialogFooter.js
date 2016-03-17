'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			showError: '=',
			error: '='
		},
		templateUrl: '../../../partials/directives/dialogFooter.html',
		controller: ['$scope', '$mdDialog', require('./dialogController')]
	}
};