'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			cat: '=',
			registerNewHandler: '&'
		},
		templateUrl: '../../../partials/directives/cats/catInfo.html',
		controller: ['$scope', 'ownerService', require('./catInfoController')]
	}
};