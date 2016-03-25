'use strict';

module.exports = function ($scope, catService) {
	catService.getCats().then(function (cats) {
		$scope.cats = cats;
	})
};