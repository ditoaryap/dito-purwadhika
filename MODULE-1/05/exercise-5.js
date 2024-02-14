// exercise 5

// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function toGet(arr) {
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    let leng = arr.length // 7
    let num = 0

    for (let i = 0; i < leng; i++) {
        num += arr[i]
    }
    let avarage = num / leng

    result = { lowest, highest, avarage }
    console.log(lowest)
    console.log(highest)
    console.log(avarage)
    return result
}

console.log(toGet([12, 5, 23, 18, 4, 45, 32]))

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date” 

function words(arr) {
    console.log(arr[arr.length - 2])
    arr[arr.length - 1] = ' and ' + arr[arr.length - 1]
    return arr.join(',')
}

console.log(words(["apple", "banana", "cherry", "date"]))

// 3. Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

function split(str) {
    return str.split(' ')
}
console.log(split("Hello World"))

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function calc(arr1, arr2) {
    result = []
    for (let i = 0; i <= arr1.length - 1; i++) {
        result.push(arr1[i] + arr2[i])
    }
    return result
}

console.log(calc([1, 2, 3], [3, 2, 1]))



// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

// answer 1
function adds(arr, newElement) {
    let check = false
    for (let i = 0; i <= arr.length; i++) {
        if (newElement === arr[i]) {
            check = true
            break
        }
    }
    if (!check) arr.push(newElement)
    return arr
}

console.log(adds([1, 2, 3, 4], 4))

// answer 2
function adds(arr, newElement) {
    if (!arr.includes(newElement)) {
        arr.push(newElement)
    }
    return arr
}

console.log(adds([1, 2, 3, 4], 4))

// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function remove(num) {
    result = []
    for (let i = 1; i <= num.length; i++) {
        if (num[i] % 2 === 0) {
            result.push(num[i])
        }
    }
    return result
}

console.log(remove([1, 2, 3, 4, 5, 6, 7]))

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function multiple(maxSize, ...integers) {
    result = []
    for (let i = 0; i < integers.length; i++) {
        if (result.length < maxSize) {
            result.push(integers[i])
        }
    }
    return result
}

console.log(multiple(5, 5, 10, 24, 3, 6, 7, 8, 2, 3, 4, 5))

// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function combine(arr1, arr2) {
    result = arr1.concat(arr2)
    return result
}

console.log(combine([1, 2, 3], [4, 5, 6]))

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
// belum

function dupe(arr) {
    const result = []
    if (!arr.filter((a, b) => arr.indexOf(a) != b)) {
        result.push(arr.indexOf())
    }
    return result
}

console.log(dupe([1, 2, 2, 2, 3, 3, 4, 5, 5]))

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function diff(arr1, arr2) {
    result = []
    arr1.forEach(a => {
        if (!arr2.includes(a)) {
            result.push(a);
        }
    });
    arr2.map(a => {
        if (!arr1.includes(a)) {
            result.push(a)
        }
    })
    return result
}

console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))


// 1. Based on the array below write a function that will return primitive data types only. let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

function data(prim) {
    result = []
    for (let i = 0; i < prim.length; i++) {
        if (typeof prim[i] !== 'object' && typeof prim[i] !== 'function') {
            result.push(prim[i])
        }
    }
    return result
}

console.log(data([1, [], undefined, {}, "string", {},
    []
]))

// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function second(arr) {
    let smallest = arr.indexOf(Math.min(...arr))
    let result = arr.filter(num => num !== arr[smallest])
    let secSmallest = arr.indexOf(Math.min(...arr))
    return secSmallest
}

console.log(second([5, 3, 1, 7, 2, 6]))


// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sumNum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i])) result++
    }
    return result
}

console.log(sumNum(["3", 1, "string", null, false, undefined, 2, 4]))

// 4. Write a function from the below array of number that will return sum of duplicate values. 
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]; a. The function will return 40

function duplicate(arr) {
    result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 10) {
            result += arr[i]
        }
    }
    return result
}

console.log(duplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]))

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function game(pick) {
    let result = ''
    const words = ['rock', 'paper', 'scissor']
    const randomNum = Math.floor(Math.random() * words.length)
    const randomPick = words[randomNum]
    if (pick === randomPick) {
        result = 'Draw'
    } else if (
        (pick === 'rock' && randomPick === 'scissor') ||
        (pick === 'scissor' && randomPick === 'paper') ||
        (pick === 'paper' && randomPick === 'rock')) {
        result = 'Win'
    } else {
        result = 'Lose'
    }
    console.log(randomPick)
    return result
}

console.log(game('scissor'))