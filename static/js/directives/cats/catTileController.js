'use strict';

module.exports = function ($scope, catService, eventService) {
	$scope.removeCat = function () {
		catService.deleteCat($scope.cat).then(function success() {
			eventService.dispatchEvent('cats.refresh');
		});
	};
};