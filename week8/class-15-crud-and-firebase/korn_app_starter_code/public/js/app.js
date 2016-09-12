$(document).ready(function () {

	// Store a reference to your Firebase DB
	var messageAppReference = firebase.database();

	// CREATE
	$('#message-form').submit(function (event) {
		// prevent event default
		event.preventDefault();

		// grab message value from DOM
		var message = $('#message').val();

		// create a messages reference in your Firebase DB
		var messagesReference = messageAppReference.ref('messages');

		// use the push method to save data to the messages object reference created above
		messagesReference.push({
		  message: message,
		  votes: 0
		})
		$('#message').val('');
	})
	function getFanMessages() {
    messageAppReference.ref('messages').on('value', function (results) {

   		$('.message-board').empty();

      results.forEach(function (msg) {
      	var id = msg.key;
        var message = msg.val();
        var messageText = message.message;
        var votes = message.votes;
        var $li = $("<li>");
          // create up vote element
		var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');

		$upVoteElement.on('click', function () {
		updateMessage(id, ++votes);
		})

		// create down vote element
		var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

		$downVoteElement.on('click', function () {
		updateMessage(id, --votes);
		})
		  // create delete element
		var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');

		$deleteElement.on('click', function () {
		   deleteMessage(id);
		})

		$li.text(messageText);

		// add voting elements to $li
		$li.append($upVoteElement);
		$li.append($downVoteElement);
		$li.append($deleteElement);
		$li.append('<div class="pull-right">' + votes + '</div>');

        $('.message-board').append($li);
      })
    })
  }
   function updateMessage (id, votes) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference = messageAppReference.ref('messages/' + id);

    // update votes property
    messageReference.update({
      votes: votes
    })
  }

  //delete message function
  function deleteMessage (id) {
  	var messageReference = messageAppReference.ref('messages/' + id);
  	messageReference.remove();
  }

  getFanMessages()

})