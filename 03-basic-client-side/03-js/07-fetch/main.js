/* How To Make A Function/Methods Asynchronous */
// Function Decloration
async function decloration() {}

// Function Expression
const expression = async function () {};

// Arrow Function
const arrow = async () => {};

const obj = {
    expression: async function () {},

    async expressionShortHand() {},
};

/* Fetch API */
const productsContainer = document.getElementById('products-container');
const imagesContainer = document.getElementById('images-container');

const getProductsAndCreate = async () => {
    try {
        // Here we preform the asynchronous commands
        const res = await fetch('https://fakestoreapi.com/products?limit=5');

        // json method is an asynchronous function that locates the data inside the response and converts from json format to an object
        const data = await res.json();
        // console.log(data);
        console.log(data);
        return data;

        // for (let i = 0; i < data.length; i++) {
        //     const element = data[i];

        //     const product = document.createElement('div');
        //     const h3 = document.createElement('h3');
        //     const img = document.createElement('img');
        //     const p = document.createElement('p');

        //     h3.innerText = element.title;
        //     img.src = element.image;
        //     img.alt = element.title;
        //     p.innerText = element.price;

        //     // imagesContainer.appendChild(img);

        //     product.appendChild(h3);
        //     product.appendChild(img);
        //     product.appendChild(p);

        //     productsContainer.appendChild(product);
        // }
    } catch (error) {
        // Here we preform commads if there was an error
        alert('Something Went Wrong!');
    }
};

const products = getProductsAndCreate();

console.log(products);
