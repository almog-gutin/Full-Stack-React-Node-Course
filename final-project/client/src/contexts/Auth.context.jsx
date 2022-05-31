import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const token = localStorage.getItem('user-token');
    const INITAL_STATE = token ? token : null;

    const [userToken, setUserToken] = useState(INITAL_STATE);

    const value = {
        userToken: userToken,
        setUserToken: setUserToken,
    };

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
