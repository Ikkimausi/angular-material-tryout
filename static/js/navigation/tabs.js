'use strict';

module.exports = function ($scope, $location) {
	$scope.tabLabels = ['books', 'kittens', 'dogs', 'bees', 'skulls', 'architecture', 'food'];

	$scope.isTabActive = function (urlPart) {
		return $location.path().indexOf(urlPart) > -1;
	}

	$scope.navigate = function (urlPart) {
		$location.path(getUrl(urlPart));
	}

	$scope.href = function (urlPart) {
		return "#/" + getUrl(urlPart);
	}
};

function getUrl(urlPart) {
	return "generic/" + urlPart;
}
