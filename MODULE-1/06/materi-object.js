
class Player {
    constructor(name, age, nationality, team){
        this.name = name
        this.age = age
        this.nationality = nationality
        this.team = team
    }

    intro(){
        console.log(`hello, my name is ${this.name}`)
    }
}

let dito = new Player('dito', 23, 'indo', 'ga tau')

console.log(dito)

dito.intro()