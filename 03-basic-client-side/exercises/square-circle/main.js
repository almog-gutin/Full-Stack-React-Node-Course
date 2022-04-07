const squareCircleEl = document.getElementById('square-circle');

squareCircleEl.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('square')) {
        element.classList.remove('square');
        element.classList.add('circle');
    } else {
        element.classList.remove('circle');
        element.classList.add('square');
    }
});
