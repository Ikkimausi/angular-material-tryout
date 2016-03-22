'use strict';

module.exports = function () {
	this.getTabs = function () {
		return [createTab('cats'), createTab('owners'), createTab('registrations')];
	};
};

function createTab(label) {
	return {
		label: label,
		path: '/' + label
	};
}