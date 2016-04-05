'use strict';

module.exports = function ($scope, $location, catService, eventService) {
	$scope.detailCat = function () {
		$location.path('cats/' + $scope.cat._id);
	};
	$scope.removeCat = function () {
		catService.deleteCat($scope.cat).then(function success() {
			eventService.dispatchEvent('cats.refresh');
		});
	};
};