/* 
    Create function which has 1 parameter that represents a number.

    The function needs to print out a pyramid the with the height of the number sent to the parameter.
    Each row of the pyramid will contain the amount of stars of the row.

    Input: 5
    
    Output:
    *
    * *
    * * *
    * * * *
    * * * * *
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
