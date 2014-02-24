bookMyHotelApp.controller('newHotelController', function($scope){
	$scope.save = function(newHotelForm){
	console.log(newHotelForm);
		if ( newHotelForm.$valid)
		{
			alert('Valid');
		}
		else
		{
			alert('not valid');
		}
	}	

});