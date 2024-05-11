/* ========== For loop ========== */

// for (var i = 1; i <= 3; i++){
//     console.log(i)
// }
// console.log('Go!');

// for (var i = 10; i > 0; i--){
//     console.log(i)
// }
// console.log('Happy New Year!!!');

/* ========== While loop ========== */

// var counter = 3;

// while (counter > 0) {
//     console.log(counter)
//     counter = counter - 1;
// }
// console.log("Happy Birthday");

/* ========== Nested loops ==========*/

// for (var year = 2024; year < 2026; year++) {
//     console.log(year)
//     for (var month = 6; month < 9; month++) {
//         console.log("..........", month)
//     }
// }

// for (var i = 20; i > 9; i = i - 5) {
//     for (var j = 10; j > 4; j = j - 5){
//         console.log(i + ", " + j)
//     }
// }

// for (var i = 20; i > 9; i = i - 5) {
//     for (var j = 10; j > 4; j = j - 5){
//         console.log(i + " divide by " + j + " equals " + i / j)
//         // console.log(`${i} divide by ${j} equals ${i / j}`)
//     }
// }

/* === Exercise: How many times will Hello Zak! be printed === */
for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 3; j++) {

		console.log("Hello Zak!");
	}
}

/*var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
	var styles =
		"font-size: 40px; border-radius: 10px; 
        padding: 5px;
        border: 4px solid blue; background: pink; color: purple";
	console.log("%c" + cubes[i], styles);
}
*/

/* var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
	var styles =
		"font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
	console.log("%c" + cubes[i], styles);
}
*/

/* ========== Working with conditionals and loops ==========*/

/* ==== using if - else statement ==== */

// for (var i = 1; i < 11; i++) {
// 	if (i == 1) {
// 		console.log("Gold medal");
// 	} else if (i == 2) {
// 		console.log("Silver medal");
// 	} else if (i == 3) {
// 		console.log("Bronze medal");
// 	} else {
// 		console.log(i);
// 	}
// }

/* ==== using a switch case ==== */

for (var i = 1; i < 11; i++) {
	switch (i) {
		case 1:
			console.log("Gold medal!");
			break;
		case 2:
			console.log("Silver medal!");
			break;
		case 3:
			console.log("Bronze medal!");
			break;
		default:
			console.log(i);
	}
}
