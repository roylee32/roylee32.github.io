/*
//This function waits until all the window has loaded, so it holds off until it is loaded. This is an event.
window.onload = function (){
	alert('loaded');
}
//In this case, this code will load first than the function.
alert("still loading!");
*/

//Gets the first id of the parameter
var helloEl = document.getElementById('hello');

//DOM METHOD
helloEl.innerHTML = 'JS IS SO COOL!';

//querySelector for one of a type
var pEL = document.querySelector('p');
console.log(pEL);

// query for all of a type
var listEls = document.querySelectorAll('li');
console.log(listEls);

//click event
document.getElementById('my-btn').onclick = function (event){
	var input = document.getElementById('my-input').value;

}
