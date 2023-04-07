import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AdventureContext } from '../../contexts/AdventureContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './AdventureDetails.css';
import * as adventureService from '../../services/adventureService';
import * as commentService from '../../services/commentService';

const AdventureDetails = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const { adventureId } = useParams();
  const { addComment, fetchAdventureDetails, selectAdventure, adventureRemove } = useContext(AdventureContext);

  const navigate = useNavigate();
  const currentAdventure = selectAdventure(adventureId);

  useEffect(() => {
    (async () => {
      const adventureDetails = await adventureService.getOne(adventureId);
      console.log(adventureDetails);
      const adventureComments = await commentService.getAll(adventureId);

      fetchAdventureDetails(adventureId, { ...adventureDetails, comments: adventureComments.map(x => `${x.user.email}: ${x.text}`) });
    })();
  }, [])

  const addCommentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const comment = formData.get('comment');

    commentService.create(adventureId, comment)
      .then(result => {
        addComment(adventureId, comment);
      });
  };


  const adventureDeleteHandler = () => {
    const confirmation = window.confirm('Are you sure you want to delete this adventure?')

    if (confirmation) {
      adventureService.remove(adventureId)
        .then(() => {
          adventureRemove(adventureId)
          navigate('/catalog')
        })
    }
  }


  const isOwner = currentAdventure._ownerId === user._id;
  return (
    <section className="details-page">
      <h1>Details</h1>
      <article className="details-card">

        <article className="details-card-text">
          <h2>Title: {currentAdventure.title}</h2>
          <h3>Date: {currentAdventure.date}</h3>
          <h3>Location: {currentAdventure.location}</h3>
          <h3>Description: {currentAdventure.description}</h3>

          <div className="comments">
            <h2>Comments:</h2>
            <ul>
              {currentAdventure.comments && currentAdventure.comments.map(x => (
                <li key={x} className="comment">
                  <p>{x}</p>
                </li>
              ))}
            </ul>
            {!currentAdventure.comments?.length && (
              <p className="no-comments-yet">No comments</p>
            )}
          </div>


          {isOwner &&

            <div className="buttons">
              <Link to={`/adventures/${adventureId}/edit`} className="btn-edit">Edit</Link>
              <button onClick={adventureDeleteHandler} className="btn-delete">
                Delete
              </button>
            </div>
          }
          {isAuthenticated &&
            <div>
              <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                  <textarea
                    name="comment"
                    placeholder="Comment......"
                  />

                  <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                  />
                </form>
              </article>

            </div>
          }


        </article>

        <article className="details-card-image">
          <img src={currentAdventure.imageUrl} alt={currentAdventure.title} />
        </article>

      </article>
    </section>

  );
};
export default AdventureDetails;