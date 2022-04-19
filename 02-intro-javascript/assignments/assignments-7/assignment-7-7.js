/* 

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
