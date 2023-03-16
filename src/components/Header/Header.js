import { Link } from 'react-router-dom';
import './navigation.module.css';
const Header = () => {
    return (
            <nav>

                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/catalog">All Posts</Link>
                    </li>
                    {/* Logged users */}
                    <li>
                        <Link to="/create">Create Post</Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            Posts of {"{"}
                            {"{"}email-of-user{"}"}
                            {"}"}
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                    {/* Guest users */}
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        
    );
};

export default Header;