/* 

*/

class Person {
    constructor(firstName, lastName, age, doesHaveBrothers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.doesHaveBrothers = doesHaveBrothers;
    }
}

// Option 1
const areObjectsEqual1 = (person1, person2) => {
    if (
        person1.firstName !== person2.firstName ||
        person1.lastName !== person2.lastName ||
        person1.age !== person2.age ||
        person1.doesHaveBrothers !== person2.doesHaveBrothers
    ) {
        return false;
    }

    return true;
};

// Option 2
const areObjectsEqual2 = (person1, person2) => {
    const person1Str = JSON.stringify(person1);
    const person2Str = JSON.stringify(person2);

    return person1Str === person2Str;
};

const person1 = new Person('Almog', 'Gutin', 22, true);
const person2 = new Person('Amit', 'Gutin', 32, true);

console.log(areObjectsEqual1(person1, person2));
console.log(areObjectsEqual2(person1, person2));
