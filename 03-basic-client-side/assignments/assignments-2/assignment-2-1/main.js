// Option 1
const title1El = document.getElementById('title-1');

title1El.innerText = 'This Course Is Awesome!';

// Option 2
const title2El = document.querySelector('#title-2');

title2El.innerText = 'This Course Is Awesome!';

// Option 3
const elements = document.querySelectorAll('#title-3');
const title3El = elements[0];

title3El.innerText = 'This Course Is Awesome!';
