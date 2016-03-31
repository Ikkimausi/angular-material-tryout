'use strict';

module.exports = function ($scope, catService, eventService) {
	$scope.cats = null;

	let getCats = function () {
		catService.getCats().then(function (cats) {
			$scope.cats = cats;
		});
	};

	eventService.addListener($scope, "cats.refresh", getCats);

	getCats();
};