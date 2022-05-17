import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.css';

const Sidebar = ({ className, hideSidebar }) => {
    return (
        <div className={`backdrop ${className}`}>
            <div className="sidebar">
                <button type="button" className="close-btn" onClick={hideSidebar}>
                    X
                </button>

                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <Link to="/" onClick={hideSidebar}>
                            Home
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/login" onClick={hideSidebar}>
                            Login
                        </Link>
                    </li>
                    )
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
