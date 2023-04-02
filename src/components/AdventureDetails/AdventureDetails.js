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
  const { user, isAuthenticated, email } = useContext(AuthContext);
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
    <section className="details-page">
      <h1>Details</h1>
      <article className="details-card">

        <article className="details-card-text">
          <h2>Title: {adventure.title}</h2>
          <h3>Author: { }</h3>
          <h3>Date: {adventure.date}</h3>
          <h3>Location: {adventure.location}</h3>
          <h3>Description: {adventure.description}</h3>

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

            <div className="buttons">
              <Link to={`/adventures/${adventure._id}/edit`} class="btn-edit">Edit</Link>
              <button onClick={adventureDeleteHandler} className="btn-delete">
                Delete
              </button>
            </div>
          }
          {isAuthenticated &&
            <div>

              <AddComment onCommentSubmit={onCommentSubmit} />

            </div>
          }


        </article>

        <article className="details-card-image">
          <img src={adventure.imageUrl} />
          <img alt="" />
        </article>

      </article>
    </section>

  );
};
export default AdventureDetails;