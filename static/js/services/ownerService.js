'use strict';

const BASE_URI = "http://localhost:3002/api/owners/";

module.exports = function ($http, Upload) {
	this.getOwners = function () {
		return $http.get(BASE_URI).then(function (response) {
			return response.data;
		});
	};

	this.registerOwner = function (owner, foto) {
		return Upload.upload({
			url: BASE_URI,
			method: 'POST',
			data: owner, file: foto
		});
	};

	this.updateOwner = function (owner) {
		return $http.put(BASE_URI + owner.id, owner);
	};

	this.deleteOwner = function (owner) {
		return $http.delete(BASE_URI + owner._id);
	};
};