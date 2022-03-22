console.log(10);
console.log('This Full-Stack course is awesome!');
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

let js = 'amazing';
console.log(js);
console.log(js);
console.log(js);
console.log(js);
console.log(js);
console.log(js);

let firstName = 'Almog';
console.log(firstName);

// Notation Example
/* Bulk Notation Example */

// Invalid variable names
// let 3number = 3;
// let almog&/+=gutin = 'Almog Gutin';
// let new = 'new';
// let function = 'function';

// Conventions - camelCase, always start with lowercase letter, descriptive
// let date = 'September 19, 1999';
// let birth_date = 'September 19, 1999';  kebab_case
let almogsBirthDate = 'September 19, 1999';

/* Data Types */
let num = 5;
let str = 'string';
let boolean = true;
let nullVar = null;
let undefinedVar = undefined;

// typeof
typeof num; // number
console.log(typeof true); // boolean

let undefinedVar2;
let stringExample;
console.log(undefinedVar2);

let varExample = 10;
console.log(varExample);
console.log(typeof varExample); // number

varExample = 'Almog';
console.log(varExample);
console.log(typeof varExample); // string

/* Variables */
let age = 22;
age = 24;
console.log(age);
let age2;
console.log(age2); // undefined

const lastName = 'Gutin';
console.log(lastName);
// lastName = 'Sapir'; // Invalid code
// const lastName2; // Invalid code

var yarden = 'Yarden';
console.log(yarden);
yarden = 10;
console.log(yarden);

/* Basic Operators */
// = + - / % * **

// Minus Operator
const ageIdo = 2022 - 1986;
console.log(ageIdo);

// Addition Operator
const sum = 5 + 5;
console.log(sum);

// Concat Operator
const idoFirstName = 'Ido';
const idoLastName = 'Golan';
console.log(idoFirstName, idoLastName);
const idoFullName = idoFirstName + idoLastName;
console.log(idoFullName); // IdoGolan
const idoFullNameWithSpace = idoFirstName + ' ' + lastName;
console.log(idoFullNameWithSpace); // Ido Golan

// Division Operator
console.log(20 / 5); // 4
const divistionExample = 20 / 4; // 5
console.log(divistionExample);
console.log(20 / 3); // 6.66666667
console.log(20 / 0); // Infinity

// Multiplyer Operator
console.log(5 * 5); // 25

// Power operator
console.log(5 ** 3); // 125

// Modulu Operator
console.log(5 % 3); // 2

// Assignment Operator
let x = 10 + 5; // 15
// x = x + 5; // 20
x += 5;
console.log(x);

let y = 20 - 5; // 15
// y = y - 5;
y -= 5; // 10
console.log(y);
y *= 5; // y = y * 5
// y = y / 5;
y /= 5; // y = y / 5;

let z = 1;
z = z + 1; // 2
z += 1; // 3
z++; // 4
console.log(z);

z = z - 1; // 3
z -= 1; // 2
z--; // 1
console.log(z);

// > < >= <=
console.log(15 > 20); // false
console.log(10 < 20); // true
console.log(20 >= 20); // true
console.log(15 <= 25); // true

// == ===
console.log(10 == 10); // true

console.log('10' == 10); // true
console.log('15' == 10); // false
console.log('10' === 10); // false

const nullExample = null;
console.log(nullExample == undefined); // true
console.log(null == undefined); // true
console.log(undefined == null); // true
console.log(undefined == undefined); // true
console.log(null == null); // true
console.log(null === undefined); // false

/* Operator Procedence */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(10 - 15 > 20 - 10);

// ---------->
console.log(20 - 10 - 5); // 5

// num1 = undefined, num2 = undefined
let num1, num2;
// <-------
num1 = num2 = 10 + 5;
// num1 = num2 = 15, num2 = 15
// num1 = 15

// const avg = 10 + 10 / 2; // 15
const avg = (10 + 10) / 2 / 2; // 10

/* Template Literals/String Interplation */
const almogName = 'Almog';
const almogJob = 5;

const sentenceV1 = "I'm " + almogName + " and I'm a " + almogJob + '.';
console.log(sentenceV1);

const sentenceV2 = `I'm ${almogName} and I'm a ${almogJob}.`;
console.log(sentenceV2);

/* Conditional Statements */
const isOldEnough = 17 > 18;

if (isOldEnough) {
    console.log("I'm old enough to drink!");
}

if (isOldEnough) {
    console.log("I'm old enough to drink!");
} else {
    console.log("I'm not old enught to drink!");
}

