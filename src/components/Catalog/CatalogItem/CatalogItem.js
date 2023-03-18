import { Link } from "react-router-dom";

const CatalogItem = ({
    adventure
}) => {
    return (
<div className="flip flip-vertical">
        <div className="front">
          <img
            src={adventure.imageUrl}
            alt=""
          />
          
        </div>
        <div className="back">
          <h2>{adventure.title}</h2>
          <p>
            {adventure.description}
          </p>
          <Link to={`/catalog/${adventure._id}`} className="details">
            Details
          </Link>
        </div>
      </div>
    );
};
export default CatalogItem;