// Soal 1

function check(obj1, obj2) {
    const n1 = Object.values(obj1)
    const n2 = Object.values(obj2)
    return n1 == n2 ? true : false
}

console.log(check({ a: 1 }, { a: 1 }))

// Soal 2

function intersection(obj1, obj2) {
    result = {}
    for(let key in obj1){
        if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            result[key] = obj1[key]
        }
    }
    return result
}

console.log(intersection({ a: 1, b: 3 }, { a: 1, c: 3 }))

// Soal 3

const arr1 = [
    {name: 'Student 1', email: 'student1@mail.com'},
    {name: 'Student 2', email: 'student2@mail.com'}
]

const arr2 = [
    {name: 'Student 1', email: 'student1@mail.com'},
    {name: 'Student 3', email: 'student3@mail.com'}
]

const combineArray = function(arr1, arr2) {
    const combine = [...arr1, ...arr2]
    const uniqueSet = new Set(combine.map(JSON.stringify))
    const uniqueArr = Array.from(uniqueSet).map(JSON.parse)
    return uniqueArr
}

console.log(combineArray(arr1,arr2))

// Soal 4

const obj = [{name: "David", age: 20}];

function reverse(obj) {
    const c = {name: "David", age: 20}
    for(let a in c){
        a
    }

    const test = obj.map(item => {
        const tampung = {};
        for (let key in item) {
            tampung[item[key]] = key
        }
        return tampung;
    });
    return test;
}

console.log(reverse(obj));

// Soal 5

const n = 5

function factorial(n){
    let result = 1
    let step = ""
    
    for(let i = n; i > 0; i--){
        result *= i
        step += i
        if(i !== 1) step += ' x '
    }
    return `${n}! = ${step} = ${result}`
}

console.log(factorial(5))

// Soal 6

class Player {
    constructor(name, health = 100, power = 10){
        this.name = name
        this.health = health
        this.power = power
    }
    
    hit(power){
        this.health -= power
    }

    useItem(item){
        this.health += item.health
        this.power += item.power
    }

    showStatus(){
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem(){
        return { 
            health: Math.random() < 0.5 ? 0 : 10 ,
             power: Math.random() < 0.5 ? 0 : 10 
        }
    }

    start(){
        console.log("\nGame di Mulai")
        
        while (this.player1.health > 0 && this.player2.health > 0 ){
            console.log("\nPlayer Status Before Shooting:")
            this.player1.showStatus()
            this.player2.showStatus()

            const item1 = this.getRandomItem()
            const item2 = this.getRandomItem()

            console.log("\nRandom Item for Player 1:", item1);
            console.log("Random Item for Player 2:", item2);

            this.player1.useItem(item1)
            this.player2.useItem(item2)

            this.player1.hit(this.player2.power)
            this.player2.hit(this.player1.power)

            console.log("\nPlayer Status After Shooting:");
            this.player1.showStatus()
            this.player2.showStatus()
        }

        if(this.player1.health > this.player2.health){
            console.log("Player 1 WIN!!")
        } else {
            console.log("Player 2 WIN!!")
        }
    }
}

const player1 = new Player('Player 1')
const player2 = new Player('Player 2')
const game = new ShootingGame(player1, player2)
game.start()
