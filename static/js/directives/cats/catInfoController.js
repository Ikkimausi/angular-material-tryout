'use strict';

module.exports = function ($scope, ownerService) {
	$scope.today = new Date();

	$scope.owners = null;
	ownerService.getOwners().then(function (owners) {
		$scope.owners = owners;
	});
};