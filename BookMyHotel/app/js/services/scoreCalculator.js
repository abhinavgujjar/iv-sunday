bookMyHotelApp.factory('calculator', function(){
	return {
		calculate : function (hotel)
		{
			return (hotel.rating * 1000 ) / hotel.dailyRate;
		}
	}
})