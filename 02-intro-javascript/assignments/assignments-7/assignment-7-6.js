/* 
    Create a function that has 1 parameter that represents a number.

    The function will return true or false if the number can be divded by 3 or 7.
*/

const doesNumDivideBy3And7 = (num) => num % 3 === 0 || num % 7 === 0;

console.log(doesNumDivideBy3And7(21));
console.log(doesNumDivideBy3And7(4));
