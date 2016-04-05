'use strict';

module.exports = function ($scope, ownerService, eventService) {
	$scope.removeOwner = function () {
		ownerService.deleteOwner($scope.owner).then(function success() {
			eventService.dispatchEvent('owners.refresh');
		});
	};
};