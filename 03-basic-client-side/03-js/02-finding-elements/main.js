/* THis prints out the DOM Element as HTML to the console */
console.log(document);

/* This prints out the DOM Element as a JavaScript object to the console */
console.dir(document);
// document is an object that allows me to gain access to the DOM

/* Find An Element By It's id */
const element1 = document.getElementById('find-by-id');

console.dir(element1);

/* Find An Element By It's Selector (like css) */
const element2 = document.querySelector('.selector-example');

console.dir(element2);

/* Find elements by query selector and it will return an array of elements */
const elements = document.querySelectorAll('.selector-example');

console.dir(elements);
