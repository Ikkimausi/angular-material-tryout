'use strict';

module.exports = function ($scope) {
	$scope.findMatches = function (searchText) {
		return searchText ? $scope.results.filter($scope.onSearch()(searchText)) : $scope.results;
	};

	$scope.selectedItemChanged = function (itemId) {
		$scope.selected = itemId || "";
	};

	$scope.clearSelectedItem = function () {
		$scope.selected = $scope.searchText = "";
	};

	let getResults = $scope.getResults();

	if (getResults) {
		getResults().then(function (results) {
			$scope.results = results;
			results.forEach(function (item) {
				if ($scope.selected == item._id) {
					$scope.selectedItem = item;
					return;
				}
			});
		});
	}
};