const idoBirthYear = 1986;

let century;
if (idoBirthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

/* Conversions (casting) */
const yearStr = '1999';
console.log(yearStr);
console.log(Number(yearStr)); //Number(value)
console.log(parseInt(yearStr)); // praseInt(string)
console.log(+yearStr);

console.log(Number('seven')); // NaN = Not a Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(true) + Number(true));

const yearNum = 1999;
console.log(yearNum);
console.log(String(yearNum)); // '1999'
console.log(yearNum + '');
console.log(`${yearNum}`);

console.log('23' - '3'); // 20
console.log('20' - 'hgfds'); // NaN
console.log('gfrde' - 'gfdes'); // NaN
console.log('20' + '3'); // '203'
console.log('20' / '5'); // 4
console.log('20' * '5'); // 100
console.log('20' % '5'); // 0

console.log(+'10' + +'5');

/* Falsy values */
// null
// undefined
// false
// 0
// ""
// NaN

console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true
console.log(Boolean('Almog')); // true
console.log(Boolean({})); // true

/* Logical Operators */
// ! && ||

// Not operator
console.log(!true); // false
console.log(!''); // true
console.log(!!''); // false

// AND operator
// &&
const iLikeComputers = true;
const iLikeCoding = true;
const iLikeMornings = false;

if (iLikeComputers && iLikeCoding) {
    console.log('I like computers and coding!');
}

if (iLikeComputers && iLikeMornings) {
    console.log('I like computers and mornings!');
} else {
    console.log('I like computers but I hate mornings!');
}

const number = 5;
const haimName = 'Haim';

if (number === 5 && haimName === 'Almog') {
    console.log('This statmenet is true');
} else {
    console.log('This statement is false!');
}

if (number === '5' && haimName == 'Haim') {
    console.log('This statmenet is true');
} else {
    console.log('This statement is false!');
}

// OR operator
// ||

if (iLikeComputers || iLikeMornings) {
    console.log('I like computers or I like Mornings!');
}

// else if
const day1 = 'wednesday';
if (day1 === 'sunday' || day1 === 'monday') {
    console.log('Today is sunday or monday');
} else if (day1 === 'tuesday') {
    console.log('Today is tuesday');
} else {
    console.log('Today is either wednesday, thursday, friday or saturday');
}

// switch
const day2 = 'kjhgf';
switch (day2) {
    case 'sunday': {
        console.log('Today is sunday');
        console.log('Today is sunday');
        break;
    }
    case 'monday':
        console.log('Today is monday');
        break;
    case 'tuesday': {
        console.log('Today is tuesday');
        break;
    }
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'saturday': {
        console.log('Today is either wednesday, thursday, friday or saturday');
        break;
    }
    default: {
        console.log('The value is not a valid weekday');
    }
}

/* Trenary Operator */
// ? :
const amitAge = 33;

if (amitAge >= 30 && amitAge < 40) {
    console.log('Amit is in his Thirtys');
    console.log('Amit is in his Thirtys');
    console.log('Amit is in his Thirtys');
    console.log('Amit is in his Thirtys');
    console.log('Amit is in his Thirtys');
} else {
    console.log(`Amit is ${amitAge} years old`);
    console.log(`Amit is ${amitAge} years old`);
    console.log(`Amit is ${amitAge} years old`);
    console.log(`Amit is ${amitAge} years old`);
    console.log(`Amit is ${amitAge} years old`);
    console.log(`Amit is ${amitAge} years old`);
}

amitAge >= 30 && amitAge < 40
    ? console.log('Trenary: Amit is in his Thirtys')
    : console.log(`Trenary: Amit is ${amitAge} years old`);

let answer;
if (amitAge >= 18) {
    answer = 'Yes';
} else {
    answer = 'No';
}
console.log(answer);

const amitAge2 = 10;
let answer2 = amitAge2 >= 18 ? 'Yes' : 'No';
console.log(answer2);

const amitAge3 = 17;
console.log(`Is Amit Old Enough? ${amitAge3 >= 18 ? 'Yes' : 'No'}`);

/* Functions */
// Feclaring a function
function logger() {
    console.log('Logger');
}

// Calling a function
logger();
logger();
logger();
logger();

// Passing Data and Returing Data
function juicer(apples, carrets) {
    console.log(apples, carrets);
}

juicer(3);

function juicer2(apples, carrets) {
    if (typeof apples !== 'number' || typeof carrets !== 'number') {
        return; // return undefined;
    }

    const juice = `Juice with ${apples} apples and ${carrets} carrets.`;
    return juice;
}

console.log(juicer2(3, 'fghjk'));
juicer2(3, 4);

// Function Decloration
console.log(calculateAgeDecloration(1999));

function calculateAgeDecloration(birthYear) {
    return 2022 - birthYear;
}

console.log(calculateAgeDecloration(1999));

// Function Expression
// console.log(calculateAgeExpression(1986)); // Invalid code

const calculateAgeExpression = function (birthYear) {
    return 2022 - birthYear;
};

console.log(calculateAgeExpression(1986));

// Anonymous/Arrow Function
// console.log(calculateAgeArrow(1989));
// Cannot use the reserved word named "this"

const calculateAgeArrow = (birthYear) => {
    return 2022 - birthYear;
};

console.log(calculateAgeArrow(1989));

// Functions calling other function
const cutFruitPieces = (fruit) => {
    return fruit * 4;
};

const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples); // 8
    const orangePieces = cutFruitPieces(oranges); // 12

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
};

