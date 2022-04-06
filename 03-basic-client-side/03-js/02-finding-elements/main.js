// console.dir(document);
// document is an object that allows me to gain access to the DOM

// Find an element by its id
const element1 = document.getElementById('find-by-id');

console.log(element1);

// Find an element by its selector (like css)
const element2 = document.querySelector('.selector-example');

console.log(element2);

// Find elements by query selector and it will return an array of elements
const elements = document.querySelectorAll('.selector-example');

console.log(elements);
