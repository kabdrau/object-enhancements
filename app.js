//Same keys and values
function createInstructor(firstName, lastName){
	return {
		firstName: firstName,
		lastName: lastName
	}
}

//Same keys and values in ES2015
const createInstructorNew = (firstName, lastName) => {
	return {firstName, lastName};
}

//Computed Property Names
var favoriteNumber = 42;

var instructor = {
  	firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//Computed Property Names in ES2015
let favoriteNumberNew = 42;

const instructorNew = {
	firstName: "Colt",
	[favoriteNumberNew]: "That is my favorite!"
}

//Object Methods
var instructorr = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi!";
	},
	sayBye: function(){
		return this.firstName + " says bye!";
	}
}

//Object Methods in ES2015
const instructorrNew = {
	firstName: "Colt",
	sayHi() {
		return "Hi!"
	},
	sayBye() {
		return this.firstName + " says Bye!"
	}
}

//createAnimal function
const createAnimal = (species, verb, noise) => {
	return {
		species,
		[verb]() {return noise}
	}
}