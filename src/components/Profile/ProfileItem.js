import { Link } from "react-router-dom";
import './profile.css';

const ProfileItem = ({
    adventure,
}) => {
    return (
        <article className="adventure">
            <img className="adventure-img" src={adventure.imageUrl} alt={adventure.title} />
            <Link className="link-details" to={`/catalog/${adventure._id}`}>Details</Link>
        </article>
    );
}

export default ProfileItem;