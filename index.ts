// 1 - masala
class Student {
    name: string
    age: number
    grade: number
    
    constructor(ism: string, yosh: number, baho: number) {
        this.name = ism
        this.age = yosh
        this.grade = baho
    }

    getInfo() {
        return `Ism ${this.name}, Yoshi: ${this.age}, bahosi: ${this.grade}`
    }
}

const student = new Student ("Javohir", 18, 5)

console.log(student.getInfo());


// 2 - masala
class BankAccount {
    owner: string
    private balance: number = 0

    constructor (egasi: string, summa: number) {
        this.owner = egasi
        this.balance = summa
    }

    deposit(qiymat: number) {
        if (qiymat > 0) {
            this.balance += qiymat
            console.log(`Yangi balansingiz: ${this.balance}`);
        } else {
            console.log('hech narsa topilmadi');
        }
    }

    pay(qiymat: number) {
        if (qiymat > 0 && qiymat <= this.balance) {
            this.balance -= qiymat
            console.log(`Pul yechib olindi bu yangi balansingiz: ${this.balance}`);
        } else {
            console.log('Yetarli mablag mavjud emas');
        }
    }
}


const Account = new BankAccount("Javohir", 100_000)
console.log(Account.deposit(5_000));
console.log(Account.pay(10_000));


// 3 - masala
class Circle {
    radius: number
    
    constructor(radius: number) {
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}

const circle = new Circle(10)
console.log(circle.getArea());


// 4 - masala 
class Product {
    name: string
    price: number

    constructor(ism: string, narx: number) {
        this.name = ism
        this.price = narx
    }

    applyDiscount(chegirma: number) {
        if (chegirma <= 0) {
            return 'chegirma mavjud emas!'
        }
        return (this.price * chegirma) / 100
    }
}

const product = new Product("Olma", 10000)
console.log(product.applyDiscount(10));


// 5 - masala 
class Car {
    brand: string
    model: string
    year: number

    constructor (brand: string, model: string, year: number) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    getCarInfo () {
        return `${this.brand} ${this.model} - ${this.year}`
    }
}

const car = new Car("Toyota", 'Coralla', 2022)
console.log(car.getCarInfo());
