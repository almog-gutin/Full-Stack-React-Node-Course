/* 
    BMI = Body Mass Index

    BMI = Mass / height ** 2 = mass / (height * height)

    Create a program that stores two people's mass and heights.
    Calculate both of their BMI's and store them into vairables.
    Create a variable isPerson2HigherThanPerson1 which will store if person2 BMI is higher than person1
    Print out the result in the console
*/

const person1Mass = 78,
    person1Height = 1.69;
const person2Mass = 92,
    person2Height = 1.65;

const person1BMI = person1Mass / person1Height ** 2;
const person2BMI = person2Mass / (person2Height * person2Height);

const isPerson2HigherThanPerson1 = person2BMI > person1BMI;

console.log(isPerson2HigherThanPerson1);
