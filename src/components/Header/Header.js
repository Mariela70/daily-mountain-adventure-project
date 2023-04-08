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
            <div>
                {user.email && <span>Welcome <span>{user.email}</span></span>}
                
                
                <li>
                    <Link to="/catalog">All Posts</Link>
                </li>

                {user.email
                    ? <div className="logged">

                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>

                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </div>
                    : <div className="guest">
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </div>
                }
            </div>

        </nav>

    );
};

export default Header;