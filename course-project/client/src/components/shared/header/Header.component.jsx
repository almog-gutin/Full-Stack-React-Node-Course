import React from 'react';
import './header.styles.css';

// The header component needs to take 100% of the window and its height should be 80px;
// The header needs to have a title inside the element: Todo List on the left side.
// Add a background color, add a text color.

const Header = () => {
    return (
        <header className="main-header">
            <h1>Todo List</h1>
        </header>
    );
};

export default Header;
