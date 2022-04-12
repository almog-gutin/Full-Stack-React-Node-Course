const circleEl = document.getElementById('circle');
let clicksCount = 0;

const changeCircleClass = (oldClass, newClass) => {
    circleEl.classList.remove(oldClass);
    circleEl.classList.add(newClass);
};

circleEl.addEventListener('click', () => {
    clicksCount++;

    if (clicksCount === 1) {
        changeCircleClass('circle-s', 'circle-m');

        return;
    }

    if (clicksCount === 2) {
        changeCircleClass('circle-m', 'circle-l');

        return;
    }

    if (clicksCount === 3) {
        changeCircleClass('circle-l', 'circle-xl');

        return;
    }

    if (clicksCount === 4) {
        changeCircleClass('circle-xl', 'circle-s');
        clicksCount = 0;

        return;
    }
});
