// Exercise 1

// Variable Declarations
let panjang = 5
let lebar = 3
let radius = 5

// Write a code to find area of rectangle / luas persegi panjang
// Example: length = 5, width = 3→ 15
let luas = panjang * lebar
console.log(luas) // 15

// Write a code to find perimeter of rectangle / keliling persegi panjang
// Example : length = 5, width = 3 → 16
let keliling = 2 * (lebar + panjang)
console.log(keliling) // 16

// Write a code to find diameter, circumference and area of a circle / diameter, keliling dan luas lingkaran
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539
let circumference = 2 * Math.PI * radius
let area = Math.PI * Math.pow(radius, 2)
let diameter = 2 * radius

console.log(diameter) // 10
console.log(circumference) // 31.415...
console.log(area) // 78.539...

// Write a code to find angles of triangle if two angles are given
// Example : a = 80, b = 65 → 35
let sudutSatu = 80
let sudutDua = 65
let sudutTiga = 180 - (80 + 65)

console.log(sudutTiga) // 35

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
let date1 = new Date("2022-01-20")
let date2 = new Date("2022-01-22")

let selisihHari = Math.abs(date1 - date2) / (1000 * 24 * 60 * 60) // Cara 1
let selisihHari2 = -(date1.getDate() - date2.getDate()) // Cara 2

console.log(selisihHari) // 2
console.log(selisihHari2) // 2

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day

function konversi(hari) {
    const tahun = Math.floor(hari / 365)
    let sisaHari = hari % 365
    let bulan = Math.floor(sisaHari / 30)
    let sisa = sisaHari % 30
    return `${hari} days → ${tahun} year, ${bulan} month, ${sisa} day`
}

console.log(konversi(400)) // 400 days → 1 year, 1 month, 5 days