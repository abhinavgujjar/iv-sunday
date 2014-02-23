helloWorldApp.controller('worldController', function($scope){
	$scope.greeting = "Good Afternoon, Sunday Batch !";

	$scope.yell = function(what){
		alert('AAAA! - ' + $scope.greeting);
	}

	$scope.hotels = [
	{
		name : 'Radisson',
		location : 'Sector 18'
	},
	{
		name : 'Hilton',
		location : 'New Delhi'
	},
	{
		name : 'Hyatt',
		location : 'New Delhi'
	},
	{
		name : 'Mariott',
		location : 'Gurgaon'
	}
	];
});