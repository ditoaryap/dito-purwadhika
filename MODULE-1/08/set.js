const fruits =  ["banana", "apple", "orange", "apple"]
console.log(fruits)

const newFruits = new Set(fruits)
console.log(newFruits)

// add 
newFruits.add("melon")
console.log(newFruits)

// delete
newFruits.delete(3)
console.log(newFruits)

// has 
console.log(newFruits.has("apple"))

// size 
console.log((newFruits.size))

// entries
let getEntries = newFruits.entries()
console.log(getEntries.next().value)
console.log(getEntries.next().value)
console.log(getEntries.next().value)
console.log(getEntries.next().value)

// foreach

let text = ""
let get = newFruits.forEach((item) => {
    text += `${item},`
})
console.log(text)

// clear
newFruits.clear()
console.log(newFruits)