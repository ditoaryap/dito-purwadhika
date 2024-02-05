// Array untuk digunakan dalam loop
let numbers = [1, 2, 3, 4, 5];

// For Loop Biasa
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // 1, 2, 3, 4, 5
}

// For Loop Mundur
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]); // 5, 4, 3, 2, 1
}

// For...of Loop
for (let number of numbers) {
    console.log(number); // 1, 2, 3, 4, 5
}

// For...in Loop
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(object[key]); // 1, 2, 3
    }
}

// While Loop
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]); // 1, 2, 3, 4, 5
    i++;
}

// Do...While Loop
let j = 0;
do {
    console.log(numbers[j]); // 1, 2, 3, 4, 5
    j++;
} while (j < numbers.length);