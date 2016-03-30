'use strict';

module.exports = function ($scope, catService) {
	$scope.cats = null;

	let getCats = function () {
		catService.getCats().then(function (cats) {
			$scope.cats = cats;
		});
	};

	$scope.$on('catDeleted', function (event, args) {
		getCats();
	});

	getCats();
};