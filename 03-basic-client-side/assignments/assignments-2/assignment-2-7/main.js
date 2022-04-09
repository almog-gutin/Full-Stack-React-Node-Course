const countBtn = document.getElementById('count-btn');
const message = document.querySelector('main h1');
let clicksCount = 0;

countBtn.addEventListener('click', () => {
    clicksCount++;

    const updatedMessage = message.innerText.slice(0, 30).concat(clicksCount);
    message.innerText = updatedMessage;
});