console.log(fruitProcessor(2, 3));

/* Arrays */
// How to create an array
const arr = [];
console.log(arr);

const brother1 = 'Ido';
const brother2 = 'Amit';
const brother3 = 'Almog';

const brothers = [brother1, brother2, brother3]; // ['Ido', 'Amit', 'Almog']
console.log(brothers);

// How to access the elements in an array
console.log(brothers[1]);
const brotherElement0 = brothers[0];
console.log(brotherElement0);

// How to get the length of an array
console.log(brothers.length); // 3

// How to get the last element in an array
const lastBrotherElement = brothers[brothers.length - 1];
console.log(lastBrotherElement);

// What happens when trying to get an element that does not exist in an array
console.log(brothers[100]); // undefined

// How to change the value of an element in an array
brothers[2] = 'Yoav';
console.log(brothers);

const almogFirstName = 'Almog';
const almog = [almogFirstName, 'Gutin', 2022 - 1999, brothers];
console.log(almog);

const almogsBrothers = almog[almog.length - 1];
console.log(almogsBrothers);

console.log(almogsBrothers[1]);
console.log(almog[almog.length - 1][1]); // Amit

// push
const cousins = ['Sagi', 'Yoav', 'Or'];
cousins.push('Daniel');
console.log(cousins);

cousins.push('Tzeli', 'Elram', 'Avia', 'Elinor');
console.log(cousins);

// pop
cousins.pop(); // Elinor
console.log(cousins);

const popedElement = cousins.pop(); // Avia
console.log(popedElement);

// includes
const doesOrExistInArray = cousins.includes('Or'); // true
console.log(doesOrExistInArray);

const doesElinorExistInArray = cousins.includes('Elinor'); // false
console.log(doesElinorExistInArray);

if (cousins.includes('Yoav')) {
    console.log('Yoav exists in the cousins array');
} else {
    console.log('Yoav does not exists in the cousins array');
}

/* Objects */
const orFirstName = 'Or';
const orLastName = 'Elharar';
const orAge = 27;

console.log(orFirstName, orLastName, orAge);

const or = {
    firstName: 'Or',
    lastName: 'Elharar',
    age: 27,
};

console.log(or);

const orArr = [orFirstName, orLastName, orAge];
console.log(orArr);
console.log(orArr[0]);

// Dot Notation
console.log(or.lastName);

// Bracket Notation
console.log(or['age']);

const property = 'firstName';
console.log(or[property]);

switch (property) {
    case 'firstName':
        console.log(`The propery that we are trying to access is firstName and it's value: ${or[property]}`);
        break;
    case 'lastName':
        console.log(`The propery that we are trying to access is lastName and it's value: ${or[property]}`);
        break;
}

const property2 = 'first';
console.log(or[property2 + 'Name']);

const keyExample = 'fdgrfdgfg';
console.log(or[keyExample === 'age' ? 'age' : 'firstName']);

// Accessing Properties That Don't Exist
console.log(or['job']); // undefined

// Adding Properties To Objects
const almogObj = {};

console.log(almogObj); // {}

almogObj.firstName = 'Almog';
almogObj.lastName = 'Gutin';
almogObj.NickName = 'GAGA';

console.log(almogObj);

