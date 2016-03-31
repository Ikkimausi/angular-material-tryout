'use strict';

module.exports = function ($scope, ownerApiService, eventService) {
	$scope.owners = null;

	let getOwners = function () {
		ownerApiService.getOwners().then(function (owners) {
			$scope.owners = owners;
		});
	};

	eventService.addListener($scope, "owners.refresh", getOwners);

	getOwners();
};