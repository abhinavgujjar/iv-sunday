bookMyHotelApp.controller('hotelsController', function($scope, hotelsProvider, calculator){

	$scope.upVote = function(hotel){
		hotel.rating ++;
	}

	$scope.downVote = function(hotel){
		hotel.rating --;
	}


	$scope.hotels = hotelsProvider.hotelsList;

	angular.forEach($scope.hotels, function(hotel, key){
		hotel.weightedScore = calculator.calculate(hotel);
	});
});