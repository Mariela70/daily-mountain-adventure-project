import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate, useParams } from 'react-router-dom';
import './AdventureDetails.css';
import * as adventureService from '../../services/adventureService';
import { AddComment } from "./AddComment/AddComment";
import * as commentService from '../../services/commentService';

const AdventureDetails = ({
  adventures,
  adventureDelete,
}) => {
  const [adventure, setAdventure] = useState({});
  const { user, isAuthenticated, email} = useContext(AuthContext);
  const { adventureId } = useParams();
 
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      adventureService.getOne(adventureId),
      commentService.getAll(adventureId),
    ]).then(([adventureData, comments]) => {
      setAdventure({
        ...adventureData,
        comments,
      });
    });
  }, [adventureId]);


  const adventureDeleteHandler = () => {
    const confirmation = window.confirm('Are you sure you want to delete this adventure?')

    if (confirmation) {
      adventureService.remove(adventureId)
        .then(() => {
          adventureDelete(adventureId)
          navigate('/catalog')
        })
    }
  }
  const adventureVoteHandler = () => {

  }
  const onCommentSubmit = async (values) => {
   const response = await commentService.create(adventureId, values.comment);
  
   setAdventure(state => ({
    ...state,
    comment: [
      ...state.comments,
      {
        ...response,
        author: {
          email
        }
      } 
    ],
   }));
  };

  const isOwner = adventure._ownerId === user._id;
  return (

    <section id="details-page">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>Title: {adventure.title}</h1>
            <h3>Created by an author: {user.email}</h3>
            <div className="card_animal">
              <p className="card-location">Location: {adventure.location}</p>
              <p className="card-date">Date: {adventure.date}</p>
            </div>
            <p className="disc">
              Description: {adventure.description}
            </p>

            <div className="comments">
              <h2>Comments:</h2>
              <ul>
                {adventure.comments && adventure.comments.map(x => (
                  <li key={x._id} className="comment">
                    <p>{x.author.email}: {x.comment}</p>
                  </li>
                ))}
              </ul>
              {!adventure.comments?.length && (
                <p className="no-comments-yet">No comments</p>
              )}
            </div>

            {isOwner && 
              <div className="social-btn">

                <Link to={`/adventures/${adventure._id}/edit`} className="edit-btn">
                  Edit
                </Link>
                <button onClick={adventureDeleteHandler} className="del-btn">
                  Delete
                </button>
              </div>
            }
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

            <button onClick={adventureVoteHandler} className="vote">
                  Vote
                </button>
              
            
          </div>
        </div>
      </div>
    </section>

  );
};
export default AdventureDetails;