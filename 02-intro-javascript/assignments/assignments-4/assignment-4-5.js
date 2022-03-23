/* 
    Create a program that contains the following:
    1. Array of numbers - 10, 20, 50, -10, 30, -5, -1, 0

    The program needs to go over the entire array and check how many negative numbers 
    are inside the array.

    After the loop is over, print out to the console how many negative numbers are
    inside the array.

    Write the program with the for loop.
*/

const arr = [10, 20, 50, -10, 30, -5, -1, 0]; // length = 8

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}

console.log(count);
