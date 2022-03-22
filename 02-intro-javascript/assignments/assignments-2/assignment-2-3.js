/* 
    Create a program that calculates a persons BMI:
    BMI = mass / height ** 2

    The program will consist of two variables:
    1. person1BMI - represents the calculation of person 1 BMI
    2. person2BMI - represents the calculation of person 2 BMI

    The program needs to check who has a higher BMI and print out to
    the console an appropiate message with the data of both people.
*/

const person1BMI = 80 / 1.75 ** 2;
const person2BMI = 65 / 1.6 ** 2;

// Option 1:
if (person1BMI > person2BMI) {
    console.log(
        `Person 1 who has a BMI of ${person1BMI} has a higher BMI then Person 2 who has a BMI of ${person2BMI}.`
    );
} else {
    console.log(
        `Person 2 who has a BMI of ${person2BMI} has a higher BMI then Person 1 who has a BMI of ${person1BMI}.`
    );
}

// Option 2:
const message =
    person1BMI > person2BMI
        ? `Person 1 who has a BMI of ${person1BMI} has a higher BMI then Person 2 who has a BMI of ${person2BMI}.`
        : `Person 2 who has a BMI of ${person2BMI} has a higher BMI then Person 1 who has a BMI of ${person1BMI}.`;
