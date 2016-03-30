'use strict';

module.exports = function ($scope, catService) {
	$scope.removeCat = function () {
		catService.deleteCat($scope.cat).then(function success() {
			$scope.$emit('catDeleted');
		});
	};
};