import React from 'react';

import Header from './components/shared/header/Header.component';
import Footer from './components/shared/footer/Footer.component';
import HomePage from './pages/home-page/HomePage.component';
// import LoginPage from './pages/login-page/LoginPage.component';
import SignupPage from './pages/signup-page/SignupPage.component';

const App = () => {
    return (
        <div>
            <Header />

            {/* <HomePage /> */}
            {/* <LoginPage /> */}
            <SignupPage />

            <Footer />
        </div>
    );
};

export default App;
