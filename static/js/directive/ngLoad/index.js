'use strict';

module.exports = function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			var fn = $parse(attrs.ngLoad);
			elem.on('load', function (event) {
				scope.$apply(function () {
					fn(scope, {$event: event});
				});
			});
		}
	};
};