let buah = "Mangoes"

switch (buah) {
    case "Oranges":
        console.log("Harga oranges adalah 5rb")
        break;
    case "Mangoes":
        console.log("Harga mangoes adalah 10rb")
        break;
    case "Papayas":
        console.log("Harga papayas adalah 2rb")
    default:
        console.log("Harga aja")
}

let age = 12
console.log(
    age > 14 ? console.log("umur lebih dari 17 dan gedner laki2") : console.log("umur lebih dari 17 dan gender perempuan")
)

let inputUser = "  ";

if (inputUser) {
    console.log("input sudah dimasukkan")
} else {
    console.log("input belum dimasukkan")
}

// // leti = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

let i = 0
let bools = true
while (bools) {
    if (i == 6) {
        bools = false
    }
    console.log(i)
    i++
}

number = 2

massage = number % 2 == 0 ? "true" : "false"

console.log(massage)