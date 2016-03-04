'use strict';

const ITEM_COUNT = 20;
const COLUMN_COUNT = 4;
const IMG_WIDTH = 400;
const IMG_HEIGHT = 400;

module.exports = function ($scope, $location) {
	let path = $location.path().toString();
	$scope.columns = COLUMN_COUNT;
	$scope.itemType = path.substring(1);
	$scope.genericItems = createItems($location.path());

	$scope.getRow = function (index) {
		var position = index + 1;
		return Math.ceil(position / COLUMN_COUNT);
	};

	$scope.getColumn = function (index) {
		return (index % COLUMN_COUNT) + 1;
	};

	$scope.genericItemNumber = function (index) {
		return index + 1;
	};
};

function createItems(urlPart) {
	let items = [];
	for (let i = 1; i <= ITEM_COUNT; i++) {
		let item = createSrc(urlPart, i);
		items.push(item);
	}
	return items;
}

function createSrc(urlPart, index) {
	if (urlPart.indexOf("/skulls") > -1) {
		let color = Math.floor(Math.random() * 16777215).toString(16);
		return "placeskull.com/" + IMG_WIDTH + "/" + IMG_HEIGHT + "/" + color + "/" + index + "/0";
	}
	else if (urlPart.indexOf("/dogs") > -1) {
		return "loremflickr.com/" + IMG_WIDTH + "/" + IMG_HEIGHT + "/dogs?random=" + index;
	}
	else if (urlPart.indexOf("/bees") > -1) {
		return "placebee.co.uk/" + IMG_WIDTH + "x" + IMG_HEIGHT + "/" + resizeIndexBack(index, 9);
	}
	else if (urlPart.indexOf("/architecture") > -1) {
		return "placeimg.com/" + IMG_WIDTH + "/" + IMG_HEIGHT + "/arch" + "/" + index;
	}
	else if (urlPart.indexOf("/food") > -1) {
		// backslash at the end is needed to prevent status 301
		return "lorempixel.com/" + IMG_WIDTH + "/" + IMG_HEIGHT + "/food/" + resizeIndexBack(index, 10) + "/";
	}
	return "placekitten.com/" + IMG_WIDTH + "/" + IMG_HEIGHT + "?image=" + resizeIndexBack(index, 16);
}

function resizeIndexBack(index, max) {
	while (index > max) {
		index -= max;
	}
	return index;
}
