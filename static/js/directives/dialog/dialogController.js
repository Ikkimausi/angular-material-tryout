'use strict';

module.exports = function ($scope, $mdDialog) {
	$scope.cancel = function () {
		let overrideCancelFn = $scope.overrideCancel();
		if (overrideCancelFn) {
			overrideCancelFn();
		} else {
			$mdDialog.cancel();
		}
	};
};