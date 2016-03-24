'use strict';

module.exports = function ($scope, $location) {
	$scope.owner = {
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

	$scope.cancelOwner = function () {
		let path = $location.path().replace('/create', "");
		$location.path(path);
	};

	$scope.saveOwner = function () {

	};
};