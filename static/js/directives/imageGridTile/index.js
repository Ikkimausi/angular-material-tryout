'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			picture: '@',
			label: '@'
		},
		templateUrl: '../../../partials/directives/imageGridTile.html'
	}
};