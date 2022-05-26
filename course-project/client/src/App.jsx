import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/shared/header/Header.component';
import Footer from './components/shared/footer/Footer.component';
import HomePage from './pages/home-page/HomePage.component';
import LoginPage from './pages/login-page/LoginPage.component';
import SignupPage from './pages/signup-page/SignupPage.component';
import PageNotFound from './pages/page-not-found/PageNotFound.component';
import TasksPage from './pages/tasks-page/TasksPage.component';

import AuthContextProvider from './contexts/Auth.context';

const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Header />

                <Routes>
                    <Route path="" element={<HomePage />} />

                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />

                    <Route path="tasks" element={<TasksPage />} />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Footer />
            </AuthContextProvider>
        </BrowserRouter>
    );
};

export default App;
