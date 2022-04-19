/* 
    Create  function which has 2 parmeters:
    1. A numbers array which is mandatory
    2. Index which is optional

    The function needs to check if the index parameter exists. If it doesn't
    then the function needs to return the first element inside the array.

    If the index is a negative number then the function needs to return an empty
    array.

    If the index exists and it is not a negative number then the function will return
    an array from 0 to the index.
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
