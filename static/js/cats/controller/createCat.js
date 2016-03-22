'use strict';

module.exports = function ($scope, $location) {
	$scope.cat = {
		naam: '',
		geboortedatum: null,
		geslacht: '',
		gesteriliseerd: false,
		ras: '',
		medicatie: '',
		dierenarts: '',
		eigenaar: '',
		foto: '',
		voeding: '',
		gedrag: ''
	};

	$scope.cancelCat = function () {
		let path = $location.path().replace('/create', "");
		$location.path(path);
	};

	$scope.saveCat = function () {

	};
};