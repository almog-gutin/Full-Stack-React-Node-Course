/* 

*/

const contains = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }

    return false;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(contains(numbers, 5));
console.log(contains(numbers, 20));
