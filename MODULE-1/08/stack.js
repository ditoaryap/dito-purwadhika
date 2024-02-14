class Stack {
    #maxSize
    #container = []

    constructor(maxSize = 10) {
        this.#maxSize = maxSize
    }

    #isFull() {
        console.log(this.#container.length >= this.maxSize)
        return this.#container.length >= this.#maxSize
    }


    #isEmpty() {
        return this.#container === 0
    }

    push(element) {
        if(this.#isFull()) return console.log("Container penuh") 
        this.#container.push(element)
    }

    pop(){
        if(this.#isEmpty()){
            return console.log("sudah tidak ada data didalam container yang bisa diremove")
        }
        this.#container.pop()
    }

    getElement(){
        return this.#container
    }
}

const stack = new Stack(3)

stack.push(1)
stack.push(2)
stack.push(1)
stack.push(1)
console.log(stack.getElement())

stack.pop()
console.log(stack.getElement())