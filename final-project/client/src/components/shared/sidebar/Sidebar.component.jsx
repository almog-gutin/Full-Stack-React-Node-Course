import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import environments from '../../../environments/environments';
import './sidebar.styles.css';

import { AuthContext } from '../../../contexts/Auth.context';

const API_URL = environments.API_URL;

const Sidebar = (props) => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            const response = await fetch(`${API_URL}/users/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': authContextValue.userToken,
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
            alert('Something went wrong');
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
                            <Link to="/cart" onClick={props.hideSidebar}>
                                Cart
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
