/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/
/*
function addToList(list, newThing) {
	var newListItem = document.createElement('li');
	newListItem.innerHTML = newThing;

	list.appendChild("newListItem");
*/
}

window.onload = function() {
  // YOUR CODE HERE!
  document.getElementById("new-thing-button").onclick = function(event){
  	event.preventDefault();

  	var input = document.getElementByID("new-thing").value;
  	var newThing = document.getElementById("fav-list").appendChild(input);
  }
};

/*

Bonus

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


