const circleEl = document.getElementById('circle');
let clicksCount = 0;

const changeCircleClass = (oldClass, newClass) => {
    circleEl.classList.remove(oldClass);
    circleEl.classList.add(newClass);
};

circleEl.addEventListener('click', () => {
    if (clicksCount === 0) {
        changeCircleClass('circle-s', 'circle-m');
        clicksCount++;

        return;
    }

    if (clicksCount === 1) {
        changeCircleClass('circle-m', 'circle-l');
        clicksCount++;

        return;
    }

    if (clicksCount === 2) {
        changeCircleClass('circle-l', 'circle-xl');
        clicksCount++;

        return;
    }

    if (clicksCount === 3) {
        changeCircleClass('circle-xl', 'circle-s');
        clicksCount = 0;

        return;
    }
});
