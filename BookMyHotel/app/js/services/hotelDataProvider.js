bookMyHotelApp.factory('hotelsProvider', function($http, $q){
	return {
		getHotels: function(successcb)
		{
			$http({method:'GET', url:'/data/hotel'})
			.success( function(data){
				successcb(data);
				alert('Yes! Successful');
			})
			.error( function (){
				alert('oh no :(');
			});
		},
		getHotels_d: function()
		{
			var deferred = $q.defer();

			$http({method:'GET', url:'/data/hotel'})
			.success( function(data){
				deferred.resolve(data);
			})
			.error( function (){
				deferred.reject();
			});

			return deferred.promise;
		}
	};

});