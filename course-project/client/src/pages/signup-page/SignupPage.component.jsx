import React, { useState, useReducer, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import './signup-page.styles.css';

import { AuthContext } from '../../contexts/Auth.context';

import signupFormReducer, { SIGNUP_FORM_INITITAL_STATE } from '../../reducers/signup-form.reducer';
import * as signupFormActions from '../../actions/signup-form.actions';

import Card from '../../components/card/Card.component';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';
import Loader from '../../components/shared/loader/Loader.component';

import { doesStringContainANumber } from '../../utils/string.utils';

const SignupPage = () => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [signupFormState, dipatchSignUpFormState] = useReducer(signupFormReducer, SIGNUP_FORM_INITITAL_STATE);

    const [isLoading, setIsLoading] = useState(true);

    const handleFirstNameInput = (event) => {
        const firstNameInput = event.target.value.trim();

        if (firstNameInput === '') {
            dipatchSignUpFormState(
                signupFormActions.updateFirstName(firstNameInput, false, 'Please enter your first name')
            );

            return;
        }

        dipatchSignUpFormState(signupFormActions.updateFirstName(firstNameInput, true, ''));
    };

    const handleLastNameInput = (event) => {
        const lastNameInput = event.target.value.trim();

        if (lastNameInput === '') {
            dipatchSignUpFormState(
                signupFormActions.updateLastName(lastNameInput, false, 'Please enter your last name')
            );

            return;
        }

        dipatchSignUpFormState(signupFormActions.updateLastName(lastNameInput, true, ''));
    };

    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            dipatchSignUpFormState(
                signupFormActions.updateEmailAction(emailInput, false, 'Please enter an email address')
            );

            return;
        }

        if (!isEmail(emailInput)) {
            dipatchSignUpFormState(
                signupFormActions.updateEmailAction(emailInput, false, 'Please enter a valid email address')
            );

            return;
        }

        dipatchSignUpFormState(signupFormActions.updateEmailAction(emailInput, true, ''));
    };

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim();

        if (passwordInput === '') {
            dipatchSignUpFormState(
                signupFormActions.updatedPasswordAction(passwordInput, false, 'Please enter a password')
            );

            return;
        }

        if (
            !(passwordInput.length > 6 && passwordInput.length < 20) ||
            !doesStringContainANumber(passwordInput) ||
            passwordInput === 'password1'
        ) {
            dipatchSignUpFormState(
                signupFormActions.updatedPasswordAction(
                    passwordInput,
                    false,
                    'You must enter a password with the length of 8-20 characters and mist contain at least 1 number'
                )
            );

            return;
        }

        dipatchSignUpFormState(signupFormActions.updatedPasswordAction(passwordInput, true, ''));
    };

    const handleRepeatedPasswordInput = (event) => {
        const repeatedPasswordInput = event.target.value.trim();

        if (repeatedPasswordInput === '') {
            dipatchSignUpFormState(
                signupFormActions.updatedRepeatedPasswordAction(
                    repeatedPasswordInput,
                    false,
                    'Please enter your password again'
                )
            );

            return;
        }

        if (repeatedPasswordInput !== signupFormState.values.password) {
            dipatchSignUpFormState(
                signupFormActions.updatedRepeatedPasswordAction(
                    repeatedPasswordInput,
                    false,
                    "Your passwords don't match"
                )
            );

            return;
        }

        dipatchSignUpFormState(signupFormActions.updatedRepeatedPasswordAction(repeatedPasswordInput, true, ''));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !signupFormState.validities.firstName ||
            !signupFormState.validities.lastName ||
            !signupFormState.validities.email ||
            !signupFormState.validities.password ||
            !signupFormState.validities.repeatedPassword ||
            signupFormState.values.firstName === '' ||
            signupFormState.values.lastName === '' ||
            signupFormState.values.email === '' ||
            signupFormState.values.password === '' ||
            signupFormState.values.repeatedPassword === ''
        ) {
            return;
        }

        const signupFormValues = signupFormState.values;
        const data = {
            firstName: signupFormValues.firstName,
            lastName: signupFormValues.lastName,
            email: signupFormValues.email,
            password: signupFormValues.password,
        };

        try {
            // Fetch a response from the server - create a server request
            const response = await fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Check if the response is valid
            if (response.status !== 201) {
                throw new Error();
            }

            // Convert the response from JSON to object
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
        <main className="signup-page">
            <Card className="signup-page-card">
                <h1>Hello New User!</h1>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <FormInputContainer
                            id="first-name"
                            labelText="First Name:"
                            required={false}
                            isValid={signupFormState.validities.firstName}
                            errorMessage={signupFormState.errorMessages.firstName}
                            handleInput={handleFirstNameInput}
                        />

                        <FormInputContainer
                            id="last-name"
                            labelText="Last Name:"
                            required={false}
                            isValid={signupFormState.validities.lastName}
                            errorMessage={signupFormState.errorMessages.lastName}
                            handleInput={handleLastNameInput}
                        />

                        <FormInputContainer
                            id="email"
                            labelText="Email:"
                            required={false}
                            type="email"
                            isValid={signupFormState.validities.email}
                            errorMessage={signupFormState.errorMessages.email}
                            handleInput={handleEmailInput}
                        />

                        <FormInputContainer
                            id="password"
                            labelText="Password:"
                            required={false}
                            type="password"
                            isValid={signupFormState.validities.password}
                            errorMessage={signupFormState.errorMessages.password}
                            handleInput={handlePasswordInput}
                        />

                        <FormInputContainer
                            id="repeated-password"
                            labelText="Repeated Password:"
                            required={false}
                            type="password"
                            isValid={signupFormState.validities.repeatedPassword}
                            errorMessage={signupFormState.errorMessages.repeatedPassword}
                            handleInput={handleRepeatedPasswordInput}
                        />
                    </div>

                    <Link to="/login" className="login-link">
                        Have an account already? Login...
                    </Link>

                    <button type="submit">Signup</button>
                </form>
            </Card>
        </main>
    );
};

export default SignupPage;
