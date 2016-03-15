'use strict';

module.exports = function ($scope, $location, $route, $mdDialog, imageUrlService) {
	$scope.selectedIndex = 0;

	imageUrlService.getImageUrls().then(function (response) {
		setTabs($scope, response);
	});

	$scope.openNewTabDialog = function () {
		$mdDialog.show({
			controller: require('./newTab'),
			templateUrl: 'partials/navigation/newTab.html',
			clickOutsideToClose: true
		}).then(function (response) {
			imageUrlService.getImageUrls().then(function (tabs) {
				setTabs($scope, tabs);
				$scope.selectedIndex = tabs.length - 1;
				$location.path(response.data.path);
			});
		});
	};

	$scope.openEditTabDialog = function () {
		let selectedIndex = $scope.selectedIndex;
		if (!$scope.tabs[selectedIndex].editable) {
			selectedIndex = selectedIndex == 0 ? selectedIndex + 1 : selectedIndex - 1;
		}
		$mdDialog.show({
			locals: {selectedTab: $scope.tabs[selectedIndex]},
			controller: require('./editTab'),
			templateUrl: '../../partials/navigation/editTab.html'
		}).then(function (response) {
			imageUrlService.getImageUrls().then(function (tabs) {
				setTabs($scope, tabs);
				if ($location.path() == response.path) {
					$route.reload();
				}
			});
		});
	};
};

function setTabs($scope, tabs) {
	$scope.tabs = tabs;
	$scope.editableTabsAvailable = false;
	tabs.forEach(function (tab) {
		if (tab.editable) {
			$scope.editableTabsAvailable = true;
		}
	});
}