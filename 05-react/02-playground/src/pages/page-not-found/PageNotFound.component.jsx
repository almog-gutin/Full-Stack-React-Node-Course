import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page-not-found.styles.css';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('page-1');
    };

    const handleClick2 = () => {
        navigate('page-2');
    };

    return (
        <main>
            <h1>404</h1>

            <button type="button" onClick={handleClick}>
                Go To Page 1
            </button>

            <button type="button" onClick={handleClick2}>
                Go To Page 2
            </button>
        </main>
    );
};

export default PageNotFound;
