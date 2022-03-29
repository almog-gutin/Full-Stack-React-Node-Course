/* How To Create Objects */
const almogObj = {
    firstName: 'Almog',
    lastName: 'Gutin',
    age: 2022 - 1999,
    brothers: ['Ido', 'Amit'],
};
console.log(almogObj);

/* How To Access Properties */
// Dot Notation
console.log(almogObj.firstName);

// Bracket Notation
console.log(almogObj['lastName']);

// Accessing Properties The Don't Exist
console.log(almogObj.job);

/* Adding Properties To The Objects */
almogObj.job = 'Software Developer';
almogObj.location = 'Jerusaelm';
console.log(almogObj);

/* Object Methods */
const almogObj2 = {
    firstName: 'Almog',
    lastName: 'Gutin',
    birthYear: 1999,
    borhters: ['Ido', 'Amit'],

    calcAge1: function (birthYear) {
        return 2022 - birthYear;
    },

    calcAge2: function () {
        return 2022 - this.birthYear;
    },

    calcAge3() {
        this.age = 2022 - this.birthYear;

        return this.age;
    },
};

console.log(almogObj2.calcAge1(1999));
console.log(almogObj2.calcAge2());
console.log(almogObj2.calcAge3());
console.log(almogObj2);

/* Classes */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const p1 = {
    firstName: 'Almog',
    lastName: 'Gutin',
    birthYear: 1999,
    isMale: true,
    job: 'software developer',

    calcAge() {
        return 2022 - this.birthYear;
    },

    print() {
        console.log(
            `${this.firstName} ${this.lastName} was born in ${this.brithYear} and today is ${this.calcAge()}. ${
                this.isMale ? 'He' : 'She'
            } is a ${this.job}`
        );
    },
};

const p2 = {
    firstName: 'Amit',
    lastName: 'Gutin',
    birthYear: 1989,
    isMale: true,
    job: 'product marketing team lead',

    calcAge() {
        return 2022 - this.birthYear;
    },

    print() {
        console.log(
            `${this.firstName} ${this.lastName} was born in ${this.brithYear} and today is ${this.calcAge()}. ${
                this.isMale ? 'He' : 'She'
            } is a ${this.job}`
        );
    },
};

console.log(p1);
console.log(p2);

class Person {
    // Properties
    firstName;
    lastName;
    birthYear;
    isMale;
    job;
    brothers;

    // This function creates the objects from the class
    constructor(firstName, lastName, birthYear, isMale, job, brothers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.isMale = isMale;
        this.job = job;
        this.brothers = brothers;
    }

    calcAge() {
        return 2022 - this.birthYear;
    }

    print() {
        console.log(
            `${this.firstName} ${this.lastName} was born in ${this.birthYear} and today is ${this.calcAge()}. ${
                this.isMale ? 'He' : 'She'
            } is a ${this.job}`
        );
    }
}

const almog = new Person('Almog', 'Gutin', 1999, true, 'software developer', ['Ido', 'Amit']);
const amit = new Person('Amit', 'Gutin', 1989, true, 'product marketing team lead', ['Ido', 'Almog']);

console.log(almog);
console.log(amit);

almog.print();
amit.print();

// Class Properties
class Person2 {
    firstName;
    lastName;
    birthYear;
    isMale;
    job;

    constructor(firstName, lastName, birthYear, isMale, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.isMale = isMale;
        this.job = job;
    }
}

class Person2Shorthand {
    constructor(firstName, lastName, birthYear, isMale, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.isMale = isMale ? isMale : null;
        this.job = job;
    }
}

const almog2 = new Person2Shorthand('Almog', 'Gutin', 1999, true, 'software developer');
const amit2 = new Person2Shorthand('Amit', 'Gutin', 1989, '', 'product marketing team lead');

console.log(almog2.birthYear);
console.log(amit2);

// Private Properties & Methods
class Person3 {
    #id;
    constructor(id, name, birthYear) {
        this.#id = id;
        this.name = name;
        this.birthYear = birthYear;
    }

    getId() {
        return this.#id;
    }
}

const almog3 = new Person3('123456789', 'Almog Gutin', 1999);
console.log(almog3.id); // undefiend
// console.log(almog3.#id);
console.log(almog3.getId());

class Person4 {
    constructor(name, birthYear) {
        this.name = this.#formatName(name);
        this.birthYear = birthYear;
        this.age = this.#calcAge(birthYear);
    }

    #formatName(name) {
        return name.toLowerCase();
    }

    #calcAge(birthYear) {
        return 2022 - birthYear;
    }
}

const almog4 = new Person4('ALMOG GUTIN', 1999);
console.log(almog4);

// Static Properties & Methods
class School {
    static schoolsCount = 0;

    constructor(name, city) {
        this.name = name;
        this.city = city;

        // this.constructor allows you do access to static properties
        this.constructor.schoolsCount++;
    }

    static print() {
        console.log(`There are ${this.schoolsCount} schools`);
    }
}

const school1 = new School('Heschel', 'New York City');
const school2 = new School('Boyar', 'Jerusalem');

console.log(school1);
console.log(school2);

console.log(School.schoolsCount);
School.print();
