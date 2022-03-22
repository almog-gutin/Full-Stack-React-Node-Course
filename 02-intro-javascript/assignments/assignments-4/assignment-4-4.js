/* 

*/

const calculation = (num) => num / 2.5;

const mainArr = [80, 300, 247, 5600, 1000];

// Option 1:
const emptyArr1 = [];
for (let i = 0; i < mainArr.length; i++) {
    const calc = calculation(mainArr[i]);

    if (calc > 100) {
        break;
    }

    emptyArr1.push(calc);
}

console.log(emptyArr1);

// Option 2:
const emptyArr2 = [];

let i = 0;
while (i < mainArr.length) {
    const calc = calculation(mainArr[i]);

    if (calc > 100) {
        break;
    }

    emptyArr1.push(calc);

    i++;
}

console.log(emptyArr2);
