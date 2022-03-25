/* How To Create An Array */
const brother1 = 'Ido';
const brother2 = 'Amit';
const brother3 = 'Almog';

const brothers = ['Ido', 'Amit', 'Almog'];
console.log(brothers);

/* How To Access The Elements */
console.log(brothers[1]);
const brotherElement0 = brothers[0];
console.log(brotherElement0);

/* How To Get The Length Of The Array */
console.log(brothers.length); // 3

/* How To Get The Last Element */
const lastBrotherElement = brothers[brothers.length - 1];
console.log(lastBrotherElement); // Almog

/* What Happens When Trying To Access An Element That Doesn't Exist inside The Array */
console.log(brothers[100]); // undefined

/* How To Change A Value Of An Element */
brothers[2] = 'Yoav';
console.log(brothers);

/* How To Access Nested Arrays */
const mainArr = [
    ['Almog', 'Gutin'],
    ['Ido', 'Gutin'],
];

const arrElement = mainArr[0];
console.log(mainArr[0]);
console.log(mainArr[0][0]);

// console.log(mainArr[0][0]);

/* Array Methods */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// push - Adds elements at the end of the array
const arr1 = [];

arr1.push('Hello');
arr1.push('World', 'You are great');

console.log(arr1);

// pop - Removes elements from the end of the array
const arr2 = [10, 20, 30, 40, 50];

arr2.pop();
console.log(arr2);

const poppedEl = arr2.pop();
console.log(poppedEl);

// unshift - Adds elements to the start of the array
const arr3 = [20, 30];

arr3.unshift(10);
arr3.unshift(0, 5);

console.log(arr3);

// shift - Removes elemenets from the beginning of the array
const arr4 = [10, 20, 40, 50];

arr4.shift();
const shiftedEl = arr4.shift();
console.log(shiftedEl);

console.log(arr4);

// includes - Checks if an element exists in the array
const arr5 = [1986, 1987, 1999];

console.log(arr5.includes(1999)); // true
console.log(arr5.includes(1989)); // false

// indexOf - Returns the index of an element, if the element does not exist it will return -1
const arr6 = ['dog', 'cat', 'rabbit', 'sheep', 'dog', 'pig'];

console.log(arr6.indexOf('dog')); // 0
console.log(arr6.indexOf('dog', 3)); // 4
console.log(arr6.indexOf('giraffe')); // -1

// at - Returns the element at the index you specified
const arr7 = ['dog', 'cat', 'rabbit', 'sheep', 'pig'];

// console.log(arr7.at(2)); // rabbit
// console.log(arr7.at(arr7.length - 1)); // pig
// console.log(arr7.at(-1)); // pig
// console.log(arr7.length(100)); // undefined

// concat - Combines multiple arrays into 1
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f'];
const array3 = ['g', 'h', 'i'];

console.log(array1.concat(array2));

const newArray = array1.concat(array2, array3);
console.log(newArray);

// reverse - Reverse the elements in the array
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr8.reverse();
console.log(arr8);

// sort - Sorts the elements in the array
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const arr9 = [1, 5, 20, 9, 9];
// arr9.sort();
// console.log(arr9);  // Invalid sort

// const compare = (a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (b < a) {
//         return 1;
//     } else {
//         return 0;
//     }
// };

// arr9.sort(compare);

// How To Sort From Low To High
// const compare = (a, b) => a - b;
// arr9.sort(compare)
arr9.sort((a, b) => a - b);
console.log(arr9);

// How To Sort From High To Low
const arr10 = [1, 5, 20, 9, 9];

arr10.sort((a, b) => b - a);
console.log(arr10);

// map - Goes through all the elements and returns
const arr11 = [1, 2, 3, 4, 5, 6, 7];
const newArr11 = arr11.map((element) => Math.pow(element, 3));
console.log(arr11);
console.log(newArr11);

const arr12 = ['Ba5tket', 'Password', 'Almog23456'];
const newArr12 = arr12.map((element) => {
    if (element === 'Password') {
        return 'Not Valid';
    }

    return element;
});

console.log(newArr12);

newArr12.map((element, index) => {
    console.log(element, index);
});

// find - finds the first element based on a condition
const persons = [
    { name: 'Al', age: 22 },
    { name: 'Yair', age: 28 },
    { name: 'Oz', age: 35 },
    { name: 'Yair', age: 50 },
];

const found = persons.find((element) => element.name === 'Yair');
console.log(found);

// const findElement = (arr) => {
//     for (let i = 0; i < persons.length; i++) {
//         const element = persons[i];

//         if (element.name === 'Yair') {
//             return element;
//         }
//     }
// };

// filter - finds all the elements based on a condition
const persons2 = [
    { firstName: 'Al', lastName: 'Gutin', age: 22 },
    { firstName: 'Yair', lastName: 'Zafrani', age: 28 },
    { firstName: 'Oz', lastName: 'Yair', age: 35 },
    { firstName: 'Yair', lastName: 'sdfghm', age: 50 },
];

const yairs = persons2.filter((element) => element.firstName === 'Yair' || element.lastName === 'Yair');
console.log(yairs);

// const filterArr = (arr) => {
//     const filteredArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if (element.firstName === 'Yair' || element.lastName === 'Yair') {
//             filteredArray.push(element);
//         }
//     }

//     return filteredArray;
// };
