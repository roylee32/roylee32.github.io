// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
// $(document).ready(function () {
// 	//Init Templates Append
// 	var initTodos = {
// 		todos: [
// 			'Data Types',
// 			'Array',
// 			'Objects',
// 			'Functions',
// 		]
// 	}

// 	var templateSource = $('#init-template').html();
// 	var templateCompiled = Handlebars.compile(templateSource);
// 	var templateTemplate = templateCompiled(initTodos);
// 	$('#list')







	$('#item-form').submit(function(event){
		event.preventDefault();
		var newItem = $('#new-item').val();
		if (newItem === "") {
			return alert('No Input!');
		}
		else{
			$('#list').append('<li>' + newItem + '</li>');
			$('#new-item').val('').focus();
		}
		//$('#new-item').val('').focus();
		})
	})
	$(document).on('click', 'li', function(){
			$(this).remove();
})
