/*
    Create a funtion that recieves a numeber and returns true or false if the number
    is uneven.
*/

// Option 1:
const isNumUneven1 = (num) => {
    if (num % 2 !== 0) {
        return true;
    }

    return false;
};

// Option 2:
const isNumUneven2 = (num) => {
    return num % 2 !== 0 ? true : false;
};

// Option 3:
const isNumUneven3 = (num) => {
    return num % 2 !== 0;
};

console.log(isNumUneven1(1));
console.log(isNumUneven2(2));
console.log(isNumUneven3(4));
