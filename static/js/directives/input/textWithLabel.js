'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			label: '@',
			model: '=',
			required: '=',
			type: '@'
		},
		templateUrl: '../../../partials/directives/input/textWithLabel.html'
	}
};