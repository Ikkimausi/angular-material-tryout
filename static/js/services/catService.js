'use strict';

const BASE_URI = "http://localhost:4000/api/cats/";

module.exports = function ($http, Upload) {
	this.getCats = function () {
		return $http.get(BASE_URI).then(function (response) {
			return response.data;
		});
	};

	this.getCat = function (catId) {
		return $http.get(BASE_URI + catId).then(function (response) {
			return response.data[0];
		});
	};

	this.registerCat = function (cat, foto) {
		return Upload.upload({
			url: BASE_URI,
			method: 'POST',
			data: cat, file: foto
		});
	};

	this.updateCat = function (cat) {
		return $http.put(BASE_URI + cat.id, cat);
	};

	this.deleteCat = function (cat) {
		return $http.delete(BASE_URI + cat._id);
	};
};