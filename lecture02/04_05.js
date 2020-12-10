'use strict';
/**
 * Summ two operands
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns {number} returns result of a+b
 */
function mySum(a, b) {
    return a + b
}

/**
 * Subtraction of two operands
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns {number} returns result of a-b
 */
function mySub(a, b) {
    return a - b
}

/**
 * Multiplies two operands
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns {number} returns result of a*b
 */
let myMul = function(a, b) {
    return a * b;
}

/**
 * Division of two operands
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns {number} returns result of a/b
 */
let myDivision = (a, b) => a / b;

console.log(`2+3=${mySum(2, 3)}`);
console.log(`3-4=${mySub(3, 4)}`);
console.log(`2*3=${myMul(2, 3)}`);
console.log(`10/2=${myDivision(10, 2)}`);

// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

function myMathOperation(a, b, operation) {
    a = +a;
    b = +b;

    if (typeof(a) === 'number' && typeof(b) === 'number' && !isNaN(a) && !isNaN(b)) {
        switch (operation) {
            case "+":
                alert(`${a}+${b}=${mySum(a, b)}`);
                break;
            case "-":
                alert(`${a}-${b}=${mySub(a, b)}`);
                break;
            case "*":
                alert(`${a}*${b}=${myMul(a, b)}`);
                break;
            case "/":
                alert(`${a}/${b}=${myDivision(a, b)}`);
                break
            default:
                alert("No such operation");
        }
    } else {
        alert("operands should be numbers");
    }
}

myMathOperation(prompt("Enter first operand"), prompt("Enter second operand"),
    prompt("Enter operation"),
)