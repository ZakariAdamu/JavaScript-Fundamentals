// Task 1: Loop over an array of dairy products

var dairy = ['cheese', 'sour cream', 'milk', 'yoghurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (var item of dairy) {
        console.log(item)
    }
}

logDairy();


// Task 2: use for-of loop, loop over the bird properties

const animal = {
    canJump: true
}

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (var key of Object.keys(bird)) {
        console.log(key,':',bird[key])
    }
}

// birdCan();

// Task 3: use for-in loop, loop over the bird's and its prototype's properties

function animalCan() {
    for (var key in bird) {
        console.log(key,':',bird[key])
    }
}

animalCan()
