'use strict';

let original;

module.exports = function ($scope, $routeParams, catService) {
	$scope.cat = null;

	catService.getCat($routeParams.catId).then(function (cat) {
		$scope.cat = cat;
		original = angular.copy(cat);
	});

	$scope.cancelCat = function () {
		window.history.back();
	};

	$scope.removeCat = function () {
		catService.deleteCat($scope.cat).then(function success() {
			window.history.back();
		});
	};

	$scope.saveCat = function () {
		let changes = {};
		let hasChanges = false;
		for (let property in original) {
			if (original[property] != $scope.cat[property]) {
				changes[property] = $scope.cat[property];
				hasChanges = true;
			}
		}

		if (hasChanges) {
			catService.updateCat(original._id, changes).then(function success() {
				window.history.back();
			});
		} else {
			window.history.back();
		}
	};
};