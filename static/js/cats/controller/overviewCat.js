'use strict';

module.exports = function ($scope, catService) {
	$scope.cats = null;
	catService.getCats().then(function (cats) {
		$scope.cats = cats;
	})
};