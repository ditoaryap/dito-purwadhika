// literal

const captain = {
    name: "Kuroky",
    pets: ["cat", "fox", "bird"],
    active: true,
    height: 170,
    play: function(game) { console.log(`Playing ${game}`) }
}

// Access with dot

console.log(captain.name)
console.log(captain.pets)
captain.play('Dota')

// Access with bracket []

console.log(captain["name"])
console.log(captain["pets"])
captain["play"]('dota')

// changing value

captain.pets = 'dog'
captain.height = 169
captain.play = function(game) { console.log(`Lets play soome ${game}`) }
captain.play('dota')

// add new key

captain.nationality = "Germany"
captain.greet = function(time) { console.log(`good ${time}`) }

console.log(captain)
console.log(captain.nationality)
captain.greet("morning")

// Destructure

const { name, pets } = captain
console.log(name)
console.log(pets)
console.log(`My name is ${name}, and i have ${pets.length} pets`)

// New

const capitan = new Object()

console.log(capitan)

capitan.name = "Sebastien"
capitan.pets = ["owl", "dog"]
capitan.play = function(game) { console.log(`Playing ${game}`) }

console.log(capitan)