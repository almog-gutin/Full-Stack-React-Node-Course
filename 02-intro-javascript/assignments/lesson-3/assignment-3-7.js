/* 
    Create a program that contains 1 variable:
    1. arr - represents an array of numbers

    Create a function named "doesMinus1Exists" that recieves an array of numebrs as
    a parameter. 

    The function needs to return true or false if the number -1 exists inside the array.
*/

const doesMinus1Exists = (numArr) => {
    return numArr.includes(-1);
};

const arr = [0, 2, 3, 10, 54, -2, -10, -1, 60];

console.log(doesMinus1Exists(arr));
