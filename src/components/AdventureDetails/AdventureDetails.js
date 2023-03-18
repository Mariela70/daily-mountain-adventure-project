import { Link, useParams } from 'react-router-dom';
import './AdventureDetails.css';
const AdventureDetails =({
  adventures
}) => {
  const {adventureId} = useParams();
  const adventure = adventures.find(x => x._id === adventureId);
  return (
        
  <section id="details-page">
    <div className="main_card">
      <div className="card_left">
        <div className="card_datails">
          <h1>Title: {adventure.title}</h1>
          <h3>Created by an author: {adventure.user}</h3>
          <div className="card_animal">
            <p className="card-location">Location: {adventure.location}</p>
            <p className="card-date">Date: {adventure.date}</p>
          </div>
          <p className="disc">
            Description: {adventure.description}
          </p>
          {/* If there is no registered user, do not display buttons*/}
          <div className="social-btn">
            {/* Only for registered user and author of the post */}
            <Link to="#" className="edit-btn">
              Edit
            </Link>
            <Link to="#" className="del-btn">
              Delete
            </Link>
            {/* logged in users, who have not yet voted*/}
            <Link to="#" className="vote-up">
              UpVote +1
            </Link>
            <Link to="#" className="vote-down">
              DownVote -1
            </Link>
            {/* logged in user who has already voted*/}
            <p className="thanks-for-vote">Thanks For Voting</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    );
};
export default AdventureDetails;