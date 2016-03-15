'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			tab: '=',
			editable: '='
		},
		templateUrl: '../../../partials/directives/tabContent.html'
	}
};