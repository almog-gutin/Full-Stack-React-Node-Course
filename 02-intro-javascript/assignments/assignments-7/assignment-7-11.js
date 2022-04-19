/* 

*/

// Option 1
const printPyramid1 = (num) => {
    for (let i = 1; i <= num; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            if (j === i) {
                row += '*';
            } else {
                row += '* ';
            }
        }

        console.log(row);
    }
};

// Option 2
const printPyramid2 = (num) => {
    let row = '*';

    for (let i = 1; i <= num; i++) {
        console.log(row);

        row += ' *';
    }
};

printPyramid1(5);
printPyramid2(5);
