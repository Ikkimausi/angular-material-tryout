'use strict';

module.exports = function ($scope, $mdDialog, catService, eventService) {
	$scope.title = "Registreer kat";
	$scope.foto = null;
	$scope.progress = 0;
	$scope.cat = {
		naam: '',
		geboortedatum: null,
		geslacht: '',
		gecastreerd: false,
		medicatie: '',
		dierenarts: '',
		eigenaar: '',
		voeding: '',
		gedrag: ''
	};

	$scope.saveCat = function () {
		catService.registerCat($scope.cat, $scope.foto)
			.then(function (response) {
				$scope.progress = 100;
				eventService.dispatchEvent("cats.refresh");
				$mdDialog.hide();
			}, function (response) {
				$scope.progress = 0;
				// Do something
			}, function (evt) {
				$scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
	};
}
;