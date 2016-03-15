'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			image: '='
		},
		templateUrl: '../../../partials/directives/imageGridTile.html'
	}
};