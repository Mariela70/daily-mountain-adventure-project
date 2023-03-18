import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './navigation.module.css';
const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav>
            <h1>
            <Link to="/">Adventure</Link>
            </h1>

            <ul className="menu">
                
                <li>
                    <Link to="/catalog">All Posts</Link>
                </li>
                {/* Logged users */}
                {user.email
                    ? <ul className="logged">
                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Posts of {"{"}
                                {"{"}{user.email}{"}"}
                                {"}"}
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                    : <ul className="guest">
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                }

            </ul>
        </nav>

    );
};

export default Header;