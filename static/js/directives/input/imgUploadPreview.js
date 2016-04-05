'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		scope: {
			pictureModel: '=',
			required: '=',
			showInput: '='
		},
		templateUrl: '../../../partials/directives/input/imgUploadPreview.html',
		controller: ['$scope', require('./imgUploadPreviewController')]
	}
};