// Task 1: Build a function-based console log message generator
// ****Run this entire code assignment in the browser console
// var message;
// var style;

// function consoleStyler(color, background, fontSize, txt) {
//     message = "%c" + txt;
//     style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(message, style)
// }

// // Task 2: Build another console log message generator

// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == 'birthday') {
//         console.log(`%cHappy birthday`, fontStyle)
//     } else if (reason == 'champions') {
//         console.log(`%cCongrats on the title`, fontStyle)
//     } else {
//         console.log(message, style)
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions

// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
// celebrateStyler('birthday')

// // Task 4: Insert a congratulatory and custom message

// function styleAndCelebrate(color, background, fontSize, txt, reason) {
// 	consoleStyler(color, background, fontSize, txt);
// 	celebrateStyler(reason);
// }

// // call styleAndCelebrate

// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')


// Example 2: Calculate the total checkout cost of an item

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax
}

var toPay = totalPrice(shoes, stateTax)

console.log(toPay)

