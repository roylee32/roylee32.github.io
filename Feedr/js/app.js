/*
  Please add all Javascript code to this file.
*/


//sample helper function
// var help = models
// help.hello("world")

var array = ["Mashable", 'Reddit', 'Digg'];
$.each(array, function(i, element){
	$('.container ul li ul').append(element)
})