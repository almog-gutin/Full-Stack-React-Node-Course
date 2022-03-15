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
