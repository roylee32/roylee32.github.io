/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	var rooster = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {

	// push all animal instances here
	var farmAnimals = [];

	function FarmAnimal (name, image, sound){
		this.name = name;
		this.image = image;
		this.sound = sound;
	}
	FarmAnimal.prototype.talk = function(){
		alert(this.name);
		alert(this.sound);
	}

	function Cow (name, image, sound){
		FarmAnimal.call(this, name, image, sound)
	}
	Cow.prototype = new FarmAnimal();

	function Pig (name, image, sound){
		FarmAnimal.call(this, name, image, sound)
	}
	Pig.prototype = new FarmAnimal();

	function Lamb (name, image, sound){
		FarmAnimal.call(this, name, image, sound)
	}
	Lamb.prototype = new FarmAnimal();	

	var Albert = new Cow("Albert", "http://cdn.phys.org/newman/gfx/news/hires/2009/1-cow.jpg", "Mooooooo")
	var Wilbur = new Pig("Wilbur", "http://www.wingclips.com/system/movie-clips/charlottes-web/promise-for-wilbur/images/charlottes-web-movie-clip-screenshot-promise-for-wilbur_large.jpg", "Oinkk")
	var Chance = new Lamb("Chance", "http://static.independent.co.uk/s3fs-public/styles/article_large/public/thumbnails/image/2016/02/23/20/web-happy-lamb.jpg", "Maeeeee")

	farmAnimals.push(Albert, Wilbur, Chance);
	// console.log(Albert.talk()); 

	$.each(farmAnimals, function(i, element){
		console.log(element);
		var randomNumber = Math.floor(Math.random() * 50) + '%';
		var bottom = randomNumber;
		var left = randomNumber;
		//url has to be in the format "url:"url-hyperlink""
		var animal = $('body').append($('<div>' + element.name + '</div>').css({"background": "url("+element.image+")"
		, "bottom": bottom, "left": left}).addClass("animal"))
		$()
	})

})

