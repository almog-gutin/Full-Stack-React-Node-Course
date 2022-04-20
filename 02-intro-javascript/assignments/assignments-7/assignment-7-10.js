/* 
    Create a function which has 1 parameter that represents a number
    
    The function will check if the number is a prime number.
*/

const isRishoni = (num) => {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isRishoni(1));
console.log(isRishoni(2));
console.log(isRishoni(3));
console.log(isRishoni(21));
console.log(isRishoni(53));
