/* Global Scope */
const me = 'Almog Gutin';
let job = 'software developer';
var age = 22;

const func1 = () => {
    console.log(me);
    console.log(job);
    console.log(age);
};

func1();

for (let i = 0; i < 2; i++) {
    console.log(me, job, age);
}

if (true) {
    console.log(me, job, age);
}

const func2Helper = () => {
    console.log(x, y);
};

/* Function Scope */
const func2 = () => {
    const x = 10;
    const y = 20;

    func2Helper();

    for (let i = 0; i < 2; i++) {
        console.log(x, y);
    }
};
// func2();
// console.log('Function Scope, accessing variables outside the socpe:', x, y); // Invalid Code

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const objGlobal = new Person('Almog Gutin', 22);
console.log(objGlobal);

const func3 = () => {
    console.log(objGlobal);
};
func3();

const func4 = () => {
    const objFunction = new Person('Amit Gutin0', 34);
};

// console.log(objFunction); // Invalid Code

/* Block Scope - if, else if, else, for, while, switch */
if (true) {
    const name = 'Almog';
    let age = 22;
    var course = 'Full Stack';

    console.log('Block Scope:', name, age, course);
}

// console.log(name, age); // Invalid code
console.log('Outside of the block scope var:', course);
