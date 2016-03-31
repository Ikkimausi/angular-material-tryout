'use strict';

module.exports = function ($rootScope) {
	this.addListener = function (scope, event, callback) {
		var handler = $rootScope.$on(event, callback);
		scope.$on('$destroy', handler);
	};

	this.dispatchEvent = function (event) {
		$rootScope.$emit(event);
	};
};