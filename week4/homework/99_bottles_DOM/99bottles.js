$('button').click(function (){
	for (var i = 99; i >= 0; i--){
	if (i > 1){
		var $listitem = (i + " Bottles of beer on the Wall");
		$('#song-lyrics').append('<li>' + $listitem + '</li>');
	}
	else if (i <= 1) {
		var $listitem2 = (i + ' Bottle of beer on the Wall');
		$('#song-lyrics').append('<li>' + $listitem2 + '</li>');
	}
}
})
	
