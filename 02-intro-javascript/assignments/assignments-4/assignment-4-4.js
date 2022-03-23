/* 
    Create a program that will contain two arrays:
    1. Array of numbers that contains the numbers - 80, 300, 247, 5600, 10000
    2. Array of numbers that is empty.

    Create a function that has a paramter that will represent a number and will return 
    a calculation of the number / 2.5

    The program needs to run through the array of numbers that contains data and call,
    the function that you created on each element of the array. If the result that was
    returned back is greater than 100 stop the loop. Otherwise, take the result and 
    push it to the second array. 

    After the loop is over print out the second array.

    You can use any type of loop that you want.

    Guess: break
*/

const calculation = (num) => num / 2.5;

const mainArr = [80, 300, 247, 5600, 1000];

// Option 1:
const emptyArr1 = [];
for (let i = 0; i < mainArr.length; i++) {
    const calc = calculation(mainArr[i]);

    if (calc > 100) {
        break;
    }

    emptyArr1.push(calc);
}

console.log(emptyArr1);

// Option 2:
const emptyArr2 = [];

let i = 0;
while (i < mainArr.length) {
    const calc = calculation(mainArr[i]);

    if (calc > 100) {
        break;
    }

    emptyArr2.push(calc);
    i++;
}

console.log(emptyArr2);
