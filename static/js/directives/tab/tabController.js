'use strict';

module.exports = function ($scope, $location) {
	$scope.navigate = function (urlPart) {
		$scope.selectedIndex = $scope.tabIndex;
		$location.path(urlPart);
	};

	$scope.isTabActive = function (urlPart) {
		let path = $location.path();
		let isActive = path.indexOf(urlPart) > -1;

		if (isActive && $scope.selectedIndex != $scope.tabIndex) {
			$scope.selectedIndex = $scope.tabIndex;
		}

		return isActive;
	};
};