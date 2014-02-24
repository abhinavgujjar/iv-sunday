bookMyHotelApp.controller('phorenController', function($scope, hotelsProvider, calculator){

	$scope.upVote = function(hotel){
		hotel.rating ++;
	}

	$scope.downVote = function(hotel){
		hotel.rating --;
	}


	$scope.hotels = [
		{
			name : 'Marriot Hawaii',
			location : 'Hawaii',
			image: 'img/radisson.jpg',
			rating: 88,
			dailyRate : 20000
		}]
});