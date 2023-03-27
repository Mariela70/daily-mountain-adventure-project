import { Link } from 'react-router-dom';
import './notFound.css';
const NotFound = () => {
    return (
        <section className="error">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h1>The Page you are looking for doesn't exist. Go to <Link to="/">Adventure</Link>.</h1>
        </section>
    );
}

export default NotFound;