const mainEl = document.querySelector('main');
const squaresEl = document.querySelectorAll('.square');

for (let i = 0; i < squaresEl.length; i++) {
    squaresEl[i].addEventListener('click', (event) => {
        mainEl.removeChild(event.target);
    });
}
