/*
    Create a funtion that recieves a number and returns true or false if the number
    is even.
*/

// Option 1:
const isNumEven1 = (num) => {
    if (num % 2 === 0) {
        return true;
    }

    return false;
};

// Option 2:
const isNumEven2 = (num) => {
    return num % 2 === 0 ? true : false;
};

// Option 3:
const isNumEven3 = (num) => {
    return num % 2 === 0;
};

console.log(isNumEven1(1));
console.log(isNumEven2(2));
console.log(isNumEven2(4));
console.log(isNumEven3(3));
