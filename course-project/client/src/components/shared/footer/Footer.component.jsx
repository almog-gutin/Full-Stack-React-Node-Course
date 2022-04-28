import React from 'react';
import './footer.styles.css';

// The footer component needs to take 100% of the window and its height should be 70px;
// The footer needs to have a span inside the element: Developed By "Your name".
// The span needs to be in the middle.
// Add a background color, add a text color.

const Footer = () => {
    return (
        <footer className="main-footer">
            <span>Developed By Almog Gutin</span>
        </footer>
    );
};

export default Footer;
