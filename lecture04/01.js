// Написать функцию, преобразующую число в объект. Передавая на вход число в 
// диапазоне [0, 999],мы должны получить на выходе объект, в котором в 
// соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или 
// вообще не число,необходимо выдать соответствующее сообщение с помощью 
// console.log и вернуть пустой объект.
'use strict';

function myValidate(num) {
    return (num >= 0 && num <= 999 && Number.isInteger(num)) ? true : false;
}

class MyObject {
    constructor() {
        this.units = 0;
        this.tens = 0;
        this.hudreds = 0;
    }

    get result() {
        return `units: ${this.units},\ntens: ${this.tens},\nhundreds: ${this.hudreds}`;
    }

    myConvertMethod(num) {
        if (myValidate(num)) {
            this.units = num % 10;
            num = Math.floor(num / 10);
            this.tens = num % 10;
            num = Math.floor(num / 10);
            this.hudreds = num % 10;
        }
    }
}

let myobj = new MyObject();
myobj.myConvertMethod(989);
console.log(myobj.result);