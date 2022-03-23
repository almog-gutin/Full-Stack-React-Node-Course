/* 
    Create a program that prints to the console 50 times that you love JavaScript.

    Write the program in two ways:
    1. for loop
    2. while loop
*/

const message = 'I love JavaScript!';

// Option 1:
for (let i = 1; i <= 50; i++) {
    console.log(message);
}

// Option 2:
let i = 0;
while (i < 50) {
    console.log(message);

    i++;
}
