'use strict';

module.exports = function ($scope, $location, catService) {
	$scope.today = new Date();
	$scope.foto = null;
	$scope.progress = 0;
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

	$scope.fileSelected = function () {
		if (!$scope.foto) {
			$scope.fotoError = "Gelieve een foto te selecteren";
			return;
		}

		let size = ($scope.foto.size / (1024 * 1024)).toFixed(2);

		if ($scope.foto.type != "image/jpeg") {
			$scope.foto = null;
			$scope.fotoError = "Verkeerd soort bestand, jpeg verplicht";
		} else if (size > 15) {
			$scope.foto = null;
			$scope.fotoError = "Foto te groot, maximaal 15MB toegestaan";
		} else {
			$scope.fotoError = null;
		}
	};

	$scope.cancelCat = function () {
		let path = $location.path().replace('/register', "");
		$location.path(path);
	};

	$scope.saveCat = function () {
		catService.registerCat($scope.cat, $scope.foto)
			.then(function (response) {
				$scope.progress = 100;
				$scope.cancelCat(); // Go to cats
			}, function (response) {
				$scope.progress = 0;
				// Do something
			}, function (evt) {
				$scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
	};
}
;