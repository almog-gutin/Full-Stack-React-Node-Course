/* 

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

person1.calcBMI();
person2.calcBMI();

console.log(
    person1.bmi > person2.bmi ? 'Person 1 has a higher BMI than Person 2.' : 'Person 2 has a higher BMI than Person 1.'
);
