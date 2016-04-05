'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			owner: '='
		},
		templateUrl: '../../../partials/directives/owners/ownerTile.html',
		controller: ['$scope', 'ownerService', 'eventService', require('./ownerTileController')]
	}
};