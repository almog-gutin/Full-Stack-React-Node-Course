import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './page-not-found.styles.css';

import Loader from '../../components/shared/loader/Loader.component';

const PageNotFound = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleClick = () => navigate('/');

    return isLoading ? (
        <Loader />
    ) : (
        <main className="page-not-found">
            <h1>404</h1>

            <button type="button" onClick={handleClick}>
                Go Back Home
            </button>
        </main>
    );
};

export default PageNotFound;
