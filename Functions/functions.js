// function that takes an array a input and display all items of the array

// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }
// }

// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (i == 3) {
//             console.log(i*20,"fruit")
//         } else {
            
//             console.log(i*2,arr[i])
//         }
//     }
// }

// var colors = ['white', 'blue', 'pink', 'orange', 'maron'];
// listArrayItems(colors)

/* Exercise_1 on functions */

/* code a function which will be able to take a word and locate the position of a chosen letter in that given word.*/

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++){
        if (word[i] == match) {
            console.log('Found the',match, 'at',i)
        } else {
            console.log('---No match found at',i)
        }
    }
}

// letterFinder('test','t');
letterFinder('people','e');

