// Show how an error prevents further code execution

// console.log(a + b);

// the above line is never reached because a is not defined

// console.log("This line is never reached");

// Alternatively we can intentionally throw an error to test something

// throw new ReferenceError()

// Using the try-catch block to catch the error so that our program is not interrupted by the error

// try {
// 	console.log(a + b);
// } catch (err) {
// 	console.log(err);
// 	console.log('There was an error');
// 	console.log('The error was saved in the error log');
// }

// console.log('My program does not stop')



// let's manually throw and catch an error

// try {
//     throw new TypeError();
// } catch (err) {
//     console.log(err)
//     console.log('There was a type error')
// }
// console.log('My program does not stop')


// try {
//     throw new SyntaxError();
// } catch (err) {
//     console.log(err)
//     console.log('There was a Syntax error')
// }
// console.log('My program does not stop');


// Exercise: Error prevention

var addTwoNums = function (a, b) {

    try {
        
        if (typeof(a) !== 'number') {
            throw new ReferenceError(console.log('the first argument is not a number'))
        } else if (typeof(b) !== 'number') {
            throw new ReferenceError(console.log('the second argument is not a number'))
        } else {
            console.log(a + b)
        }

        
    } catch (err) {
        
        console.log('Error!', err)
    }
    
};

addTwoNums(5, '5');

console.log('It still works...')