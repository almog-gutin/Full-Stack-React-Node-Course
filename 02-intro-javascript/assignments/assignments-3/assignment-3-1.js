/* 
    Create a function that recives 3 parameters:
    1. firstName - represents your first name
    2. lastName - represents your last name
    3. age - represents your age

    The function will print out yo the console all three parameters.

    Call the function and send three arguments:
    1. Your first name
    2. Your last name
    3. Your age

    Write the function any way you choose.
*/

// Option 1:
function printMyDetailsDecloration(firstName, lastName, age) {
    console.log(firstName, lastName, age);
}

// Option 2:
const printMyDetailsExpression = function (firstName, lastName, age) {
    console.log(firstName, lastName, age);
};

// Option 3:
const printMyDetailsArrow = (firstName, lastName, age) => {
    console.log(firstName, lastName, age);
};

const firstName = 'Almog';
const lastName = 'Gutin';
const age = 22;

printMyDetailsExpression(firstName, lastName, age);
printMyDetailsDecloration(firstName, lastName, age);
printMyDetailsArrow(firstName, lastName, age);
