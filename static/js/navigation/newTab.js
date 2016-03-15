'use strict';

module.exports = function ($scope, $mdDialog, imageUrlService) {
	$scope.tab = {
		label: '',
		path: 'generic/',
		url: '',
		maxCount: 0
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.createTab = function(tab) {
		imageUrlService.createImageUrl(tab).then(function(response){
			$mdDialog.hide(response);
		});
	};
};