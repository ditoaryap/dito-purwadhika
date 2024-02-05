// let date1 = new Date()
// console.log(date1)

// let date2 = new Date(date1 * 24 * 3600 * 1000)
// console.log(date2)

let dateNow = new Date()
console.log(dateNow)
const dateNowFormat = dateNow.toLocaleString("in-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
})
console.log(dateNowFormat)



let customDate = new Date("2024-01-01")
console.log(customDate)

let add0Day = new Date(0)
console.log(add0Day)

let add1Day = new Date(24 * 3600 * 1000)
console.log(add1Day)

let add1DayFromNow = new Date(dateNow.getTime() + 24 * 3600 * 1000)
console.log(add1DayFromNow)

let newDate = "2023-02-01"
let newDate1 = new Date("2023-02-01")
console.log(typeof newDate)
console.log(typeof newDate1)

console.log(newDate1.getFullYear())
console.log(newDate1.getDate())
    // dalam javascript jika ingin mendapatkan bulan yang diinginkan
    // harus ditambah 1 karena bulan dalam javascript dimulai dari 0
console.log(newDate1.getMonth() + 1)


const nums = 1 + (1 * 1) / 1
console.log(nums)

let kalimat = "Hello"
let kalimat2 = "World!"
    // const newkalimat = kalimat + " " + kalimat2
const newKalimat = `${ kalimat } ${ kalimat2 }`
console.log(newKalimat)
console.log(1 + 1 + "1")

let y = 5
    // prefix form
    // console.log(++y)

// postfix
console.log(++y)
console.log(y)
console.log(y++)



let num1 = 2
let num2 = 4

console.log(num1 === 2)