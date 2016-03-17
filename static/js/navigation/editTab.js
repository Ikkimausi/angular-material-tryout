'use strict';

module.exports = function ($scope, $filter, $mdDialog, imageUrlService, selectedTab) {
	$scope.title = "Editing an existing tab";
	$scope.tab = selectedTab;
	$scope.error = "";
	$scope.showError = false;

	$scope.tabEditable = tabEditable;

	$scope.deleteTab = function (tab) {
		imageUrlService.deleteImageUrl(tab).then(successHandler, errorHandler);
	};

	$scope.saveTab = function (tab) {
		if (tab.maxCount == null || tab.maxCount == 0) {
			delete tab.maxCount;
		}

		if (tab.url == selectedTab.url && tab.maxCount == selectedTab.maxCount) {
			successHandler()
		} else {
			imageUrlService.updateImageUrl(tab).then(successHandler, errorHandler);
		}
	};

	imageUrlService.getImageUrls().then(function (response) {
		$scope.tabs = $filter('filter')(response, tabEditable);
	});

	let successHandler = function () {
		$mdDialog.hide($scope.tab);
	};

	let errorHandler = function (response) {
		setError($scope, response.data);
	};
};

function tabEditable(tab) {
	return tab != null && tab != undefined && tab.editable;
}

function setError($scope, error) {
	$scope.error = error;
	$scope.showError = true;
}