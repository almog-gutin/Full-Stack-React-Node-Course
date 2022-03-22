/* 
    Create a program that needs to calculate the tip of a resteruant bill.

    The program needs two variables:
    1. bill - represents the amount of the resturant bill. Like 300.
    2. tip - represents the calculated tip of the bill.

    How to calculate the bill:
    If the the bill is greater or equals to 50 and less than or equals to 300 
    then the tip = bill * 0.15.
    Else the tip = bill * 0.2

    The program should print out to the console what was the bill amount,
    the calculated tip and the sum of the total and the bill.

    Please write the program once with if else, and once with the trenary operator.
*/

// Option 1:
const bill1 = 300;

let tip1;
if (bill >= 50 && bill <= 300) {
    tip1 = bill * 0.15;
} else {
    tip1 = bill * 0.2;
}

console.log(
    `The bill amount was ${bill1} shekels, tip was ${tip1} and the total of both the bill and the tip was ${
        bill1 + tip1
    }`
);

// Option 2:
const bill2 = 400;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;

console.log(
    `The bill amount was ${bill1} shekels, tip was ${tip2} and the total of both the bill and the tip was ${
        bill1 + tip2
    }`
);
