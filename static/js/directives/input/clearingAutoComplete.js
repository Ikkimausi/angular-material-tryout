'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			label: '@',
			notFoundLabel: '@',
			filterProperty: '@',
			selected: '=',
			getResults: '&',
			onSearch: '&'
		},
		templateUrl: '../../../partials/directives/input/clearingAutoComplete.html',
		controller: ['$scope', require('./clearingAutoCompleteController')]
	}
};