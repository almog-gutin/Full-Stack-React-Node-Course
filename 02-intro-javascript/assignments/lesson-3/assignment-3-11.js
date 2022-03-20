/* 
    Create a function the recives 2 numbers as parameters and returns a message 
    if the first number can be divided without remainder.

    Print out to the console the meesage that was returned from the function.

    Guess: Modolu operator
*/

const doNumbersDivide = (num1, num2) => {
    return num2 % num1 === 0 ? 'The numbers divide by eachother.' : 'The numbers do not divide by eachother';
};

console.log(doNumbersDivide(5, 10));
