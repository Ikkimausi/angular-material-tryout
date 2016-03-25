'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			label: '@',
			model: '=',
			required: '='
		},
		templateUrl: '../../../partials/directives/input/textAreaWithLabel.html'
	}
};