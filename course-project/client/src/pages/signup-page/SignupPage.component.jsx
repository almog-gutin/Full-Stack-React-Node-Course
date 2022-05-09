/* 
    Create a Signup page. 

    The Signup page should take 100% of the window width and it should have a 
    minimum height of 100% of the window height - 80px. 

    In the middle of the Signup page should be a card with rounded corners - 
    1. The card should contain a title: Hello New User!
    2. The card should contain a form including a first name, last name, email, password, repeat password inputs input with labels and a submit button: Sign Up
*/

import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import './signup-page.styles.css';

import Card from '../../components/card/Card.component';
import FormInputContainer from '../../components/form/form-input-container/FormInputContainer.component';

import { doesStringContainANumber } from '../../utils/string.utils';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
    const [lastName, setLastName] = useState('');
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [isRepeatedPasswordValid, setIsRepeatedPasswordValid] = useState(true);
    const [repeatedPasswordErrorMessage, setRepeatedPasswordErrorMessage] = useState('');

    const handleFirstNameInput = (event) => {
        const firstNameInput = event.target.value.trim();
        setFirstName(firstNameInput);

        if (firstNameInput === '') {
            setFirstNameErrorMessage('Please enter your first name');
            setIsFirstNameValid(false);

            return;
        }

        setFirstNameErrorMessage('');
        setIsFirstNameValid(true);
    };

    const handleLastNameInput = (event) => {
        const lastNameInput = event.target.value.trim();
        setLastName(lastNameInput);

        if (lastNameInput === '') {
            setLastNameErrorMessage('Please enter your last name');
            setIsLastNameValid(false);

            return;
        }

        setLastNameErrorMessage('');
        setIsLastNameValid(true);
    };

    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();
        setEmail(emailInput);

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

        setEmailErrorMessage('');
        setIsEmailValid(true);
    };

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim();
        setPassword(passwordInput);

        if (passwordInput === '') {
            setPasswordErrorMessage('Please enter a password');
            setIsPasswordValid(false);

            return;
        }

        if (
            !(passwordInput.length > 6 && passwordInput.length < 20) ||
            !doesStringContainANumber(passwordInput) ||
            passwordInput === 'password1'
        ) {
            setPasswordErrorMessage(
                'You must enter a password with the length of 8-20 characters and mist contain at least 1 number'
            );
            setIsPasswordValid(false);

            return;
        }

        setPasswordErrorMessage('');
        setIsPasswordValid(true);
    };

    const handleRepeatedPasswordInput = (event) => {
        const repeatedPasswordInput = event.target.value.trim();
        setRepeatedPassword(repeatedPasswordInput);

        if (repeatedPasswordInput === '') {
            setRepeatedPasswordErrorMessage('Please enter your password again');
            setIsRepeatedPasswordValid(false);

            return;
        }

        if (repeatedPasswordInput !== password) {
            setRepeatedPasswordErrorMessage("Your passwords don't match");
            setIsRepeatedPasswordValid(false);

            return;
        }

        setRepeatedPasswordErrorMessage('');
        setIsRepeatedPasswordValid(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !isFirstNameValid ||
            firstName === '' ||
            !isLastNameValid ||
            lastName === '' ||
            !isEmailValid ||
            email === '' ||
            !isPasswordValid ||
            password === '' ||
            !isRepeatedPasswordValid ||
            repeatedPassword === ''
        ) {
            return;
        }

        console.log('SIGNUP');
    };

    return (
        <main className="signup-page">
            <Card className="signup-page-card">
                <h1>Hello New User!</h1>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="form-input-container">
                            <label className="form-label" htmlFor="first-name">
                                First Name:
                            </label>

                            <input onInput={handleFirstNameInput} className="form-input" id="first-name" type="text" />

                            {!isFirstNameValid && <div className="error-message">{firstNameErrorMessage}</div>}
                        </div>

                        <div className="form-input-container">
                            <label className="form-label" htmlFor="last-name">
                                Last Name:
                            </label>

                            <input onInput={handleLastNameInput} className="form-input" id="last-name" type="text" />

                            {!isLastNameValid && <div className="error-message">{lastNameErrorMessage}</div>}
                        </div>

                        <div className="form-input-container">
                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>

                            <input onInput={handleEmailInput} className="form-input" id="email" type="email" />

                            {!isEmailValid && <div className="error-message">{emailErrorMessage}</div>}
                        </div>

                        <div className="form-input-container">
                            <label htmlFor="password">Password:</label>

                            <input onInput={handlePasswordInput} className="form-input" id="password" type="password" />

                            {!isPasswordValid && <div className="error-message">{passwordErrorMessage}</div>}
                        </div>

                        <div className="form-input-container">
                            <label htmlFor="repeat-password">Repeat Password:</label>

                            <input
                                onInput={handleRepeatedPasswordInput}
                                className="form-input"
                                id="reapeat-password"
                                type="password"
                            />

                            {!isRepeatedPasswordValid && (
                                <div className="error-message">{repeatedPasswordErrorMessage}</div>
                            )}
                        </div>
                    </div>

                    <a href="#" className="login-link">
                        Have an account already
                    </a>

                    <button type="submit">Signup</button>
                </form>
            </Card>
        </main>
    );
};

export default SignupPage;

/* 
    <FormInputContainer
        id="first-name"
        labelText="First Name:"
        required={false}
        isValid={isFirstNameValid}
        errorMessage={firstNameErrorMessage}
        handleInput={handleFirstNameInput}
    />

    <FormInputContainer
        id="last-name"
        labelText="Last Name:"
        required={false}
        isValid={isLastNameValid}
        errorMessage={lastNameErrorMessage}
        handleInput={handleLastNameInput}
    />

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

    <FormInputContainer
        id="repeated-password"
        labelText="Repeated Password:"
        required={false}
        type="password"
        isValid={isRepeatedPasswordValid}
        errorMessage={repeatedPasswordErrorMessage}
        handleInput={handleRepeatedPasswordInput}
    />
*/

/* 
    <div className="form-input-container">
        <label className="form-label" htmlFor="first-name">
            First Name:
        </label>

        <input onInput={handleFirstNameInput} className="form-input" id="first-name" type="text" />

        {!isFirstNameValid && <div className="error-message">{firstNameErrorMessage}</div>}
    </div>

    <div className="form-input-container">
        <label className="form-label" htmlFor="last-name">
            Last Name:
        </label>

        <input onInput={handleLastNameInput} className="form-input" id="last-name" type="text" />

        {!isLastNameValid && <div className="error-message">{lastNameErrorMessage}</div>}
    </div>

    <div className="form-input-container">
        <label className="form-label" htmlFor="email">
            Email:
        </label>

        <input onInput={handleEmailInput} className="form-input" id="email" type="email" />

        {!isEmailValid && <div className="error-message">{emailErrorMessage}</div>}
    </div>

    <div className="form-input-container">
        <label htmlFor="password">Password:</label>

        <input onInput={handlePasswordInput} className="form-input" id="password" type="password" />

        {!isPasswordValid && <div className="error-message">{passwordErrorMessage}</div>}
    </div>

    <div className="form-input-container">
        <label htmlFor="repeat-password">Repeat Password:</label>

        <input
            onInput={handleRepeatedPasswordInput}
            className="form-input"
            id="reapeat-password"
            type="password"
        />

        {!isRepeatedPasswordValid && (
            <div className="error-message">{repeatedPasswordErrorMessage}</div>
        )}
    </div>
*/
