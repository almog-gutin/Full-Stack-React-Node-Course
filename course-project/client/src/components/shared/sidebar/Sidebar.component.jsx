import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './sidebar.styles.css';

import { AuthContext } from '../../../contexts/Auth.context';

const Sidebar = (props) => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authContextValue.userToken}`,
                },
            });

            if (!response.ok) {
                throw new Error();
            }

            const responseObj = await response.json();
            const message = responseObj.message;
            alert(message);

            localStorage.removeItem('user-token');
            authContextValue.setUserToken(null);
            props.hideSidebar();
            navigate('/');
        } catch (err) {
            alert('Something went wrong!');
        }
    };

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
                            <button type="button" className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    )}

                    {authContextValue.userToken && (
                        <li className="sidebar-item">
                            <Link to="/tasks" onClick={props.hideSidebar}>
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
