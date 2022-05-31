import signupFormActionTypes from '../actions/signup-form.actions';

export const SIGNUP_FORM_INITITAL_STATE = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',
    },
    validities: {
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        repeatedPassword: true,
    },
    errorMessages: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',
    },
};

const signupFormReducer = (state, action) => {
    switch (action.type) {
        case signupFormActionTypes.UPDATE_FIRST_NAME: {
            const updatedFirstNameValue = action.payload.value;
            const updatedIsFirstNameValid = action.payload.isValid;
            const updatedFirstNameErrorMessage = action.payload.errorMessage;

            const updatedValues = { ...state.values, firstName: updatedFirstNameValue };
            const updatedValidities = { ...state.validities, firstName: updatedIsFirstNameValid };
            const updatedErrorMessages = { ...state.errorMessages, firstName: updatedFirstNameErrorMessage };

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            };

            return updatedState;
        }
        case signupFormActionTypes.UPDATE_LAST_NAME: {
            const updatedLastNameValue = action.payload.value;
            const updatedIsLastNameValid = action.payload.isValid;
            const updatedLastNameErrorMessage = action.payload.errorMessage;

            const updatedValues = { ...state.values, lastName: updatedLastNameValue };
            const updatedValidities = { ...state.validities, lastName: updatedIsLastNameValid };
            const updatedErrorMessages = { ...state.errorMessages, lastName: updatedLastNameErrorMessage };

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            };

            return updatedState;
        }
        case signupFormActionTypes.UPDATE_EMAIL: {
            const updatedEmailValue = action.payload.value;
            const updatedIsEmailValid = action.payload.isValid;
            const updatedEmailErrorMessage = action.payload.errorMessage;

            const updatedValues = { ...state.values, email: updatedEmailValue };
            const updatedValidities = { ...state.validities, email: updatedIsEmailValid };
            const updatedErrorMessages = { ...state.errorMessages, email: updatedEmailErrorMessage };

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            };

            return updatedState;
        }
        case signupFormActionTypes.UPDATE_PASSWORD: {
            const updatedPasswordValue = action.payload.value;
            const updatedIsPasswordValid = action.payload.isValid;
            const updatedPasswordErrorMessage = action.payload.errorMessage;

            const updatedValues = { ...state.values, password: updatedPasswordValue };
            const updatedValidities = { ...state.validities, password: updatedIsPasswordValid };
            const updatedErrorMessages = { ...state.errorMessages, password: updatedPasswordErrorMessage };

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            };

            return updatedState;
        }
        case signupFormActionTypes.UPDATE_REPEATED_PASSWORD: {
            const updatedRepeatedPasswordValue = action.payload.value;
            const updatedIsRepeatedPasswordValid = action.payload.isValid;
            const updatedRepeatedPasswordErrorMessage = action.payload.errorMessage;

            const updatedValues = { ...state.values, repeatedPassword: updatedRepeatedPasswordValue };
            const updatedValidities = { ...state.validities, repeatedPassword: updatedIsRepeatedPasswordValid };
            const updatedErrorMessages = {
                ...state.errorMessages,
                repeatedPassword: updatedRepeatedPasswordErrorMessage,
            };

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            };

            return updatedState;
        }
        default: {
            return state;
        }
    }
};

export default signupFormReducer;
