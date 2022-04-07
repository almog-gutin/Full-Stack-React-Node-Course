/* How To Add An Event To An Element */
const clickBtnEl = document.getElementById('click-btn');
clickBtnEl.addEventListener('click', () => {
    console.log('THe button was clicked on!');
});

const helloWorldBtnEl = document.getElementById('hello-world-btn');
const helloWorldContainer = document.getElementById('container-hello-world');

helloWorldBtnEl.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Hello World';

    helloWorldContainer.appendChild(p);
});

const squareEl = document.getElementById('square');
const changeColorBtn = document.getElementById('change-color-btn');
console.dir(squareEl);

changeColorBtn.addEventListener('click', () => {
    if (squareEl.classList.contains('black')) {
        squareEl.classList.remove('black');
        squareEl.classList.add('red');

        return;
    }

    squareEl.classList.remove('red');
    squareEl.classList.add('black');
});

// Mouse Events
const loginSubmitBtn = document.getElementById('login-submit-btn');

// Mouse over
// loginSubmitBtn.addEventListener('mouseover', () => {
//     loginSubmitBtn.classList.add('hovered-button');
// });

// Mouse Enter
loginSubmitBtn.addEventListener('mouseenter', () => {
    // console.log('entered');

    loginSubmitBtn.classList.add('hovered-button');
});

// Mouse Leave
loginSubmitBtn.addEventListener('mouseleave', () => {
    // console.log('left');

    loginSubmitBtn.classList.remove('hovered-button');
});

// Input Event
const inputEl = document.getElementById('text-input');
const inputTitleEl = document.getElementById('input-title');

// inputEl.addEventListener('input', () => {
//     const userInput = inputEl.value;

//     inputTitleEl.innerText = userInput.length === 0 ? 'Placeholder' : userInput;
// });

// event.target is the element that the event took place on.
inputEl.addEventListener('input', (event) => {
    // console.log(event);
    const userInput = event.target.value;

    inputTitleEl.innerText = userInput.length === 0 ? 'Placeholder' : userInput;
});

const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const emailErrorMessage = document.getElementById('email-error-message');
const passwordErrorMessage = document.getElementById('password-error-message');

emailEl.addEventListener('input', (event) => {
    const emailInput = email.value.trim();

    if (emailInput.includes('@') && emailInput.endsWith('.com')) {
        emailErrorMessage.classList.remove('show');
    } else {
        emailErrorMessage.classList.add('show');
    }
});

passwordEl.addEventListener('input', (event) => {
    const passwordInput = event.target.value.trim();

    if (passwordInput.length >= 8 && passwordInput.length <= 16) {
        passwordErrorMessage.classList.remove('show');
    } else {
        passwordErrorMessage.classList.add('show');
    }
});

// Submit Event
const loginFormEl = document.getElementById('login-form');

loginFormEl.addEventListener('submit', (event) => {
    // This prevents the behavior of a certain element
    event.preventDefault();

    console.log('The form was not submitted');
});
