'use strict';

let original;

module.exports = function ($scope, $routeParams, catService) {
	$scope.cat = null;

	let returnToOverview = function () {
		window.history.back();
	};

	catService.getCat($routeParams.catId).then(function (cat) {
		$scope.cat = cat;
		original = angular.copy(cat);
	});

	$scope.cancelCat = returnToOverview;

	$scope.removeCat = function () {
		catService.deleteCat($scope.cat).then(returnToOverview);
	};

	$scope.saveCat = function () {
		let changes;
		for (let property in original) {
			if (!angular.equals(original[property], $scope.cat[property])) {
				changes = changes || {};
				changes[property] = $scope.cat[property];
			}
		}

		if (changes) {
			catService.updateCat(original._id, changes).then(returnToOverview);
		} else {
			returnToOverview();
		}
	};
};