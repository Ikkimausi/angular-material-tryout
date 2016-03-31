'use strict';

module.exports = function () {
	this.getTabs = function () {
		return [createTab('Katten', 'cats', 'partials/cats/registerCat.html', require('../cats/controller/registerCat')),
			createTab('Eigenaars', 'owners', 'partials/owners/registerOwner.html', require('../owners/controller/registerOwner')),
			createTab('Verblijvingen', 'registrations')];
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