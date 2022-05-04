/* 
    Create a Login page. 

    The Login page should take 100% of the window width and it should have a 
    minimum height of 100% of the window height - 80px. 

    In the middle of the Login page should be a card with rounded corners - 
    1. The card should contain a title: Welcome Back!
    2. The card should contain a form including an email input and a password input with labels 
    and a submit button: Login
*/

import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import './login-page.styles.css';

import Card from '../../components/card/Card.component';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';

const LoginPage = () => {
    // Component States
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    // Validate The Email Input - Function that validates the users input for the email input tag
    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            setEmailErrorMessage('Please enter an email address');
            setIsEmailValid(false);

            return;
        }

        if (!isEmail(emailInput)) {
            setEmailErrorMessage('Please enter a valid email address');
            setIsEmailValid(false);

            return;
        }

        setIsEmailValid(true);
    };

    return (
        <main className="login-page">
            <Card className="login-page-card">
                <h1>Welcome Back!</h1>

                <form className="login-form">
                    <div className="form-group">
                        <div className="form-input-container">
                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>

                            <input onInput={handleEmailInput} className="form-input" id="email" type="text" required />

                            {!isEmailValid && <div className="error-message">{emailErrorMessage}</div>}
                            {/* {isEmailValid ? null : <div className="error-message">{emailErrorMessage}</div>} */}
                        </div>

                        <div className="form-input-container">
                            <label htmlFor="password">Password:</label>

                            <input className="form-input" id="password" type="password" required />
                        </div>
                    </div>

                    <a href="#" className="signup-link">
                        Don't have an account? Signup...
                    </a>

                    <button type="submit">Login</button>
                </form>
            </Card>
        </main>
    );
};

export default LoginPage;

/* 
    <FormInputContainer id="email" labelText="Email:" required={true} type="email" />

    <FormInputContainer id="password" labelText="Password:" required={true} type="password" />
*/
