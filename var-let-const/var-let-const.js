// ****** var keyword *******

// 1. We CAN access a var variable before initialization, as long as the var variable IS EVENTUALLY INITIALIZED

// console.log(user);

// 2. We CAN declare and redeclare the same var variable without errors
// var user = 'Mary'
// var user = 'John'
// var user = 'Abdul'

// console.log(user)

// var user;

// ***** let keyword *******

// 1. We CANNOT access a let variable before we declare it
// console.log(user); // Error!
// let user;

// 2. We CAN declare an unassigned variable with let
// let user;
// console.log(user)

// 3. We CANNOT redeclare a let variable
// let user = "Hannah";

// But we CAN re-assign it
// user = "Sarah";
// console.log(user);

// ***** const keyword *******

// 1. The const variable MUST BE INITIALIZED
// console.log(user); // Error!
// const user;

// 2. We CANNOT access the const variable before initialization
// console.log(user)
// const user = 'Andrew';

// 3. We CANNOT redeclare a const variable
// user = 'Yusuf';

function meal(animal) {
	animal.food = animal.food + 10;
}

var dog = {
	food: 10,
};
meal(dog);
meal(dog);
meal(dog);

console.log(dog.food);

