/* 
    Create a program which contains a function that returns the full name of a user.

    The function will have a parameter which represents an object with 2 methods -
    1. First name: text all lowercase.
    2. Last name: text all lowercase.

    The function will return 1 string which will include inside of it the first name and the last name of the user. 
    However, the names need to start with uppercase letters.
    
    The program will call the function and print to the console the returned value.
    Guess: slice, concat, toUpperCase
*/

const getUserFullName = (user) => {
    const firstName = user.firstName.slice(0, 1).toUpperCase().concat(user.firstName.slice(1));
    const lastName = user.lastName.slice(0, 1).toUpperCase().concat(user.lastName.slice(1));

    return `${firstName} ${lastName}`;
};

const almogUser = {
    firstName: 'almog',
    lastName: 'gutin',
};

console.log(getUserFullName(almogUser));
