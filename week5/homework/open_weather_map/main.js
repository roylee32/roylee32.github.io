   /*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/


$(document).ready(function () {
  var apiKey = '408a83317f78ca3fdd03e9ff2f1c002e';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
  $.ajax({
  	url: (weatherUrl + 'NewYork'),
  	type: 'GET',
  	success: function (response) {
  		console.log(response);
  		$('#nyc-weather')
  			.append('<p>Temperature: ' + response.main.temp + '&#8457</p>')
  			.append('<p>Humidity: ' + response.main.humidity + '%</p>')
  			.append('<p>Wind Speed: ' + response.wind.speed + ' mph</p>')
  	},
  	error: function (xhr) {
  		console.log(xhr);
  	}
  })
  $('#weather-form').click(function (evt){
  	evt.preventDefault();
  	var city = $('#city').val();
  	var state = $('#state').val();
  	$.ajax({
  		url: (weatherUrl + city + ',' + state),
  		type: 'GET',
  		success: function (response) {
  			getData(response);
  		},
  		error: function (xhr) {
  			console.log(xhr);
  		}
  	});
  })
  function getData(response){
  	var temp = response.main.temp
  	colorBackground(temp); 
  	$('#weather-wanted')
	  	.empty()
	  	.append('<p>City: ' + response.name + '</p>')
	  	.append('<p>Temperature: ' + temp + '&#8457</p>')
	  	.append('<p>Humidity: ' + response.main.humidity + '%</p>')
	  	.append('<p>Wind Speed: ' + response.wind.speed + ' mph</p>')
  }
  function colorBackground (temp){
  	if (temp > 75) {
  		$('body').css('background-color', 'rgba(200,200,200,0.5)');
  	}
  	else{
  		$('body').css('background-color', 'rgba(140,203,132,0.7)');
  	}
  }
  
})






