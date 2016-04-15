'use strict';

module.exports = function ($scope, ownerService) {
	let getOwners = function () {
		ownerService.getOwners().then(function (owners) {
			owners.forEach(function (owner) {
				if ($scope.cat && $scope.cat.eigenaar == owner._id) {
					$scope.eigenaar = owner;
					return;
				}
			});

			$scope.owners = owners;
		});
	};

	$scope.today = new Date();
	$scope.owners = null;

	$scope.findMatches = function (searchText) {
		return searchText ? $scope.owners.filter(createFilter(searchText)) : $scope.owners;
	};

	$scope.selectedItemChanged = function (eigenaarId) {
		$scope.cat.eigenaar = eigenaarId || "";
	};

	$scope.clearSelectedItem = function () {
		$scope.cat.eigenaar = $scope.searchText = "";
	};

	getOwners();
};

function createFilter(searchText) {
	let lowercaseQuery = angular.lowercase(searchText);
	return function filterFn(owner) {
		return owner && owner.display && owner.display.toLowerCase().indexOf(lowercaseQuery) > -1;
	};
}