// Object Methods
// Method Expression
const almogObj2 = {
    firstName: 'Almog',
    lastName: 'Gutin',
    birthYear: 1999,
    brothers: ['Ido', 'Amit'],

    calculateAgeExpression: function (year) {
        return 2022 - year;
    },

    calculateAgeExpressionShortand(year) {
        return 2022 - year;
    },
};

console.log(almogObj2.calculateAgeExpression(2000)); // 22
console.log(almogObj2.calculateAgeExpression(almogObj2.birthYear)); // 23
console.log(almogObj2.calculateAgeExpressionShortand(almogObj2.birthYear)); // 23

// Method Arrow
const almogObj3 = {
    firstName: 'Almog',
    lastName: 'Gutin',
    birthYear: 1999,
    brothers: ['Ido', 'Amit'],

    calculateAgeArrowV1: (year) => {
        return 2022 - year;
    },

    calculateAgeArrowV2: (year) => 2022 - year,
};

console.log(almogObj3.calculateAgeArrowV1(almogObj3.birthYear)); // 23
console.log(almogObj3.calculateAgeArrowV2(1998)); // 24

// Object Context (this)
const almogObj4 = {
    firstName: 'Almog',
    birthYear: 1999,

    calculateAge1: function (year) {
        return 2022 - year;
    },

    calculateAge2: function () {
        return 2022 - this.birthYear;
    },
};

console.log(almogObj4.calculateAge1(almogObj4.birthYear)); // 23
console.log(almogObj4.calculateAge2()); // 23

const almogObj5 = {
    firstName: 'Almog',
    birthYear: 1999,

    printObj() {
        console.log(this);
    },
};

almogObj5.printObj();
console.log(almogObj5);

const obj = {
    firstName: 'Tamar',
    lastName: 'Yron',

    printArrow: () => {
        console.log(this);
        console.log(this.firstName, this.lastName);
    },

    printExpression() {
        console.log(this);
        console.log(this.firstName, this.lastName);
    },
};

obj.printArrow();
obj.printExpression();

/* Loops */
console.log('This is awesome 1');
console.log('This is awesome 2');
console.log('This is awesome 3');
console.log('This is awesome 4');
console.log('This is awesome 5');

// For Loop
for (let row = 0; row < 5; row++) {
    console.log(`This is a loop: ${row + 1}`);
}

const years = [2000, 2001, 2002, 2003, 2004, 2005];
for (let i = 0; i < years.length; i++) {
    console.log(years[i]);
}

const years2 = [1986, 1989, 1987, 1999, 2002, 2005];
const olderAges = [];

for (let i = 0; i < years2.length; i++) {
    const year = years2[i];

    if (year < 2000) {
        const calc = 2022 - year;

        olderAges.push(calc);
    }
}

console.log(olderAges);

// Looping Backwards
const years3 = [1986, 1989, 1987, 1999, 2002, 2005]; // length = 6
for (let i = years3.length - 1; i >= 0; i--) {
    console.log(years3[i]);
}

// Continue and Breaks
const years4 = [1997, 1998, 1999]; // length = 3
const ages = [];
for (let i = 0; i < years4.length; i++) {
    const year = years4[i];

    if (year === 1998) {
        continue;
    }

    ages.push(2022 - year);
}

// for (let i = 0; i < years4.length; i++) {
//     const year = years4[i];

//     if (year !== 1998) {
//         ages.push(2022 - year);
//     }
// }

// for (let i = 0; i < years4.length; i++) {
//     const year = years4[i];

//     if (year !== 1998) {
//         ages.push(2022 - year);
//     } else {
//     }
// }

console.log(ages);

const years5 = [1997, 1998, 1999]; // length = 3
const ages2 = [];
for (let i = 0; i < years5.length; i++) {
    const year = years5[i];

    if (year === 1998) {
        break;
    }

    ages2.push(2022 - year);
}

console.log(ages2);

// Nested Loops
for (let exercise = 1; exercise <= 5; exercise++) {
    for (let set = 1; set <= 3; set++) {
        console.log(`Starting exercise ${exercise}, set ${set}`);
    }
}

// While Loop
let exercise = 1;
while (exercise <= 5) {
    console.log(`I am preforming exercise: ${exercise}`);

    exercise++;
}

let exercise2 = 1;
while (exercise2 <= 5) {
    // for (let set = 1; set <= 3; set++) {
    //     console.log(`Starting exercise ${exercise2}, set ${set}`);
    // }

    let set = 1;
    while (set <= 3) {
        console.log(`Starting exercise ${exercise2}, set ${set}`);

        set++;
    }

    exercise2++;
}
