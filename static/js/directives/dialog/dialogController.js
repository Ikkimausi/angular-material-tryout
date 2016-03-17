'use strict';

module.exports = function ($scope, $mdDialog) {
	$scope.cancel = function () {
		$mdDialog.cancel();
	};
};