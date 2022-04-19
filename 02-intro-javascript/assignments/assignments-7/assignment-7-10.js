/* 

*/

const isRishoni = (num) => {
    if (num === 1) {
        return false;
    }

    if (num === 2 || num === 3) {
        return true;
    }

    for (let i = 4; i < num; i++) {
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
