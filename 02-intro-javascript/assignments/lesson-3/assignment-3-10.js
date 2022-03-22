/* 
    Create a funtion that recieves a number and returns a message if the number is
    positive or negative.
*/

// Option 1:
const isNumberPostive1 = (num) => {
    if (num >= 0) {
        return 'The number is postive.';
    }

    return 'The number is not postive.';
};

// Option 2:
const isNumberPostive2 = (num) => {
    return num >= 0 ? 'The number is postive.' : 'The number is not postive.';
};

// Option 3:
const isNumberPostive3 = (num) => {
    return `The number is ${num >= 0 ? '' : 'not '}postive.`;
};

const number = 10;

console.log(isNumberPostive1(number));
console.log(isNumberPostive2(number));
console.log(isNumberPostive3(number));
