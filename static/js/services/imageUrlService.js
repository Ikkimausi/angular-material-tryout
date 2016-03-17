'use strict';

const BASE_URI = "http://localhost:4000/api/imageUrls/";
const ITEM_COUNT = 20;

module.exports = function ($http) {
	this.getImageUrls = function () {
		return $http.get(BASE_URI).then(function (response) {
			return response.data;
		});
	};

	this.createImageUrl = function (tab) {
		return $http.post(BASE_URI, tab);
	};

	this.updateImageUrl = function (tab) {
		return $http.put(BASE_URI + tab.label, tab);
	};

	this.deleteImageUrl = function (tab) {
		return $http.delete(BASE_URI + tab.label);
	};

	this.getImages = function (imageLabel, imageWidth, imageHeight) {
		return $http.get(BASE_URI + imageLabel).then(function (response) {
			let imageUrl = response.data.url;
			let maxCount = response.data.maxCount;

			imageUrl = imageUrl.replace("imageWidth", imageWidth);
			imageUrl = imageUrl.replace("imageHeight", imageHeight);

			let items = [];
			for (let i = 1; i <= ITEM_COUNT; i++) {
				let index = i;
				while (index > maxCount) {
					index -= maxCount;
				}
				let item = imageUrl.replace("index", index);
				items.push({label: imageLabel, url: item, itemNumber: i});
			}

			return items;
		});
	};
};