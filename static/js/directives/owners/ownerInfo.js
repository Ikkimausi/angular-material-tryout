'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			owner: '='
		},
		templateUrl: '../../../partials/directives/owners/ownerInfo.html'
	}
};