'use strict';

const BASE_URI = "http://localhost:3001/api/cats/";

module.exports = function ($http, Upload) {
	this.getCats = function () {
		return $http.get(BASE_URI).then(function (response) {
			return response.data;
		});
	};

	this.getCat = function (catId) {
		return $http.get(BASE_URI + catId).then(function (response) {
			let cat = response.data[0];
			cat.geboortedatum = new Date(cat.geboortedatum); // parse to date object
			return cat;
		});
	};

	this.registerCat = function (cat, foto) {
		return Upload.upload({
			url: BASE_URI,
			method: 'POST',
			data: cat, file: foto
		});
	};

	this.updateCat = function (catId, changes) {
		return Upload.upload({
			url: BASE_URI + catId,
			method: 'PUT',
			data: changes, file: changes.foto
		});
	};

	this.deleteCat = function (cat) {
		return $http.delete(BASE_URI + cat._id);
	};
};