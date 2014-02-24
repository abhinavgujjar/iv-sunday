helloWorldApp.controller('worldController', function($scope){
	$scope.greeting = "Good Afternoon, Sunday Batch !";

	$scope.bePolite = true;

	$scope.yell = function(){
		alert('AAAA! - ' + $scope.namaste);
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