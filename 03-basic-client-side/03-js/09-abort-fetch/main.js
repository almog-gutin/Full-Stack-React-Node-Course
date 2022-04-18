const productsContainer = document.getElementById('products-container');
const imagesContainer = document.getElementById('images-container');

const getProductsAndCreate = async () => {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => {
            controller.abort();
        }, 100);

        const res = await fetch('https://fakestoreapi.com/products?limit=5', {
            signal: controller.signal,
        });
        clearTimeout(timer);

        const data = await res.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            const product = document.createElement('div');
            const h3 = document.createElement('h3');
            const img = document.createElement('img');
            const p = document.createElement('p');

            h3.innerText = element.title;
            img.src = element.image;
            img.alt = element.title;
            p.innerText = element.price;

            product.appendChild(h3);
            product.appendChild(img);
            product.appendChild(p);

            productsContainer.appendChild(product);
        }
    } catch (error) {
        alert('Something Went Wrong!');
    }
};

getProductsAndCreate();
