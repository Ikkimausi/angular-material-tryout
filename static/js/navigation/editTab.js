'use strict';

module.exports = function ($scope, $filter, $mdDialog, imageUrlService, selectedTab) {
	$scope.title = "Editing an existing tab";
	$scope.tab = selectedTab;
	$scope.error = "";
	$scope.showError = false;

	$scope.tabEditable = function tabEditable(tab) {
		return tab != null && tab != undefined && tab.editable;
	};

	$scope.deleteTab = function (tab) {
		imageUrlService.deleteImageUrl(tab).then(function (response) {
			$mdDialog.hide(tab);
		}, function (response) {
			setError($scope, response.data);
		});
	};

	$scope.saveTab = function (tab) {
		if (tab.maxCount == null || tab.maxCount == 0) {
			delete tab.maxCount;
		}

		if (tab.url == selectedTab.url && tab.maxCount == selectedTab.maxCount) {
			$mdDialog.hide(tab);
		}
		else {
			imageUrlService.updateImageUrl(tab).then(function (response) {
				$mdDialog.hide(tab);
			}, function (response) {
				setError($scope, response.data);
			});
		}
	};

	imageUrlService.getImageUrls().then(function (response) {
		$scope.tabs = $filter('filter')(response, $scope.tabEditable);
	});
};

function setError($scope, error) {
	$scope.error = error;
	$scope.showError = true;
}