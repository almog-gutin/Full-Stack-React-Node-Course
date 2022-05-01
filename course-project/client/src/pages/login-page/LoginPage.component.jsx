/* 
    Create a Login page. 

    The Login page should take 100% of the window width and it should have a 
    minimum height of 100% of the window height - 80px. 

    In the middle of the Login page should be a card with rounded corners - 
    1. The card should contain a title: Welcome Back!
    2. The card should contain a form including an email input and a password input with labels 
    and a submit button: Login
*/

import React from 'react';
import './login-page.styles.css';

const LoginPage = () => {
    return (
        <main className="login-page">
            <div className="card">
                <h1>Welcome Back!</h1>

                <form className="login-form">
                    <div className="form-group">
                        <div className="form-input-container">
                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>

                            <input className="form-input" id="email" type="email" required />
                        </div>

                        <div className="form-input-container">
                            <label htmlFor="password">Password:</label>

                            <input className="form-input" id="password" type="password" required />
                        </div>
                    </div>

                    <a href="#" className="signup-link">
                        Don't have an account? Signup...
                    </a>

                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
