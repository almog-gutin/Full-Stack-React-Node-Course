const loginFormActionTypes = {
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
};

export const updateEmailAction = (value, isValid, errorMessage) => {
    const action = {
        type: loginFormActionTypes.UPDATE_EMAIL,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    };

    return action;
};

export const updatedPasswordAction = (value, isValid, errorMessage) => {
    const action = {
        type: loginFormActionTypes.UPDATE_PASSWORD,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    };

    return action;
};

export default loginFormActionTypes;
