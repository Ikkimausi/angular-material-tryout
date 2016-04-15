'use strict';

module.exports = function ($scope, $mdDialog, navigationService) {
	$scope.selectedIndex = 0;
	$scope.tabs = navigationService.getTabs();

	$scope.registerNew = function () {
		let tab = $scope.tabs[$scope.selectedIndex];
		$mdDialog.show({
			controller: tab.controller,
			templateUrl: tab.templateUrl
		}).then(function (response) {
			$scope.$broadcast(tab.path + '.refresh');
		});
	};
};