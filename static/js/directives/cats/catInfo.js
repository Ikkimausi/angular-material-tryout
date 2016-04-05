'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			cat: '='
		},
		templateUrl: '../../../partials/directives/cats/catInfo.html',
		controller: ['$scope', 'ownerApiService', require('./catInfoController')]
	}
};