/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {
	document.getElementById('getDataButton').onclick = makeRequest
	function makeRequest(){
		var url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";
		//Step 1: Create Instance of the XHR object
	// 	var httpRequest = new XMLHttpRequest();

	// 	//Step 2: Write a function to handle the actual request
	// 	httpRequest.onreadystatechange = requestHandler 

	// 	//Step 3: Open the Request
	// 	httpRequest.open('GET', url)

	// 	//Step 4: Send the Request
	// 	httpRequest.send();
		
	// 	//request logic
	// 	function requestHandler (){

	// 		//check if DONE
	// 		if (httpRequest.readyState === XMLHttpRequest.DONE){
				
	// 			//if successful
	// 			if (httpRequest.status === 200){
	// 				console.log(JSON.parse(httpRequest.response));
	// 			}
	// 			else {
	// 				console.log('There was an error with the request.')
	// 			}
	// 		}
		$.get(url, function(response) {
			console.log(response);
		}) 
		$.ajax({
			url: url,
			type: 'GET',
			success: function (response){
				console.log(response);
			},
			error: function (response){
				console.log(response);
			}
		})
	}
}





