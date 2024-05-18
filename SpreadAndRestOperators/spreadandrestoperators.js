// 1. Spread operator to combine arrays

// const fruits = ["apple", "pear", "plum"];
// const berries = ["blueberry", "strawberry"];
// const fruitsAndBerries = [...fruits, ...berries]; // concatenate
// console.log(fruitsAndBerries); // outputs a single array

// // 2. It's also easy to join objects:

// const flying = {
// 	wings: 2,
// 	engine: true,
// 	speed: "fast",
// };
// const car = { wheels: 4 };

// const flyingCar = { ...flying, ...car };
// // console.log(flyingCar)

// // 3. Copy an object into a seperate one
// const flyingSportsCar = { ...flyingCar };
// console.log(flyingSportsCar);

// // add new properties to the newly derived car
// flyingSportsCar.fuel = true;
// flyingSportsCar["dashboard"] = "touch-screen";

// console.log(flyingSportsCar);

// 4. use the spread operator with functions
// create a function that lists these 3 places when run
// let top3 = ['The Colosseum', 'Trevi Fountain', 'The vatican City']

// function showItinerary(place1, place2, place3) {
//     console.log('Visit', place1)
//     console.log('Then visit '+ place2)
//     console.log('Finish with a visit', place3)
// }

// showItinerary(...top3)

// 1a. The Rest operator: create sub-arrays from a big array of data

// let topSevenPlaces = [
// 	"The Colosseum",
// 	"The Roman Forum",
// 	"The Haram",
// 	"The Burj Khalifa",
// 	"Qatar",
// 	"Trevi Fountain",
// 	"The Palatine Hill",
// ];

// let [first, second, third, ...secondVisit] = topSevenPlaces;

// console.log(third)
// console.log(secondVisit)

// 1b. use the rest operator to multiply parameters of a function

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}

let shoppingCart = addTaxToPrices(1.1, 10, 15, 20, 55, 72, 95)
console.log(shoppingCart)


