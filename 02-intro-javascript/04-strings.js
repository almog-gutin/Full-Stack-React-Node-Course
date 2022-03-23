/* How To Create A String  */
let str1 = 'Almog';
const str2 = 'Hello World';

/* Template Literals */
const almogName = 'Almog';
const almogJob = 'software developer';

const sentenceV1 = "I'm " + almogName + " and I'm a " + almogJob + '.';
const sentenceV2 = `I'm ${almogName} and I'm a ${almogJob}.`;
console.log(sentenceV1);
console.log(sentenceV2);

/* String Conversions/Casting */
console.log(String(5)); // '5'
console.log(20 + ''); // '20'
console.log(`${20 + 10}`); // '30'

/* How To Get The Length */
const string = 'Hello World';
console.log(string.length); // 11

/* How To Access A Character */
const string1 = 'Hello World';

const char = string1[1]; // H
console.log(char);

console.log(string1[500]); // undefined

/* String Methods */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// toUpperCase
const original1 = 'hello world';
console.log(original1.toUpperCase());
console.log(original1);

// toLowerCase
const original2 = 'Hello WORLD';
const strLower = original2.toLowerCase();

console.log(strLower);
console.log(original2);

// trimStart
const original3 = '             hello wolrd';
const strTrimStart = original3.trimStart().toUpperCase();

console.log(strTrimStart);
console.log(original3);

// trimEnd
const original4 = 'hello wolrd              ';
const strTrimEnd = original4.trimEnd();

console.log(strTrimEnd);
console.log(original4, 5);

// trim
const original5 = '         hello wolrd        ';
const strTrim = original5.trim();

console.log(strTrim, 5);
console.log(original5, 5);

// charAt
const idoName = 'Ido';
console.log(idoName.charAt(0)); // I

const letter = idoName.charAt(2); // o
console.log(letter);

console.log(idoName.charAt(500)); // ''

// includes
const sentence = 'This class is awesome!';
const word = 'class';

console.log(sentence.includes(word)); // true
console.log(sentence.includes(word) ? 'The word exists!' : 'The word does not exist!');

// startsWith
const sentence2 = 'Saturday is the best day in the week!';

console.log(sentence2.startsWith('Sat')); // true

console.log(sentence2.startsWith('Sat', 3)); // false

// endsWith
const sentence3 = 'Saturday is the best day in the week!';

console.log(sentence3.endsWith('week!'));
console.log(sentence3.endsWith('the', 31));

// concat
const hello = 'Hello';
const world = 'World';

// const sentence4 = hello.concat(world); // HelloWorld
const sentence4 = hello.concat(' ', world); // Hello World

console.log(sentence4);

// replace
const sentence5 = 'This class is awesome. It is a great class!';

const updatedSentence5 = sentence5.replace('class', 'course');
console.log(updatedSentence5);

// replaceAll
const sentence6 = 'This class is awesome. It is a great class!';

const updatedSentence6 = sentence6.replaceAll('class', 'course');
console.log(updatedSentence6);

// slice
const str3 = 'This is a long sentence.'; // length = 24

console.log(str3.slice());
console.log(str3.slice(10)); // long sentence.
console.log(str3.slice(10, 14)); // long

// const slicedSentence = str3.slice(str3.length - 9); // sentence
const slicedSentence = str3.slice(-9); // sentence
console.log(slicedSentence);

console.log(str3.slice(-14, -10)); // long

console.log(str3.slice(14, 10)); // ''
