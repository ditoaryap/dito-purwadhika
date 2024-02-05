// Array untuk digunakan dalam loop
let numbers = [1, 2, 3, 4, 5];

// For Loop Biasa
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// For Loop Mundur
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// For...of Loop
for (let number of numbers) {
    console.log(number);
}

// For...in Loop
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(object[key]);
    }
}

// While Loop
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// Do...While Loop
let j = 0;
do {
    console.log(numbers[j]);
    j++;
} while (j < numbers.length);