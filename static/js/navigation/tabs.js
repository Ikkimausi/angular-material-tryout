'use strict';

module.exports = function ($scope, $mdDialog, navigationService) {
	$scope.selectedIndex = 0;
	$scope.tabs = navigationService.getTabs();

	$scope.registerNew = function () {
		let tab = $scope.tabs[$scope.selectedIndex];
		navigationService.registerNew(tab, function () {
			$scope.$broadcast(tab.path + '.refresh');
		});
	};
};