'use strict';

module.exports = function ($scope, $mdDialog, imageUrlService) {
	$scope.error = "";
	$scope.showError = false;

	$scope.tab = {
		label: '',
		url: '',
		maxCount: 0
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.createTab = function(tab) {
		imageUrlService.createImageUrl(tab).then(function(response){
			$mdDialog.hide(response);
		},function(response){
			$scope.error = response.data;
			$scope.showError = true;
		});
	};
};