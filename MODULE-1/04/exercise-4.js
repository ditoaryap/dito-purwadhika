// Exercise 4


// Create a function that can create a triangle pattern according to the height we provide like the following :
// 1
// 12
// 123 
// 1234 
// 12345
// ● Parameters : height → triangle height
// ● Example input: 5

function triangle(height) {
    let result = ""
    for (let i = 1; i <= height; i++) {
        let output = ""
        for (let j = 1; j <= i; j++) {
            output += j
        }
        result += output + '\n'
    }
    return result
}

console.log(triangle(5))

// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

function pattern(height) {
    let result = ''
    let counter = 1
    for (let i = 1; i <= height; i++) {
        let output = ''
        for (let j = 1; j <= i; j++) {
            output += `${counter < 10 ? '0' : ''}${counter++} `;
        }
        result += output + `\n`
    }
    return result.trim()
}

console.log(pattern(4))

// Create a function that can loop the number of times according to
// the input we provide, and will replace multiples of 3 with "Fizz", 
// multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n) {
    result = ''
    for (let i = 1; i <= n; i++) {
        let fizz = i % 3 == 0
        let buzz = i % 5 == 0
        if (fizz && buzz) {
            result += 'FizzBuzz'
        } else if (fizz) {
            result += 'Fizz'
        } else if (buzz) {
            result += 'Buzz'
        } else {
            result += i
        }
        if (i !== n) {
            result += ', '
        }
    }
    return result
}

console.log(fizzBuzz(15))

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))2
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

function calcBMI(weight, height) {
    result = weight / (Math.pow(height, 2))
    let bmi = result.toFixed(1)
    let lessWeight = bmi < 18.5
    let ideal = bmi >= 18.5 && bmi <= 24.9
    let overweight = bmi >= 25.0 && bmi <= 29.9
    let veryOverweight = bmi >= 30.0 && bmi <= 39.9
    let obesity = bmi > 39.9
    console.log(bmi)

    if (lessWeight) {
        return 'less weight'
    } else if (ideal) {
        return 'ideal'
    } else if (overweight) {
        return 'overweight'
    } else if (veryOverweight) {
        return 'very overweight'
    } else if (obesity) {
        return 'obesity'
    }
}

console.log(calcBMI(60, 1.55))

// Write a function to remove all odd numbers in an array and 
// return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNum(number) {
    result = []
    num = number.length
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            result.push(i)
        }
    }
    return result
}

console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Write a function to split a string and convert it into an array of words 
// Example : “Hello World” → [“Hello”, “World”]

const string = (convert) => {
    return convert.split(" ")
}

console.log(string("Hello World"))