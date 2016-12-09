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

	$scope.registerNew = function () {
		document.querySelector('md-virtual-repeat-container').classList.add('ng-hide');
		let onRegisterNewFn = $scope.onRegisterNew();
		if (onRegisterNewFn) {
			onRegisterNewFn(function (response) {
				$scope.selectedItemChanged(response);
				getResults();
			})
		}
	};

	let getResults = function () {
		let getResultsFn = $scope.getResults && $scope.getResults();
		if (getResultsFn) {
			getResultsFn().then(function (results) {
				$scope.results = results;
				if ($scope.selected) {
					results.forEach(function (item) {
						if ($scope.selected.itemId === item._id) {
							$scope.selectedItem = item;
							return;
						}
					});
				}
			});
		}
	};

	getResults();
};