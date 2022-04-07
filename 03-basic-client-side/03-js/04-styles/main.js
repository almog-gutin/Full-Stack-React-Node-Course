/* How To Add Styles To Elements From JavaScript */
// Accessing The Inline Styles
const squareEl = document.getElementById('square');
console.log(squareEl.style);
squareEl.style.backgroundColor = 'aqua';

// Accessing The Class Name
const square2El = document.getElementById('square-2');
console.dir(square2El.className);

square2El.className = 'circle green';
console.log(square2El.className);

// Accessing The ClassList
const square3El = document.getElementById('square-3');
console.dir(square3El.classList);

square3El.classList.add('double-text');
console.log(square3El.classList);

square3El.classList.remove('flex', 'double-text');
console.log(square3El.classList);

const doesSqaureExists = square3El.classList.contains('square');
console.log(doesSqaureExists);
if (doesSqaureExists) {
    square3El.classList.remove('square');
    square3El.classList.add('card');
}
