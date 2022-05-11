import React from 'react';
import { useParams } from 'react-router-dom';
import './params-page.styles.css';

const ParamsPage = () => {
    const params = useParams();
    console.log(params);

    return (
        <main>
            <h1>Params Page</h1>

            <h2>{params.name}</h2>

            <h2>{params.gender}</h2>
        </main>
    );
};

export default ParamsPage;
