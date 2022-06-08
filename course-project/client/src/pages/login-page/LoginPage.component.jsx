import React, { useReducer, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import './login-page.styles.css';
import environments from '../../environments/environments';

import { AuthContext } from '../../contexts/Auth.context';

import loginReducer, { LOGIN_FORM_INITITAL_STATE } from '../../reducers/login-form.reducer';
import { updateEmailAction, updatedPasswordAction } from '../../actions/login-form.actions';

import Card from '../../components/card/Card.component';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';
import Loader from '../../components/shared/loader/Loader.component';

import { doesStringContainANumber } from '../../utils/string.utils';

const API_URL = environments.API_URL;

const LoginPage = () => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const values = loginFormState.values;
        const validities = loginFormState.validities;

        if (values.email === '' || values.password === '' || !validities.email || !validities.password) {
            return;
        }

        const loginFormValues = loginFormState.values;
        const data = {
            email: loginFormValues.email,
            password: loginFormValues.password,
        };

        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // response.ok is equal to true/false if the response returned status 200
            /// response.ok = response.status === 200
            if (!response.ok) {
                throw new Error();
            }

            const responseData = await response.json();
            const token = responseData.data.token;

            localStorage.setItem('user-token', token);
            authContextValue.setUserToken(token);

            navigate('/tasks');
        } catch (err) {
            alert('Something went wrong!');
        }
    };

    useEffect(() => {
        if (authContextValue.userToken) {
            navigate('/tasks');
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
