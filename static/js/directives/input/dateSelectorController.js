'use strict';

module.exports = function ($scope) {
	let setDate = function () {
		$scope.date = initDate($scope.date);
		$scope.day = $scope.date ? $scope.date.getDate() : null;
		$scope.month = $scope.date ? $scope.date.getMonth() : null;
		$scope.year = $scope.date ? $scope.date.getFullYear() : null;
	};

	$scope.days = createDays();
	$scope.months = createMonths();
	$scope.years = createYears($scope.minYear, $scope.maxYear);

	setDate();

	$scope.$watch(
		function watchDate() {
			return $scope.date;
		},
		function handleDayChange() {
			setDate();
		}
	);

	$scope.$watch(
		function watchDay() {
			return $scope.day;
		},
		function handleDayChange(newValue) {
			$scope.date = initDate($scope.date);
			$scope.date.setDate(newValue);
			setDate();
		}
	);

	$scope.$watch(
		function watchMonth() {
			return $scope.month;
		},
		function handleMonthChange(newValue) {
			$scope.date = initDate($scope.date);
			$scope.date.setMonth(newValue);
			setDate();
		}
	);

	$scope.$watch(
		function watchYear() {
			return $scope.year;
		},
		function handleYearChange(newValue) {
			$scope.date = initDate($scope.date);
			$scope.date.setFullYear(newValue);
			setDate();
		}
	);
};

function initDate(date) {
	if (!date) {
		date = new Date();
		date.setMonth(0, 1);
	} else if (!(date instanceof Date)) {
		date = new Date(date);
	}
	return date;
}

function createDays() {
	let days = [];

	for (let i = 1; i <= 31; i++) {
		days.push(i);
	}

	return days;
}

function createMonths() {
	return ["Januari",
		"Februari",
		"Maart",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Augustus",
		"September",
		"Oktober",
		"November",
		"December"];
}

function createYears(minYear, maxYear) {
	let min = minYear > maxYear ? maxYear : minYear;
	let max = minYear < maxYear ? maxYear : minYear;
	let years = [];

	for (var i = max; i >= min; i--) {
		years.push(i);
	}

	return years;
}