const form = document.querySelector('form');
const calcMessage = document.querySelector('p');

const calc = (num1, num2, operator) => {
    console.log(num1, num2);
    switch (operator) {
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num1 + num2;
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const num1 = document.getElementById('num-1').value;
    const num2 = document.getElementById('num-2').value;
    const operator = document.querySelector('select').value;

    if (num1 === '' || num2 === '') {
        return;
    }

    calcMessage.innerText = `Here is the calculation: ${calc(+num1, +num2, operator)}`;
});
