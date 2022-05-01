/* 
    Create a Signup page. 

    The Signup page should take 100% of the window width and it should have a 
    minimum height of 100% of the window height - 80px. 

    In the middle of the Signup page should be a card with rounded corners - 
    1. The card should contain a title: Hello New User!
    2. The card should contain a form including a first name, last name, email, password, repeat password inputs input with labels and a submit button: Sign Up
*/

import React from 'react';
import './signup-page.styles.css';

const SignupPage = () => {
    return (
        <main className="signup-page">
            <div className="card">
                <h1>Hello New User!</h1>

                <form className="signup-form">
                    <div className="form-group">
                        <div className="form-input-container">
                            <label className="form-label" htmlFor="first-name">
                                First Name:
                            </label>

                            <input className="form-input" id="first-name" type="text" required />
                        </div>

                        <div className="form-input-container">
                            <label className="form-label" htmlFor="last-name">
                                Last Name:
                            </label>

                            <input className="form-input" id="last-name" type="text" required />
                        </div>

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

                        <div className="form-input-container">
                            <label htmlFor="repeat-password">Repeat Password:</label>

                            <input className="form-input" id="reapeat-password" type="password" required />
                        </div>
                    </div>

                    <a href="#" className="login-link">
                        Have an account already
                    </a>

                    <button type="submit">Signup</button>
                </form>
            </div>
        </main>
    );
};

export default SignupPage;
