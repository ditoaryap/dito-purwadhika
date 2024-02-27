// INHERITANCE

class Player {
    constructor(name, nickname, nationality){
        this.name = name
        this.nickname = nickname
        this.nationality = nationality
    }

    intro(){
        console.log(`My name is ${this.name} but you can call me ${this.name}`)
    }
}


class casualPlayer extends Player {
    constructor(name, nickname, nationality, job){
        super(name, nickname, nationality)
        this.job = job
    }

    myJob(){
        console.log(`i'm not pro player so i have a job, that is ${this.job}`)
    }
}

const dito = new casualPlayer('diot', 'dito','indo','au')

dito

class proPlayer extends Player{
    constructor(name, nickname, nationality, team){
        this.team = team
    }

    myTeam(){
        console.log(`I'm pro player so i have a team, that is ${this.team}`)
    }
}