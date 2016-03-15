'use strict';

module.exports = function ($scope, $mdDialog, imageUrlService, selectedTab) {
	$scope.tab = selectedTab;
	$scope.tabs = null;
	$scope.filteredTabs = [];

	$scope.tabFilter = function (tab) {
		return $scope.tabEditable(tab);
	};

	$scope.tabEditable = function tabEditable(tab) {
		return tab != null && tab != undefined && (!tab.hasOwnProperty('editable') || tab.editable);
	};

	$scope.cancel = function () {
		$mdDialog.cancel();
	};

	$scope.deleteTab = function (tab) {
		imageUrlService.deleteImageUrl(tab).then(function (response) {
			$mdDialog.hide(tab);
		});
	};

	$scope.saveTab = function (tab) {
		if(tab.maxCount == null || tab.maxCount == 0){
			delete tab.maxCount;
		}

		if (tab.url == selectedTab.url && tab.maxCount == selectedTab.maxCount) {
			$mdDialog.cancel(tab);
		}
		else {
			imageUrlService.updateImageUrl(tab).then(function (response) {
				$mdDialog.hide(tab);
			});
		}
	};

	imageUrlService.getImageUrls().then(function (response) {
		$scope.tabs = response;
	});
};
