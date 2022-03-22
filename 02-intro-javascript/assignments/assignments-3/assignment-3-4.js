/* 
    Create a program that will contain 1 variable:
    1. me - represent an array

    Add to the array the following information:
    1. Your first name
    2. Your last name
    3. Your age

    Add the data to the array in two ways.

    Guess: push method, access the index of the element in the array
*/

const firstName = 'Almog';
const lastName = 'Gutin';
const age = 22;

// Option 1:
const arr1 = [];

arr1.push(firstName);
arr1.push(lastName, age);

console.log(arr1);

// Option 2:
const arr2 = [];

arr2[0] = firstName;
arr2[1] = lastName;
arr2[2] = age;

console.log(arr2);
