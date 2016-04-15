'use strict';

module.exports = function ($scope, ownerService) {
	$scope.today = new Date();
	$scope.owners = null;

	$scope.searchHandler = function (searchText) {
		let lowercaseQuery = angular.lowercase(searchText);
		return function filterFn(owner) {
			return owner && owner.display && owner.display.toLowerCase().indexOf(lowercaseQuery) > -1;
		};
	};

	$scope.getResultsHandler = ownerService.getOwners;
};