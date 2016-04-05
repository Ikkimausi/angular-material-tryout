'use strict';

module.exports = function ($scope, ownerApiService) {
	$scope.today = new Date();

	$scope.owners = null;
	ownerApiService.getOwners().then(function (owners) {
		$scope.owners = owners;
	});
};