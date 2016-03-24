'use strict';

const COLUMN_COUNT = 4;
const IMG_WIDTH = 400;
const IMG_HEIGHT = 400;

module.exports = function ($scope, catService) {
	$scope.columns = COLUMN_COUNT;
	$scope.ratio = IMG_WIDTH + ':' + IMG_HEIGHT;

	$scope.getRow = function (index) {
		return Math.ceil((index + 1) / COLUMN_COUNT);
	};

	$scope.getColumn = function (index) {
		return (index % COLUMN_COUNT) + 1;
	};

	catService.getCats().then(function (cats) {
		$scope.cats = cats;
	})
};