import { Link } from "react-router-dom";

const LatestAdventure = ({
  adventure
}) => {
  return (
    <div className="post">
      <div className="container">
        <img src={adventure.imageUrl} />
        <div className="info">
          <h2>{adventure.title}</h2>
        </div>
      </div>
      <p>
        {adventure.description}
      </p>
      <Link to={`/catalog/${adventure._id}`} className="details-btn">
        Details
      </Link>
    </div>
  );
};
export default LatestAdventure;