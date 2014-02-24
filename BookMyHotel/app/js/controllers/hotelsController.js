bookMyHotelApp.controller('hotelsController', function($scope, hotelsProvider, calculator){

	$scope.upVote = function(hotel){
		hotel.rating ++;
	}

	$scope.downVote = function(hotel){
		hotel.rating --;
	}


	var promise = hotelsProvider.getHotels_d();

	promise.then(function(hotels){
		$scope.hotels = hotels;

		angular.forEach($scope.hotels, function(hotel, key){
			hotel.weightedScore = calculator.calculate(hotel);
		});

	});

});