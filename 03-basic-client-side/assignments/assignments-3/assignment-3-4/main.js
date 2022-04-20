const modalContainer = document.getElementById('modal-container');
const showModalBtn = document.getElementById('show-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

showModalBtn.addEventListener('click', () => {
    modalContainer.classList.add('modal-show');
});

closeModalBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal-show');
});
