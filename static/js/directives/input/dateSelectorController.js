'use strict';

module.exports = function ($scope) {
	setDate($scope);

	$scope.days = createDays();
	$scope.months = createMonths();
	$scope.years = createYears($scope.minYear, $scope.maxYear);

	$scope.$watch(
		function watchDay(scope) {
			return $scope.day;
		},
		function handleDayChange(newValue, oldValue) {
			$scope.date = initDate($scope.date);
			$scope.date.setDate(newValue);
			setDate($scope);
		}
	);

	$scope.$watch(
		function watchMonth(scope) {
			return $scope.month;
		},
		function handleMonthChange(newValue, oldValue) {
			$scope.date = initDate($scope.date);
			$scope.date.setMonth(newValue);
			setDate($scope);
		}
	);

	$scope.$watch(
		function watchYear(scope) {
			return $scope.year;
		},
		function handleYearChange(newValue, oldValue) {
			$scope.date = initDate($scope.date);
			$scope.date.setFullYear(newValue);
			setDate($scope);
		}
	);
};

function initDate(date) {
	if (!date) {
		date = new Date();
		date.setMonth(0, 1);
	}
	return date;
}

function setDate(scope) {
	scope.date = initDate(scope.date);
	scope.day = scope.date.getDate();
	scope.month = scope.date.getMonth();
	scope.year = scope.date.getFullYear();
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