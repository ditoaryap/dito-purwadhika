// Object
// Object Literal
let sepatu = {
    merek: "adidas",
    tipe: "air jordan",
    ukuran: 42,
    fungsi: function() {
        return 'digunakan untuk berjalan'
    }
}

// Object constructor
let car = new Object()
car.brand = 'BMW'
car.price = 8000000
console.log(car)

let listSepatu = [{
        merek: "adidas",
        tipe: "air jordan",
        ukuran: 42
    },
    {
        merek: "adidas",
        tipe: "air jordan",
        ukuran: 39
    }
]

console.log(sepatu.merek)

// Add property to object
sepatu.milik = "milik saya"
console.log(sepatu)

// delete property in object
delete sepatu.milik

console.log(sepatu)
console.log(sepatu.fungsi())
console.log(listSepatu)

// accessing property in object
console.log(sepatu.merek)
console.log(sepatu['merek'])

// getter & setter method
const user = {
    firstName: "budi",
    lastName: "widodo",
    age: 21,

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        const split = value.split(" ")
        this.firstName = split[0]
        this.lastName = split[1]
    }
}
console.log(user.fullName)
user.fullName = "Joko Widodo"
console.log(user.fullName)

// destructuring
// const { name, age, education } = person;
// console.log(person.name)
// console.log(name)

// spread operator
const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 3,
    d: 4
}

const arr = {...obj1, ...obj2 }
console.log(arr)
console.log(arr.d)