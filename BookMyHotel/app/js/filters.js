'use strict';

/* Filters */
bookMyHotelApp.filter('toRupees', function(){
	return function (dollarRate){
		return dollarRate * 60;
	}
});

bookMyHotelApp.filter('toCategory', function(){
	return function (rupeeRate){
		if ( rupeeRate > 100000){
			return 'luxury';
		}

		if ( rupeeRate > 50000){
			return 'premium';
		}

		if ( rupeeRate > 20000){
			return 'regular';
		}

		return 'lodge';
	}
})