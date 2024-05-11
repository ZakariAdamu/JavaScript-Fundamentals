var fruits = ['mango', 'grape'];

// append an item to the end of the array
// fruits.push("apple");

// adds an item to the beginning of an array
// fruits.unshift('cucumber', 'carrot')

// removes an item from the end of an array
// fruits.pop()

/* fruits.splice(1) */

// console.log(fruits);


/* ==== using a function to create an array === */

// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);

//     return arr;
// }

// simpleArr = arrayBuilder("pears", "apples", "cucumber");

// console.log(simpleArr)


/* ======= Arrays are iterable ======= */

// var veggies = ['onions', 'lettuce', 'garlic']

// for (var i = 0; i < veggies.length; i++) {
//     console.log(veggies[i]);
// }

/* ======== Strings are also iterable ========= */

// var first_name = 'Abubakar';

// for (var i = 0; i < first_name.length; i++){
// console.log(first_name[i])
// }


/* ======== Exercise: Creating arrays and objects ========= */

// var clothes = [];

// clothes.push('Jalabiyya')
// clothes.push('Abayya')
// clothes.push('Hoodie')
// clothes.push('Jumpsuit')
// clothes.push('Shirt and trousers')

// console.log(clothes)

// clothes.pop();
// console.log(clothes)

// clothes.push('Joggers')

// console.log(clothes[2])

var favCar = {};

favCar.color = 'grey'
favCar.convertible = true
favCar.turnTheKey = function () {
    console.log('The engine is running')
}
favCar.lightsOn = function () {
    console.log('The lights are on')
}

console.log(typeof(favCar.lightsOn))

console.log(favCar.lightsOn())
