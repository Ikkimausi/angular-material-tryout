'use strict';

let tabs;

module.exports = function ($mdDialog) {
	this.getTabs = function () {
		if (!tabs) {
			tabs = [createTab('Katten', 'cats', 'partials/cats/registerCat.html', require('../cats/controller/registerCat')),
				createTab('Eigenaars', 'owners', 'partials/owners/registerOwner.html', require('../owners/controller/registerOwner')),
				createTab('Verblijvingen', 'registrations')];
		}

		return tabs;
	};

	this.registerNew = function (tab, callback) {
		internalRegisterNew($mdDialog, tab, callback);
	};

	this.registerNewOwner = function (callback) {
		internalRegisterNew($mdDialog, tabs[1], callback);
	};
};

function createTab(label, path, template, ctrl) {
	return {
		label: label,
		path: path,
		templateUrl: template,
		controller: ctrl
	};
}
function internalRegisterNew($mdDialog, tab, callback) {
	$mdDialog.show({
		controller: tab.controller,
		templateUrl: tab.templateUrl,
		fullscreen: true
	}).then(callback);
}       