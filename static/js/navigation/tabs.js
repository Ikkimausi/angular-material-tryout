'use strict';

module.exports = function ($scope, $location, $route, navigationService) {
	$scope.selectedIndex = 0;
	$scope.tabs = navigationService.getTabs();

	$scope.registerNew = function () {
		$location.path($scope.tabs[$scope.selectedIndex].label + '/register');
	};
};