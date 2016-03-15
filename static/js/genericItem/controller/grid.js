'use strict';

const COLUMN_COUNT = 4;
const IMG_WIDTH = 400;
const IMG_HEIGHT = 400;

module.exports = function ($scope, $location, $routeParams, imageUrlService) {
	$scope.columns = COLUMN_COUNT;
	$scope.ratio = IMG_WIDTH + ':' + IMG_HEIGHT;

	$scope.getRow = function (index) {
		var position = index + 1;
		return Math.ceil(position / COLUMN_COUNT);
	};

	$scope.getColumn = function (index) {
		return (index % COLUMN_COUNT) + 1;
	};

	imageUrlService.getImages($routeParams.imageLabel, IMG_WIDTH, IMG_HEIGHT).then(function (images) {
		$scope.images = images;
	}, function (error) {
		$location.path('');
	});
};