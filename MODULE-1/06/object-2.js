// this keyword

const person = {
    firstName: "Topias",
    lastName: "Taavitsainen",
    nickname: "Topson",
    intro: function() { console.log(`My first name is ${this.firstName}`) }
}

person.intro()