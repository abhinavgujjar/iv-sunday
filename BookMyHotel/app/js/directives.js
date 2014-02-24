'use strict';

/* Directives */
bookMyHotelApp.directive('ticks', function(){
	return {
		restrict: 'E',
		template : "<div ng-repeat='a in items' ><span class='glyphicon glyphicon-ok'></span><span class='label label-default' >{{a}}</span></div>",
		scope:{
			items: "="
		}
	}
});	