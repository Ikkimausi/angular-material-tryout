'use strict';

module.exports = function ($scope) {
	$scope.fileSelected = function (file) {
		if (!file) {
			$scope.fotoError = !$scope.pictureModel ? "Gelieve een afbeelding te selecteren" : null;
			return;
		}
		let size = (file.size / (1024 * 1024)).toFixed(2);

		if (file.type != "image/jpeg") {
			$scope.fotoError = "Verkeerd soort bestand, jpeg verplicht";
		} else if (size > 15) {
			$scope.fotoError = "Foto te groot, maximaal 15MB toegestaan";
		} else {
			$scope.pictureModel = file;
			$scope.fotoError = null;
		}
	};
};