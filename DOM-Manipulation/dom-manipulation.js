// Create an html tag in the console and output to the DOM
// Step 1: Create a h2 element assigned to a avariable
const h2 = document.createElement("h2");

// Step 2: Add some text to the element
h2.innerText = "This is an h2 heading";

// Step 3: Add an id attribute
h2.setAttribute("id", "sub-heading");

// Step 4: Add a class attribute
h2.setAttribute("class", "secondary");

// Step 5: Test your entries: type h2 and press enter

// Step 6: Append your h2 element to the DOM

document.body.appendChild(h2);

// ======== JavaScript Selectors =============

// use selectors to find specific objects on the webpage

// 1. Target the first 'p' element on the webpage
document.querySelector("p");

// 2. Target all 'p' elements on the webpage
document.querySelectorAll("p");

// ======== JavaScript Event handling =============

// Step 1: Create a variable to hold your element
const target = document.querySelector("h2");

// Step 2: Create your function that handles the event
function handleClick() {
	console.log("Clicked the h2 element");
}
// Step 3: Append the function to your element
target.addEventListener("click", handleClick);

// Another method of adding events to elements is the html event atribute. code a function and insert into the html element attribute using onclick="func()"

// Exercise 1: Update a webpage via the console browser tab

// First approach, though not the best approach
// let answer = prompt("What is your name?");
// if (typeof answer === "string") {
// 	const h1 = document.createElement("h1");
// 	h1.innerText = answer;
// 	document.body.innerText = "";
// 	document.body.appendChild(h1);
// }


// Second approach. Beta, using input field instead of prompt
// const h2 = document.createElement("h2");
// h2.innerText = "Type into the input to make this text change";

// const input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h2)
// document.body.appendChild(input)

// input.addEventListener('change', function () {
//     h1.innerText = input.value;
// })

// Exercise 2: Update a webpage content via the console browser tab

// const h1 = document.querySelector('h1')

// const arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click']

// function handleClicks() {
//     switch (h1.innerText) {
//         case arr[0]:
//             h1.innerText = arr[1]
//             break;
//         case arr[1]:
//             h1.innerText = arr[2]
//             break;
//         case arr[2]:
//             h1.innerText = arr[3]
//             break;
    
//         default:
//             h1.innerText = arr[0]
//             break;
//     }
// }

// h1.addEventListener('click', handleClicks)
