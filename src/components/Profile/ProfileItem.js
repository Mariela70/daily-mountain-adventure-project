import { Link } from "react-router-dom";
import './profile.css';

const ProfileItem = ({
    adventure,
}) => {
    return (
        <div className="post">
      <div className="container">
        <img src={adventure.imageUrl} />
        <div className="info">
          <h2>{adventure.title}</h2>
        </div>
      </div>
      <Link to={`/catalog/${adventure._id}`} className="details-btn">
        Details
      </Link>
    </div>
    );
}

export default ProfileItem;