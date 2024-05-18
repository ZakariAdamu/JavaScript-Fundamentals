const car = {
    engine: true,
    steering: true,
    speed: 'slow'
};
const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log('The sportsCar object: ', sportsCar);

console.log('------- for-in is unreliable in this case ------');
for (prop in sportsCar) {
    console.log(prop)
}
// for-in loop iterates over an object and its prototype(i.e its parent)
console.log('🤔', 'Iterating over object AND its prototype');

// for-of loop iterates over the objects properties only without its prototype
console.log('-------- for-of is reliable-------');
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ':' + sportsCar[prop])
}
console.log('🎯', "Iterating over object's OWN PROPERTIES only")

// Example 2: for-of loop
var clothingItem = {
	price: 50,
	color: "beige",
	material: "cotton",
	season: "autumn",
};

for (const key of Object.keys(clothingItem)) {
	console.log(key, ":", clothingItem[key]);
}


console.log(`${1 + 1 + 3} stars!`)

console.log(1+1+3, 'stars!...')

