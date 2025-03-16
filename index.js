// 1 - masala
var Student = /** @class */ (function () {
    function Student(ism, yosh, baho) {
        this.name = ism;
        this.age = yosh;
        this.grade = baho;
    }
    Student.prototype.getInfo = function () {
        return "Ism ".concat(this.name, ", Yoshi: ").concat(this.age, ", bahosi: ").concat(this.grade);
    };
    return Student;
}());
var student = new Student("Javohir", 18, 5);
console.log(student.getInfo());
// 2 - masala
var BankAccount = /** @class */ (function () {
    function BankAccount(egasi, summa) {
        this.balance = 0;
        this.owner = egasi;
        this.balance = summa;
    }
    BankAccount.prototype.deposit = function (qiymat) {
        if (qiymat > 0) {
            this.balance += qiymat;
            console.log("Yangi balansingiz: ".concat(this.balance));
        }
        else {
            console.log('hech narsa topilmadi');
        }
    };
    BankAccount.prototype.pay = function (qiymat) {
        if (qiymat > 0 && qiymat <= this.balance) {
            this.balance -= qiymat;
            console.log("Pul yechib olindi bu yangi balansingiz: ".concat(this.balance));
        }
        else {
            console.log('Yetarli mablag mavjud emas');
        }
    };
    return BankAccount;
}());
var Account = new BankAccount("Javohir", 100000);
console.log(Account.deposit(5000));
console.log(Account.pay(10000));
// 3 - masala
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var circle = new Circle(10);
console.log(circle.getArea());
// 4 - masala 
var Product = /** @class */ (function () {
    function Product(ism, narx) {
        this.name = ism;
        this.price = narx;
    }
    Product.prototype.applyDiscount = function (chegirma) {
        if (chegirma <= 0) {
            return 'chegirma mavjud emas!';
        }
        return (this.price * chegirma) / 100;
    };
    return Product;
}());
var product = new Product("Olma", 10000);
console.log(product.applyDiscount(10));
// 5 - masala 
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return "".concat(this.brand, " ").concat(this.model, " - ").concat(this.year);
    };
    return Car;
}());
var car = new Car("Toyota", 'Coralla', 2022);
console.log(car.getCarInfo());
