import React, { useReducer, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import './login-page.styles.css';

import loginReducer, { LOGIN_FORM_INITITAL_STATE } from '../../reducers/login-form.reducer';
import { updateEmailAction, updatedPasswordAction } from '../../actions/login-form.actions';

import Card from '../../components/card/Card.component';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';
import Loader from '../../components/shared/loader/Loader.component';

import { doesStringContainANumber } from '../../utils/string.utils';

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Reducer State
    const [loginFormState, dispatchLoginFormState] = useReducer(loginReducer, LOGIN_FORM_INITITAL_STATE);

    // Validate The Email Input - Function that validates the users input for the email input tag
    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            dispatchLoginFormState(updateEmailAction(emailInput, false, 'Please enter an email address'));

            return;
        }

        if (!isEmail(emailInput)) {
            dispatchLoginFormState(updateEmailAction(emailInput, false, 'Please enter a valid email address'));

            return;
        }

        dispatchLoginFormState(updateEmailAction(emailInput, true, ''));
    };

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim();

        if (passwordInput === '') {
            dispatchLoginFormState(updatedPasswordAction(passwordInput, false, 'Please enter a password'));

            return;
        }

        if (
            !(passwordInput.length > 6 && passwordInput.length < 20) ||
            !doesStringContainANumber(passwordInput) ||
            passwordInput === 'password1'
        ) {
            dispatchLoginFormState(
                updatedPasswordAction(
                    passwordInput,
                    false,
                    'You must enter a password with the length of 8-20 characters and mist contain at least 1 number'
                )
            );

            return;
        }

        dispatchLoginFormState(updatedPasswordAction(passwordInput, true, ''));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const values = loginFormState.values;
        const validities = loginFormState.validities;

        if (values.email === '' || values.password === '' || !validities.email || !validities.password) {
            return;
        }

        console.log('LOGIN');
    };

    useEffect(() => {
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

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <FormInputContainer
                            id="email"
                            labelText="Email:"
                            required={false}
                            type="email"
                            isValid={loginFormState.validities.email}
                            errorMessage={loginFormState.errorMessages.email}
                            handleInput={handleEmailInput}
                        />

                        <FormInputContainer
                            id="password"
                            labelText="Password:"
                            required={false}
                            type="password"
                            isValid={loginFormState.validities.password}
                            errorMessage={loginFormState.errorMessages.password}
                            handleInput={handlePasswordInput}
                        />
                    </div>

                    <Link to="/signup" className="signup-link">
                        Don't have an account? Signup...
                    </Link>

                    <button type="submit">Login</button>
                </form>
            </Card>
        </main>
    );
};

export default LoginPage;

/* 
    <FormInputContainer
        id="email"
        labelText="Email:"
        required={true}
        type="email"
        isValid={isEmailValid}
        errorMessage={emailErrorMessage}
        handleInput={handleEmailInput}
    />

    <FormInputContainer
        id="password"
        labelText="Password:"
        required={false}
        type="password"
        isValid={isPasswordValid}
        errorMessage={passwordErrorMessage}
        handleInput={handlePasswordInput}
    />
*/

/* 
    <div className="form-input-container">
        <label className="form-label" htmlFor="email">
            Email:
        </label>

        <input onInput={handleEmailInput} className="form-input" id="email" type="text" required />

        {!isEmailValid && <div className="error-message">{emailErrorMessage}</div>}
        // {isEmailValid ? null : <div className="error-message">{emailErrorMessage}</div>} 
    </div>

    <div className="form-input-container">
        <label htmlFor="password">Password:</label>

         <input
            onInput={handlePasswordInput}
            className="form-input"
            id="password"
            type="password"
            required
        />

        {!isPasswordValid && <div className="error-message">{passwordErrorMessage}</div>}
    </div>
*/
