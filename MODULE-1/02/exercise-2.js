// Exercise 2

// Write a code to convert celsius to fahrenheit 
// Example: 60 Celcius → 140 Fahrenheit

function convert(cel) {
    return fah = 9 / 5 * cel + 32
}

console.log(convert(60));

// Write a code to check whether the number is odd or even 
// Example: 25 → odd number, 2 → even number

function check(number) {
    if (number % 2 === 0) {
        return "even number"
    } else {
        return "odd number"
    }
}
console.log(check(25))

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number

function checkWheter(num) {
    if (num === 7) {
        return `${num} is a prime number`
    } else {
        return `${num} is not a prime number`
    }
}

console.log(checkWheter(2))

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 7

let setNum = 5
let result = 0

for (let i = 0; i <= setNum; i++) {
    result += i
}
// console.log(result)

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

let nmbr = 4;
let result1 = 1;
for (let i = nmbr; i >= 1; i--) {
    result1 *= i
}

console.log(result1)

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610

function fibonacci(n) {
    let a = 0
    let b = 1
    for (let i = 2; i <= n; i++) {
        let result = a + b
        a = b
        b = result
    }
    return b
}

console.log(fibonacci(15))