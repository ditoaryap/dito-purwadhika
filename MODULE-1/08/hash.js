// Map

const myMap = new Map()

// set

myMap.set("david", "001")
myMap.set("buchanan", "002")
myMap.set("buchanan", "009")

// get

console.log(myMap.get("david"))

for (let[key, value] of myMap){
    console.log( `${key} : ${value}`)
}

// delete

myMap.delete("david")
console.log(myMap)

//
let hashing = new Map()

function hashMap(key, value){
    let sum = 0

    for(let i = 0; i < key.length; i++){
        sum += key.charCodeAt(i)
    }

    let hash = sum % 45

    if(hashing.get(hash) === undefined){
        return hashing.set(hash, {key, value})
    } else {
        while (hashing.get(hash) !== undefined){
            hash++
        }
    }

    return hashing.set(hash, { key, value})
}

console.log(hashMap("8"))