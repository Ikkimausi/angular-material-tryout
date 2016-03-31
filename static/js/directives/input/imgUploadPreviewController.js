'use strict';

module.exports = function ($scope) {
	$scope.inputClicked = function () {
		$scope.pictureModel = null;
	};

	$scope.fileSelected = function () {
		if (!$scope.pictureModel) {
			$scope.fotoError = "Gelieve een afbeelding te selecteren";
			return;
		}
		let size = ($scope.pictureModel.size / (1024 * 1024)).toFixed(2);

		if ($scope.pictureModel.type != "image/jpeg") {
			$scope.pictureModel = null;
			$scope.fotoError = "Verkeerd soort bestand, jpeg verplicht";
		} else if (size > 15) {
			$scope.pictureModel = null;
			$scope.fotoError = "Foto te groot, maximaal 15MB toegestaan";
		} else {
			$scope.fotoError = null;
		}
	};
};