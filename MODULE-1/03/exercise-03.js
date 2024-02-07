// EXERCISE 3

// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9x 1
// 9x 2 
// ...
// 9 x 10

let num = 9
for (let i = 1; i <= 10; i++) {
    let result = num * i
    console.log(result)
    console.log(`${num} x ${i} = ${result}`)
}

// Write a code to check whether a string is a palindrome or not. 
// Example : ‘madam’ → palindrome

// cara ke 1
let text = "madam"
result = text.split('').reverse().join('')
let hasil = result == text ? 'palindrome' : 'not palindrome'
console.log(hasil)

// cara ke 2
j = text.length - 1
console.log(j)
let check
for (let i = 0; i <= j; i++) {
    console.log(text[j - i])
    console.log(text[i])
    if (text[i] == text[j - i]) {
        check = "palindrome"
    } else {
        check = "not palindrome"
    }
}
console.log(check)

// Write a code to convert centimeter to kilometer. 
// Example : 100000 → “1 km”

let cm = 50
let km = cm / 100000

console.log(`${km} km`)

// Write a code to format number as currency (IDR) 
// Example : 1000 → “Rp. 1.000,00”
// 1.000

let int = 1000
let digit = 0

while (digit === int) {
    console.log(int)
    int++
}

let angka = 1000;
let angkaFormatIDR = "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
console.log(angkaFormatIDR); // Output: Rp 1.000


// Write a code to remove the first occurrence of a given “search string” from a string 
// Example : string = “Hello world”, search string = “ell” → “Ho world”

string = "Hello world"
let searchString = "llo"
result = string.replace((searchString), "") // cara 1
let result1 = string.split(searchString).join('') //  cara 2

console.log(result)
console.log(result1)

// Write a code to capitalize the first letter of each word in a string 
// Example : “hello world” → “Hello World”

string = "hello world"
let caps = string.split(' ')

for (let i = 0; i < caps.length; i++) {
    caps[i] = caps[i].charAt(0).toUpperCase() + caps[i].slice(1)
}

console.log(caps.join(' '))

// Write a code to reverse a string. 
// Example : “hello” → “olleh”

let str = "hello"

console.log(str.split('').reverse().join(''))

// Write a code to swap the case of each character from string 
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
string = 'The QuiCk BrOwN Fox'
let tampung = []

for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i).toUpperCase()) {
        tampung.push(string.charAt(i).toLowerCase())
        console.log(tampung)
    } else {
        tampung.push(string.charAt(i).toUpperCase())
        console.log(tampung)
    }
}
console.log(tampung.join(''))

// Write a code to find the largest of two given integers 
// Example : num1 = 42, num2 = 27 → 42

let num1 = 42
let num2 = 27
let largeInt

if (num1 < num2) {
    largeInt = num2
} else {
    largeInt = num1
}

console.log("the largest of two integer ")

// Write a conditional statement to sort three numbers 
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

num1 = 42
num2 = 27
let num3 = 18

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log(num1, num2, num3)
    } else if (num3 <= num2) {
        console.log(num1, num3, num2)
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log(num2, num1, num3)
    } else if (num3 <= num1) {
        console.log(num2, num3, num1)
    }
} else if (num3 <= num1 && num3 <= num1) {
    if (num2 <= num1) {
        console.log(num3, num2, num1)
    } else if (num1 <= num2) {
        console.log(num3, num1, num2)
    }
}


// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1

let input = 'hello'

if (typeof(input) === 'string') {
    console.log('1')
} else if (typeof(input) === 'number') {
    console.log('2')
} else {
    console.log('3')
}

// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

input = 'An apple a day keeps the doctor away'

console.log(input.replace(/a/ig, '*'))