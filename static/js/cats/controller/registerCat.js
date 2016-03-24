'use strict';

module.exports = function ($scope, $location, catService) {
	$scope.cat = {
		naam: '',
		geboortedatum: null,
		geslacht: '',
		gesteriliseerd: false,
		medicatie: '',
		dierenarts: '',
		eigenaar: '',
		voeding: '',
		gedrag: ''
	};

	$scope.foto = null;

	$scope.cancelCat = function () {
		let path = $location.path().replace('/create', "");
		$location.path(path);
	};

	$scope.saveCat = function () {
		catService.registerCat($scope.cat, $scope.foto)
			.then(function (response) {
				$scope.cancelCat(); // Go to cats
			}, function (response) {
				console.log("error", response); // Do something
			}, function (evt) {
				$scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
				console.log("Progress", foto.progress);
			});
	};
};