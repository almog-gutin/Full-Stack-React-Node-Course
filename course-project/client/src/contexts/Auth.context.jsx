import { createContext, useState } from 'react';

// Creating a context fro the application
export const AuthContext = createContext();

// Creatinga component for accessing the context inside the app
// It is faster to pull the data from the context rather than pulling
// from localStorage/sessionStorage
const AuthContextProvider = (props) => {
    const token = localStorage.getItem('user-token');
    const INITAL_STATE = token ? token : null;

    const [userToken, setUserToken] = useState(INITAL_STATE);

    // This is the value that will be available for all components that have access to
    // this context
    const value = {
        userToken: userToken,
        setUserToken: setUserToken,
    };

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
