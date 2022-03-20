/* 
    Create a function that has 2 parameters, both represent numbers.
    The function will return the sum of both numbers.

    After calling the function print out the returned value.
*/

function add(num1, num2) {
    // const sum = num1 + num2;
    // return sum;

    return num1 + num2;
}

const number1 = 5;
const number2 = 10;

// const sum = number1 + number2;
// console.log(sum);

console.log(add(number1, number2));
console.log(add(5, 10));

const sum = add(number1, number2);
console.log(sum);
