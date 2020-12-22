// Сделайте в стиле es5, а затем в стиле es6(по аналогии из урока), конструктор
// Product, который принимает параметры name и price, сохраните их как свойства
// объекта.Также объекты типа Product должны иметь метод make25PercentDiscount,
//     который будет уменьшать цену в объекте на 25 % .Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции - конструктора, и также не
// нужно создавать отдельный объект - прототип(как объект transport в уроке).
'use strict';

// ES5
function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}
ProductEs5.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
};


class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }

    get objPrice() {
        return this.price;
    }
}

let obj01 = new ProductEs5("obj01", 100);
console.log(`obj01.price = ${obj01.price}`);
obj01.make25PercentDiscount();
console.log(`obj01.price = ${obj01.price}`);

let obj02 = new ProductEs6("obj02", 1000);
console.log(`obj02.price = ${obj02.objPrice}`);
obj02.make25PercentDiscount();
console.log(`obj02.price = ${obj02.objPrice}`);