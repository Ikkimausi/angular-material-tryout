'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			cat: '='
		},
		templateUrl: '../../../partials/directives/cats/catTile.html',
		controller: ['$scope', '$location', 'catService', 'eventService', require('./catTileController')]
	}
};