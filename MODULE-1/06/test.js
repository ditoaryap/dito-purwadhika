// 2. Create a program to create transaction

class Product {
    name
    price

    setProduct(name, price) {
        this.name = name
        this.price = price
    }
}

class Transaction extends Product {
    total
    qty

    constructor() {
        super()
    }

    addToCart(name, price, qty) {
        this.setProduct(name, price)
        this.qty = qty
        this.total = this.price * this.qty
    }

    showTotal() {
        return this.total
    }

    checkout() {
        return {
            name: this.name,
            price: this.price,
            qty: this.qty,
            total: this.total
        }
    }
}

const transaction = new Transaction()

transaction.addToCart('Adidas', 10000, 2)
console.log(transaction.showTotal())
console.log(transaction.checkout())