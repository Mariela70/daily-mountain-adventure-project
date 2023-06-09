import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdventureContext } from "../../contexts/AdventureContext";
import './edit.css';

import * as adventureService from '../../services/adventureService';
const Edit = () => {
  const [currentAdventure, setCurrentAdventure] = useState({});
  const {adventureEdit} = useContext(AdventureContext);
  const { adventureId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    adventureService.getOne(adventureId)
      .then(adventureData => {
        setCurrentAdventure(adventureData);
      })
  }, [adventureId])

  const onSubmit = (e) => {
    e.preventDefault();

    const adventureData = Object.fromEntries(new FormData(e.target));

    adventureService.edit(adventureId, adventureData)
    .then(result => {
      adventureEdit(adventureId, result);
      navigate(`/catalog/${adventureId}`)
    });
  };
  return (

    <section id="edit-page">
      <div className="edit">
        <div className="info">
          <h2>Edit your own post!</h2>
        </div>
        <form id="editForm" onSubmit={onSubmit}>
          <h2>Edit Post</h2>
          <ul className="edit">
            <li>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="inputFields"
                id="title"
                name="title"
                defaultValue={currentAdventure.title}
              />
            </li>
            <li>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                className="inputFields"
                id="location"
                name="location"
                defaultValue={currentAdventure.location}
              />
            </li>
            <li>
              <label htmlFor="date">Date of creation:</label>
              <input
                type="text"
                className="inputFields"
                id="date"
                name="date"
                defaultValue={currentAdventure.date}
              />
            </li>
            <li>
              <label htmlFor="imageUrl">Mountain image:</label>
              <input
                type="text"
                className="inputFields"
                id="imageUrl"
                name="imageUrl"
                defaultValue={currentAdventure.imageUrl}
              />
            </li>
            <li>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className="inputFields"
                name="description"
                defaultValue={currentAdventure.description}
              />
            </li>
            <li id="btn">
              <input type="submit" className="edit-btn" value="Edit" />
            </li>
          </ul>
        </form>
      </div>
    </section>

  );
};
export default Edit;