const imagesContainerEl = document.getElementById('images-container');

const createImageAndAppend = (imageURL, imageDesc) => {
    const img = document.createElement('img');
    img.src = imageURL;
    img.alt = imageDesc;

    imagesContainerEl.appendChild(img);
};

// Option 1
const imageURLInput1El = document.getElementById('image-url-1');
const imageDescInput1El = document.getElementById('image-desc-1');
const addImageBtn = document.getElementById('add-btn');

addImageBtn.addEventListener('click', () => {
    const imageURL = imageURLInput1El.value;
    const imageDesc = imageDescInput1El.value;

    createImageAndAppend(imageURL, imageDesc);

    imageURLInput1El.value = '';
    imageDescInput1El.value = '';
});

// Option 2
const imageFormEl = document.getElementById('image-form');
const imageURLInput2El = document.getElementById('image-url-2');
const imageDescInput2El = document.getElementById('image-desc-2');

imageFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const imageURL = imageURLInput2El.value;
    const imageDesc = imageDescInput2El.value;

    createImageAndAppend(imageURL, imageDesc);

    imageURLInput2El.value = '';
    imageDescInput2El.value = '';
});
