/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
//Any Amount of Foods Eaten Accepted
var Monkey = function(name, species){
	this.name = name;
	this.species = species;
	this.eatSomething = function (){
		var foodsEaten = [];
		for (var i=0; i<arguments.length; i++){
			foodsEaten.push(arguments[i]);
		}
		this.foodsEaten = foodsEaten;
	};
	this.introduce = function(){
		console.log("Hi. My name is " + this.name + ". I am of the species " + this.species + ", and I have eaten " + this.foodsEaten + '.');
	};
};
var monkey1 = new Monkey("Riley", "Chimp");
monkey1.eatSomething("Lettuce, Tomato, Fish");
monkey1.introduce();

var monkey2 = new Monkey("Adam", "Gorilla");
monkey2.eatSomething("Apples, Kiwi, Chicken");
monkey2.introduce();

var monkey3 = new Monkey("Felicia", "Baboon");
monkey3.eatSomething("Steak, Onions, Eggplant");
monkey3.introduce();

//Class' Code
/*
var Monkey = function(name, species){
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
	this.eatSomething = function (food) {
		this.foodsEaten.push(food);
	}
}






