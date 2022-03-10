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

// Falsy values
// null
// undefined
// false
// 0
// ""

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
