$(document).ready(function() {
	var myMap;
      function initMap() {
        myMap = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0059},
          zoom: 14
        });
      }

      initMap();

      //Get Citi Bike Ajax Request
   //    $.ajax({
   //    	url:"http://api.citybik.es/citi-bike-nyc.json",
   //    	type:'GET',
   //    	success: function(response){
   //    		$.each(response, function(i){
   //    			console.log(i)
   //    		})
   //    	},
 		// error: function(xhr){
   //    		console.log(xhr);
   //    	} 
   //    })

      $.ajax({
      	url:"http://api.citybik.es/citi-bike-nyc.json",
      	type:'GET',
      	success: function(response){
      		for(var i=0; i<response.length; i++){
      			var newlat = (response[i].lat)/1000000;
      			var newlng = (response[i].lng)/1000000;
      			var place = new google.maps.Marker({
      				position: {
      					lat: newlat,
      					lng: newlng,
      				},
      				map: myMap,
      			})
      		}
      	},
 		error: function(xhr){
      		console.log(xhr);
      	} 
      })



      // var cityHall = new google.maps.Marker({
      // 	position: {
      // 		lat: 40.7128,
      // 		lng: -74.0059,
      // 	},
      // 	map: myMap,
      // 	title: "CityHall, NY"
      // })
      // var generalAssembley = new google.maps.Marker({
      // 	position: {
      // 		lat: 40.7418868,
      // 		lng: -73.9914576,
      // 	},
      // 	map: myMap,
      // })


})


