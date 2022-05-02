/* 
    Create a page not found/404 page. 

    The 404 page should take 100% of the window width and it should have a 
    minimum height of 100% of the window height - 80px. 

    In the middle of the 404 page should contain the following - 
    1. A title: 404
    2. A button with a modern design that says - Go Back Home
*/

import React from 'react';
import './page-not-found.styles.css';

const PageNotFound = () => {
    return (
        <main className="page-not-found">
            <h1>404</h1>

            <button type="button">Go Back Home</button>
        </main>
    );
};

export default PageNotFound;
