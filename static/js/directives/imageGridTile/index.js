'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			imageUrl: '@',
			label: '@'
		},
		templateUrl: '../../../partials/directives/imageGridTile.html'
	}
};