'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			icon: '@',
			label: '@'
		},
		templateUrl: '../../../partials/directives/menuButton.html'
	}
};