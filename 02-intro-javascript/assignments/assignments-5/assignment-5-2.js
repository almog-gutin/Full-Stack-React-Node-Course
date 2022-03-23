/* 
    Create a program that will contain a function that checks if the password is valid.
    
    The function will have a parameter that represents a string which is the password.
    The function will check if the password is not empty, contains at least 1 number, and the password does not equal to “Password123”. If all of these conditions are true then the function will return true. Otherwise, the function will return false.
    
    The program will call the function and print to the console the value that was returned.
*/

const isPasswordValid = (password) => {
    if (password === '' || password === 'Password123') {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        const convertedCharToNum = +char;

        if (!!convertedCharToNum) {
            return true;
        }
    }

    return false;
};

console.log(isPasswordValid('Password123'));
console.log(isPasswordValid(''));
console.log(isPasswordValid('Almog123'));
console.log(isPasswordValid('Almog'));
