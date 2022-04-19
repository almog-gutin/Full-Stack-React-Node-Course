/* 
    Create a program that contains a string.

    The program needs to move the last letter of the string to the start of the string
*/

const moveEndCharToFront = (str) => str.slice(-1).concat(str.slice(0, -1));

const str = 'almog';
console.log(moveEndCharToFront(str));
