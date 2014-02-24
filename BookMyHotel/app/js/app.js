'use strict';

var bookMyHotelApp = 
angular.module('bookMyHotel', ['ngRoute'])
.config(

	function ($routeProvider){


		$routeProvider.when('/list',
		{
			templateUrl:'partials/hotelList.html',
			controller: 'hotelsController'
		});

		$routeProvider.when('/newHotel',
		{
			templateUrl:'partials/newHotel.html',
			controller: 'newHotelController'
		});

		$routeProvider.otherwise(
		{
			templateUrl:'partials/hotelList.html',
			controller: 'phorenController'
		});

	});