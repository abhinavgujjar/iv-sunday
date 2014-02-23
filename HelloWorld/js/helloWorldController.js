helloWorldApp.controller('worldController', function($scope){
	$scope.greeting = "Good Afternoon, Sunday Batch !";

	$scope.bePolite = true;

	$scope.yell = function(what){
		alert('AAAA! - ' + $scope.greeting);
	}

	$scope.hotels = [
	{
		name : 'Radisson',
		location : 'Sector 18',
		image: 'img/radisson.jpg'
	},
	{
		name : 'Hilton',
		location : 'New Delhi',
		image: 'img/taj.jpg'
	},
	{
		name : 'Hyatt',
		location : 'New Delhi',
		image: 'img/hyatt.jpg'
	},
	{
		name : 'Mariott',
		location : 'Gurgaon',
		image: 'img/royalorchid.jpg'
	}
	];
});