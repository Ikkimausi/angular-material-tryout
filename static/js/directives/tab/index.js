'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			tab: '=',
			selectedIndex: '=',
			tabIndex: '='
		},
		templateUrl: '../../../partials/directives/tab.html',
		controller: ['$scope', '$location', require('./tabController')]
	}
};