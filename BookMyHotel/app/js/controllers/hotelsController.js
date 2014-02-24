bookMyHotelApp.controller('hotelsController', function($scope){

	$scope.upVote = function(hotel){
		hotel.rating ++;
	}

	$scope.downVote = function(hotel){
		hotel.rating --;
	}


	$scope.hotels = [
	{
		name : 'Radisson',
		location : 'Sector 18',
		image: 'img/radisson.jpg',
		rating: 8,
		dailyRate : 6000
	},
	{
		name : 'Hilton',
		location : 'New Delhi',
		image: 'img/taj.jpg',
		rating: 6,
		dailyRate : 500
	},
	{
		name : 'Hyatt',
		location : 'New Delhi',
		image: 'img/hyatt.jpg',
		rating: 9,
		dailyRate : 200
	},
	{
		name : 'Mariott',
		location : 'Gurgaon',
		image: 'img/royalorchid.jpg',
		rating: 3,
		dailyRate : 600
	}
	];
});