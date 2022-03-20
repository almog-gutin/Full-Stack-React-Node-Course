/* 
    Create a function that recieves 2 parameters:
    1. num1 - represents a number
    2. num2 - represents a number

    The funcion will preform the pitagoras calculation (a^2 + b^2 = c^2) and will
    return back the calculation of both num1 and num2.

    Call the function and send 2 arguments - 2, 3 and print out the calcultaion that
    you recieved from the function.

    Write the function any way you choose.
*/

// Option 1:
function pitagorasDecloration(num1, num2) {
    const calculation = num1 ** 2 + num2 ** 2;

    return calculation;
}

// Option 2:
const pitagorasExpression = function (num1, num2) {
    return num1 ** 2 + num2 ** 2;
};

// Option 3:
const pitagorasArrow = (num1, num2) => num1 ** 2 + num2 ** 2;

const number1 = 2;
const number2 = 3;

console.log(pitagorasDecloration(number1, number2));
console.log(pitagorasExpression(number1, number2));
console.log(pitagorasArrow(number1, number2));
