const btn = document.getElementById('btn');
const container = document.getElementById('container');
let clicksCount = 0;

const changeCircleClass = (element, className) => element.classList.add(className);

btn.addEventListener('click', () => {
    clicksCount++;

    const div = document.createElement('div');

    switch (clicksCount) {
        case 1:
            changeCircleClass(div, 'blue');
            break;
        case 2:
            changeCircleClass(div, 'red');
            break;
        case 3:
            changeCircleClass(div, 'green');
            clicksCount = 0;
            break;
    }

    container.appendChild(div);
});
