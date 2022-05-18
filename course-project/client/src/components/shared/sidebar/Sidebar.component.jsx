import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.css';

const Sidebar = (props) => {
    return (
        <div className={`backdrop ${props.className}`}>
            <div className="sidebar">
                <button type="button" className="close-btn" onClick={props.hideSidebar}>
                    X
                </button>

                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <Link to="/" onClick={props.hideSidebar}>
                            Home
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/login" onClick={props.hideSidebar}>
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
