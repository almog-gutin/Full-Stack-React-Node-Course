/* How To Create Async Functions */
async function decloration() {}

const expression = async function () {};

const arrow = async () => {};

const productsEl = document.getElementById('products-container');

const getData = async () => {
    try {
        // Here we preform the async commands/expressions
        const res = await fetch('https://fakestoreapi.com/products');

        // Converets the response to an object from the json notation
        const data = await res.json();

        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const product = data[i];

            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const img = document.createElement('img');
            const p = document.createElement('p');

            h3.innerText = product.title;
            img.src = product.image;
            p.innerText = product.price;

            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(p);

            productsEl.appendChild(div);
        }
    } catch (err) {
        // Here we catch the errors that happend in the try
    }
};

getData();
