import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-page.styles.css';

import { AuthContext } from '../../contexts/Auth.context';

import Loader from '../../components/shared/loader/Loader.component';
import Card from '../../components/card/Card.component';
import LoginForm from './login-form/LoginForm.component';

const LoginPage = () => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authContextValue.userToken) {
            navigate('/');
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="login-page">
            <Card className="login-page-card">
                <h1>Welcome Back!</h1>

                <LoginForm />
            </Card>
        </main>
    );
};

export default LoginPage;
