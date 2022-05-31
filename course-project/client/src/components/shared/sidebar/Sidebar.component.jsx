import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.css';

import { AuthContext } from '../../../contexts/Auth.context';

const Sidebar = (props) => {
    const authContextValue = useContext(AuthContext);

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

                    {!authContextValue.userToken && (
                        <li className="sidebar-item">
                            <Link to="/login" onClick={props.hideSidebar}>
                                Login
                            </Link>
                        </li>
                    )}

                    {authContextValue.userToken && (
                        <li className="sidebar-item">
                            <Link to="" onClick={props.hideSidebar}>
                                Logout
                            </Link>
                        </li>
                    )}

                    {authContextValue.userToken && (
                        <li className="sidebar-item">
                            <Link to="" onClick={props.hideSidebar}>
                                Tasks
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
