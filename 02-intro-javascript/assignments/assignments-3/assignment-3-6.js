/* 
    Create a proram that resembles a calculator.

    The program will include a function named calculator that has 3 parameters:
    1. num1 - represents a number
    2. num2 - represents a number
    3. operation - represents a string that will tell the function what operation to
    preform

    The function will return the calculation based on the operation you sent as 
    an argument:
    1. "+" - returns the sum of both numbers
    2. "-" - returns the subtraction of num2 from num1
    3. "/" - returns the division of num2 from num1
    4. "*" - returns the multiplication of both numbers

    Call the function with arguments and print out to the console.

    Guess: switch statement
*/

const calculator = (num1, num2, operation) => {
    let calculation;

    switch (operation) {
        case '-':
            calculation = num1 - num2;
            break;
        case '*':
            calculation = num1 * num2;
            break;
        case '/':
            calculation = num1 / num2;
            break;
        default:
            calculation = num1 + num2;
    }

    return calculation;
};

const number1 = 5;
const number2 = 5;

console.log(calculator(number1, number2, '+'));
console.log(calculator(number1, number2, '-'));
console.log(calculator(number1, number2, '*'));
console.log(calculator(number1, number2, '/'));
