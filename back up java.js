// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Lili";
  // END- Assigned variable firstName with my first name


// 2 - Create a second variable called `lastName` and assign it the value of your last name

let lastName = "Bourgeois";
  // END- Assigned variable lastName with my last name

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)

let fullName= firstName + " " + lastName;
  // END- Variable fullName will be variables firstName and lastName concatenated, to add space add "" space string

// 4 - Console log the value of `fullName`
console.log(fullName);
  //END- logged my full name

// 5 - Create a variable called `age` and assign it the value of your age
let age = 28;
  //END- variable age set to my age

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I am (age) years old.'.
// Refer back to the videos if you need help with this one.

console.log( 'My name is ' + fullName + ", and I am " + age + " years old.");
  //END- Sentence structured with concatenation-- includes variables fullName and age

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

let adventurous = true;
  //END- variable adventurous set to being adventurous

// 8 - Create a variable named `food`, and set its value to a string of your favorite food

let food = "macaroni and cheese";
  //END- variable food set to my favorite food

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

let pets = 1;
  //END- variable pets set to number of pets I have

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

let friendsPets = 2;
  //END- variable friendsPets set to number of pets Sam has

// 11 - Add two pets to your `pets` variable

pets += 2;
  //END- added two pets to my number of pets

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

const allowedPets = 2;


// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"

if (adventurous) {
  console.log('Adventures are great!');
}
else {
  console.log('How about we stay home?');
}
  //END- conditional for adventurous based on boolean answer

// STRETCH GOALS:
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true,
// console log "Hurray!"

if (age > 18 && adventurous);{
  console.log('Hurray!');
}

  //END- compound that will run as age is greater than 18 and adventurous is true

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (pets < allowedPets) {
  console.log('I can have more pets!');
}
else if (pets == allowedPets) {
  console.log('I have enough pets.')
}
else if (pets > allowedPets) {
  console.log('Oh no, I have too many pets!');
}
  //END- runs a conditional if/else if/else if

// 16 - Write a conditional that assigns the value of the `pets` variable
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.

let mostPets = 0;
if (pets > friendsPets) {
  mostPets = pets;
}
else if (pets < friendsPets) {
  mostPets = friendsPets;
}
console.log(mostPets);


    //END- because step 11 added 2 pets to my 1 pet, I have 3 pets and Sam has 2 pets-- variable mostPets will then be 3
