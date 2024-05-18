// Example 2: Calculate the total checkout cost of an item

// Revise functional programming before moving to OOP
// var shoes = 100;
// var stateTax = 1.2;

// function totalPrice(shoes, tax) {
// 	return shoes * tax;
// }

// var toPay = totalPrice(shoes, stateTax);

// console.log(toPay);

// OOP: the 'this' keyword allows us to reuse code across many objects or Classes if the code or methods are the same

// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function () {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price:', calculation)
//     }
// }
// purchase1.totalPrice();

// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function () {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price:', calculation)
//     }
// }
// purchase2.totalPrice();


// using Prototype to create instances(children objects) of the bird object

// var bird = {
// 	hasWings: true,
// 	canFly: true,
// 	hasFeathers: true,
// };

// var eagle1 = Object.create(bird);
// console.log("eagle1:", eagle1);

// console.log("eagle1 has wings:", eagle1.hasWings);
// console.log("eagle1 can fly:", eagle1.canFly);
// console.log("eagle1 has feathers:", eagle1.hasFeathers);

// var eagle2 = Object.create(bird);
// console.log("eagle2 has wings:", eagle2.hasWings);

// var penguin1 = Object.create(bird);
// penguin1.canFly = false;
// console.log("penguin1: ", penguin1);



// create your classes here
// Task 1: Code a Person class
// class Person {
// 	constructor(name = 'Tom', age = 20, energy = 100) {
// 		this.name = name;
// 		this.age = age;
// 		this.energy = energy;
// 	}

// 	sleep() {
// 		this.energy += 10;
// 	}

// 	doSomethingFun() {
// 		this.energy -= 10;
// 	}
// }
// // Task 2: Code a Worker class
// class Worker extends Person {
// 	constructor(name, age, energy, xp = 0, hourlyWage = 10) {
// 		// xp (for "experience points")
// 		super(name, age, energy);
// 		this.xp = xp;
// 		this.hourlyWage = hourlyWage;
// 	}

// 	goToWork() {
// 		return this.xp += 15;
// 	}
// }
// // Task 3: Code an intern object, run methods
// function intern() {
//     let internObject = new Worker("Bob", 21, 110, 0, 10);
//     internObject.goToWork();
//     return internObject;
    
// }

// // Task 4: Code a manager object, methods
// function manager() {
// 	let managerObject = new Worker("Alice", 30, 125, 100, 30);
//     managerObject.doSomethingFun();
//     return managerObject;
// }

// console.log(intern());
// console.log(manager());





var clothingItem = {
	price: 50,
	color: "beige",
	material: "cotton",
	season: "autumn",
};

for (const key of Object.keys(clothingItem)) {
	console.log(key, ":", clothingItem[key]);
}

