import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './app-router.styles.css';

import Page1 from '../pages/page-1/Page1.component';
import Page2 from '../pages/page-2/Page2.component';
import PageNotFound from '../pages/page-not-found/PageNotFound.component';
import AccountPage from '../pages/users/account-page/AccountPage.component';
import DashboardPage from '../pages/users/dashboard-page/DashboardPage.component';
import ParamsPage from '../pages/params-page/ParamsPage.component';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <header className="main-header">
                <h1>React Router Example</h1>
            </header>

            <nav>
                <Link to="page-1">Page 1</Link>
                <Link to="page-2">Page 2</Link>
            </nav>

            <Routes>
                <Route path="page-1" element={<Page1 />} />
                <Route path="page-2" element={<Page2 />} />

                <Route path="users">
                    <Route path="account" element={<AccountPage />} />

                    <Route path="dashboard" element={<DashboardPage />} />
                </Route>

                <Route path="persons/:name/:gender" element={<ParamsPage />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <footer className="main-footer">
                <span>footer example</span>
            </footer>
        </BrowserRouter>
    );
};

export default AppRouter;
