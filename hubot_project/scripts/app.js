//module exports is how we share files when we are inside of a node application
    module.exports = function(robot) {
    	//If I type hello or hi, return value. The i allows non-case sensitive input to be read
        robot.hear(/hello|hi/i, function(res) {
        	return res.send("Hello, World!");
        })
        robot.hear(/cat/i, function (res){
        	return res.send("Meow");
        })
        //In order to get an output, you must use @Botname to get a response back from the server
        robot.respond(/How are you?/i, function(res){
        	return res.send("I am great!");
        })
        robot.respond(/my name is (.*)/i, function(res){
        	//(.*) is called wildcard selector
        	// the (.* ) stands for the input of the line of code. 
        	//The res.match is an array that holds the question and the (.*) value.
        	//Now the variable name is holding whatever name the user inputs.
        	var name = res.match[1];
        	return res.reply("Hello " + name);
        })
        robot.hear(/add (.*) and (.*)/i, function(res) {
        	var x = parseInt(res.match[1]);
        	var y = parseInt(res.match[2]);
        	var z = x + y;
        	return res.send(x + " + " + y +  " = " + z);
        })
        robot.respond(/here|here!|I'm here/i, function(res){
        	return res.reply("Good to have you here today!~");
        })
    }
   


