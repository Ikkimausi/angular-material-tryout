'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			required: '=',
			date: '=',
			minYear: '=',
			maxYear: '='
		},
		templateUrl: '../../../partials/directives/input/dateSelector.html',
		controller: ['$scope', require('./dateSelectorController')]
	}
};