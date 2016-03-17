'use strict';

module.exports = function ($scope, $mdDialog, imageUrlService) {
	$scope.title = 'Creating a new tab';
	$scope.error = "";
	$scope.showError = false;

	$scope.tab = {
		label: '',
		url: '',
		maxCount: 0
	};

	$scope.createTab = function (tab) {
		imageUrlService.createImageUrl(tab).then(function (response) {
			$mdDialog.hide(response);
		}, function (response) {
			$scope.error = response.data;
			$scope.showError = true;
		});
	};
};