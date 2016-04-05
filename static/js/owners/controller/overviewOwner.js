'use strict';

module.exports = function ($scope, ownerService, eventService) {
	$scope.owners = null;

	let getOwners = function () {
		ownerService.getOwners().then(function (owners) {
			$scope.owners = owners;
		});
	};

	eventService.addListener($scope, "owners.refresh", getOwners);

	getOwners();
};