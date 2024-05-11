// functional programming

// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;

// function convertCurrency(amount, rate) {
//     return amount * rate
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate);

// console.log(currencyTwo)


// return values from functions, even nest function calls

// function doubleIt(val) {
//     return val * 2
// }

// function squareIt(val) {
//     return val ** 2
// }

// var result = squareIt(doubleIt(5));

// console.log(result)

// Function calling and recursion

// function exampleCode() {
//     console.log('line one')
//     console.log('line two')
//     console.log('line three')
// }

// exampleCode();


// var counter = 3;
// function exampleCode() {
// 	console.log(counter);
//     counter = counter - 1;
//     if (counter === 0) return;
//     exampleCode();
// }

// exampleCode();


// function passed as an argument
function addTwoNums(a, b) {
	console.log(a + b);
}

function randomNum() {
	return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
	return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
	getNumber = randomNum;
} else {
	getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());