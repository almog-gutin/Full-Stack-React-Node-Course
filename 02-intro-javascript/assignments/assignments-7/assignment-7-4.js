/* 
    Create a function the recieves 2 parameters that represet numbers.

    If the numbers are not equal to eachother then the function will return the sum of the numbers.
    However, if the condition was not met then the function will return the sum of the numebrs times 3.
*/

const sumNumbers = (num1, num2) => {
    const sum = num1 + num2;

    if (num1 === num2) {
        return sum;
    }

    return sum * 3;
};

console.log(sumNumbers(3, 3));
console.log(sumNumbers(4, 5));
