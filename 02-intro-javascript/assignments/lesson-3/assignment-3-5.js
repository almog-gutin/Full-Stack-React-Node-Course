/* 
    Create a program that will contain 1 variable:
    1. me - represent an array

    Add to the array the following information:
    1. Your first name
    2. Your last name
    3. Your age
    4. A boolean value that represents if you have brothers

    The program needs to check if the value true exists inside the array. If the it 
    does then the program needs to print out a message that you have brothers. If it
    does not exist then the program needs to print out a message that you do not have
    borthers.

    Guess: includes method

    Write the checking process in two ways: 
    1. if else
    2. Trenary operator
*/

const me = ['Almog', 'lastName', 22, true];

// Option 1:
if (me.includes(true)) {
    console.log('I do have brothers!');
} else {
    console.log("I don't have borthers!");
}

// Option 2:
console.log(me.includes(true) ? 'I do have brothers!' : "I don't have borthers!");

// Option 3:
console.log(`I ${me.includes(true) ? 'do' : "don't"} have brothers!`);
