import React, { useState, useEffect } from 'react';
import './useeffect-example.styles.css';

const UseEffectExample = () => {
    const [resourceType, setResourceType] = useState('products');
    const [name, setName] = useState('Yaniv');
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     console.log('ResourceType was changed');

    //     // Cleanup function
    //     return () => {
    //         console.log('The componened died and went to its grave!');
    //     };
    // });

    useEffect(() => {
        const controller = new AbortController();

        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products', {
                    signal: controller.signal,
                });
                const data = await res.json();

                console.log(data);
                setProducts(data);
            } catch (err) {
                alert('Something went wrong!');
            }
        };

        getProducts();

        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {
        console.log(name);
        console.log(products);
        console.log(resourceType);
    });

    // Creates an infinate loop - ROOKIE ERROR
    // useEffect(() => {
    //     name === 'Yaniv' ? setName('Tomer') : setName('Yaniv');
    // });

    return (
        <div>
            <h1>useEffect Example</h1>

            <button type="button" onClick={() => setResourceType('products')}>
                Products
            </button>
            <button type="button" onClick={() => setResourceType('categories')}>
                Categories
            </button>
            <button type="button" onClick={() => (name === 'Yaniv' ? setName('Tomer') : setName('Yaniv'))}>
                Change Name
            </button>

            <h2>{resourceType}</h2>
            <h2>{name}</h2>

            <div>
                <h2>Products</h2>

                {products.map((product) => (
                    <div>{product.title}</div>
                ))}
            </div>
        </div>
    );
};

export default UseEffectExample;
