/* 
    Create a program that checks if an array of numbers has a negative number.

    If the array has a negative number then the loop should stop and print out to the console that that the array
    containts a negative number.

    However, if the condition was not met than the program will print out to the console that all the numbers inside the array
    are positive.
*/

const isThereANegativeNumInArr = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            return 'In the array there is at least 1 negative number!';
        }
    }

    return 'In the array there are no negative numbers!';
};

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 2, -2, 4, 5, 6, 7, 8, 9, 10];

console.log(isThereANegativeNumInArr(numbers1));
console.log(isThereANegativeNumInArr(numbers2));
