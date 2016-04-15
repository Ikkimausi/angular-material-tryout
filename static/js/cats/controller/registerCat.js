'use strict';

module.exports = function ($scope, $mdDialog, catService, ownerService, eventService) {
	$scope.cat = createCat();
	$scope.catFoto = null;

	let toggleCatState = function () {
		setState($scope, true, "Registreer kat");
	};

	$scope.toggleOwnerState = function () {
		setState($scope, false, "Registreer eigenaar");
		$scope.owner = createOwner();
		$scope.ownerFoto = null;
	};

	$scope.saveCat = function () {
		catService.registerCat($scope.cat, $scope.catFoto).then(function (response) {
			eventService.dispatchEvent("cats.refresh");
			$mdDialog.hide();
		});
	};

	$scope.saveOwner = function () {
		ownerService.registerOwner($scope.owner, $scope.ownerFoto).then(function (response) {
			$scope.cat.eigenaar = response.data;
			toggleCatState();
		});
	};

	$scope.toggleCatState = toggleCatState;

	toggleCatState();
};

function setState($scope, state, title) {
	$scope.isCatState = state;
	$scope.title = title;
	$scope.progress = 0;
}

function createCat() {
	return {
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
}
function createOwner() {
	return {
		voornaam: '',
		familienaam: '',
		adres: {
			straat: '',
			nummer: '',
			gemeente: '',
			postcode: ''
		},
		email: '',
		telefoonnummer: '',
		noodnummer: ''
	};
}