/* 
    Create a program that has 2 objects represeting people. 

    Each object contains the following properties:
    1. name
    2. mass
    3. height

    Create a method named calcBMI for each object that calculates the BMI of the person,
    and saves the calculation inside a property named bmi.

    The program needs to run the calcBMI for each person.

    Afterwards, the program needs to check who has a higher BMI and print out to the console
    an oppropiate message. 
*/

const person1 = {
    name: 'Almog Gutin',
    mass: 79,
    height: 1.75,

    calcBMI() {
        const calculation = this.mass / this.height ** 2;

        this.bmi = calculation;
    },
};

const person2 = {
    name: 'Ido Gutin',
    mass: 95,
    height: 1.8,

    calcBMI() {
        const calculation = this.mass / this.height ** 2;

        this.bmi = calculation;
    },
};

console.log('Person 1:', person1);
console.log('Person 2:', person2);

person1.calcBMI();
person2.calcBMI();

console.log('Updated Person 1:', person1);
console.log('Updated Person 2:', person2);

console.log(
    person1.bmi > person2.bmi ? 'Person 1 has a higher BMI than Person 2.' : 'Person 2 has a higher BMI than Person 1.'
);
