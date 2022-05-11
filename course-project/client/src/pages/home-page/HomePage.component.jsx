/* 
    Create a home page. 

    The home page should take 100% of the window width and it should have a 
    minimum height of 100% of the window height - 80px. 

    In the middle of the home page should be a title: Home.
*/

import React, { useEffect, useState } from 'react';
import './home-page.styles.css';

import Loader from '../../components/shared/loader/Loader.component';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="home-page">
            <h1>Home</h1>
        </main>
    );
};

export default HomePage;
