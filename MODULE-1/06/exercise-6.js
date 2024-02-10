// Exercise 6

// ● Create a function to calculate array of student data
// ● The object has this following properties :
//      ○ Name → String
//      ○ Email → String
//      ○ Age → Date
//      ○ Score → Number
// ● Parameters : array of student
// ● Return values :
//      ○ Object with this following properties : 
//          ■ Score
//              ● Highest 
//              ● Lowest 
//              ● Average
//          ■ Age
//              ● Highest
//              ● Lowest 
//              ● Average

function calcStdnData(student) {
    let score = student.map(student => student.Score)
    let age = student.map(student => Math.floor((new Date() - student.Age) / (365.25 * 24 * 60 * 60 * 1000)))
        // const getAge = birthDate => Math.floor((new Date() - new Date(birthDate)) / (365.25 * 24 * 60 * 60 * 1000))
        // console.log(getAge('2000-02-11')) // test
        // console.log(365.25 * 24 * 60 * 60 * 1000) // test
        // 31557600000

    let highestScore = Math.max(...score)
    let lowestScore = Math.min(...score)
    let avgScore = Math.floor(score.reduce((a, b) => a + b) / score.length)

    let highestAge = Math.max(...age)
    let lowestAge = Math.min(...age)
    let avgAge = Math.floor(age.reduce((a, b) => a + b) / age.length)

    return {
        Score: { highestScore, lowestScore, avgScore },
        Age: { highestAge, lowestAge, avgAge }
    }
}

let student = [
    { Name: 'Arya', Email: 'arya@email.com', Age: new Date('2000-12-11'), Score: 85 },
    { Name: 'Putra', Email: 'putra@email.com', Age: new Date('1998-05-16'), Score: 80 },
    { Name: 'Rama', Email: 'rama@email.com', Age: new Date('1999-02-21'), Score: 90 }
]

console.log(calcStdnData(student))


// ● Create a program to create transaction
// ● Product Class
//      ○ Properties 
//          ■ Name
//          ■ Price
// ● Transaction Class
//      ○ Properties 
//          ■ Total
//          ■ Product
// ● All product data
// ● Qty
//      ○ Add to cart method → Add product to transaction
//      ○ Show total method → Show total current transaction
//      ○ Checkout method → Finalize transaction, return transaction data

function shop() {
    class product {
        properties(name, price) {
            this.name = name
            this.price = price
        }
    }
    class transaction {
        properties(total, product) {
            this.total = total
            this.product = product
        }
    }
}

shop()