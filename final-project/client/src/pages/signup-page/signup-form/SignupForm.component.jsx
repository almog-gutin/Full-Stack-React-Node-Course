import { useReducer, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import environments from '../../../environments/environments';
import './signup-form.styles.css';

import { AuthContext } from '../../../contexts/Auth.context';

import signupFormReducer, { SIGNUP_FORM_INITITAL_STATE } from '../../../reducers/signup-form.reducer';
import * as signupFormActions from '../../../actions/signup-form.actions';

import FormInputContainer from '../../../components/form/form-input-container/FormInputContainer.component';

const API_URL = environments.API_URL;

const SignupForm = () => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [signupFormState, dipatchSignUpFormState] = useReducer(signupFormReducer, SIGNUP_FORM_INITITAL_STATE);

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

        if (!isStrongPassword(passwordInput)) {
            dipatchSignUpFormState(
                signupFormActions.updatedPasswordAction(
                    passwordInput,
                    false,
                    'You must enter a password with at least 8 characters which includes one captial letter, number and specail character'
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
            const response = await fetch(`${API_URL}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status !== 201) {
                throw new Error();
            }

            const responseData = await response.json();
            const token = responseData.data.token;

            localStorage.setItem('user-token', token);
            authContextValue.setUserToken(token);

            navigate('/');
        } catch (err) {
            alert('Something went wrong!');
        }
    };

    return (
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
    );
};

export default SignupForm;
