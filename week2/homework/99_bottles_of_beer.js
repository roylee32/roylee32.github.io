// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0
for (var i = 99; i >= 0; i--){
	if (i > 1){
		console.log(i + " Bottles of beer on the Wall");
	}
	else if (i <= 1) {
		console.log(i + ' Bottle of beer on the Wall');
	}
}