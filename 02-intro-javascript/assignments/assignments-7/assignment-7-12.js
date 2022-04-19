/* 

*/

const func = (numbers, index) => {
    if (index == null) {
        return numbers[0];
    }

    if (index < 0) {
        return [];
    }

    const arr = [];
    for (let i = 0; i < index; i++) {
        arr.push(numbers[i]);
    }

    return arr;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(func(numbers));
console.log(func(numbers, -1));
console.log(func(numbers, 5));
