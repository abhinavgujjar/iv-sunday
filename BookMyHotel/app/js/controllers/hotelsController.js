bookMyHotelApp.controller('hotelsController', function($scope, hotelsProvider){

	$scope.upVote = function(hotel){
		hotel.rating ++;
	}

	$scope.downVote = function(hotel){
		hotel.rating --;
	}


	$scope.hotels = hotelsProvider.hotelsList;
});