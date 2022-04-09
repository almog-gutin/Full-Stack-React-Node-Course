const squareEl = document.getElementById('square-1');

const changeSquareClass = (oldClass, newClass) => {
    squareEl.classList.remove(oldClass);
    squareEl.classList.add(newClass);
};

squareEl.addEventListener('mouseenter', () => {
    changeSquareClass('square-1', 'circle');
});

squareEl.addEventListener('mouseleave', () => {
    changeSquareClass('circle', 'square-1');
});
