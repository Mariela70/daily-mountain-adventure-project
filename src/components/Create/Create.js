import * as adventureService from '../../services/adventureService';
import { useContext } from 'react';
import { AdventureContext } from '../../contexts/AdventureContext';
import './create.css';
const Create = () => {
  const {adventureAdd} = useContext(AdventureContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const adventureData = Object.fromEntries(new FormData(e.target));

    adventureService.create(adventureData)
    .then(result => {
      adventureAdd(result)
    });
  };
    return (

  <section id="create-page">
    <div className="create">
      <form id="create" onSubmit={onSubmit}>
        <h2>Create Adventure</h2>
        <ul className="form">
          <li>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="inputFields"
              id="title"
              placeholder="Rila"
              name="title"
              
            />
          </li>
          <li>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              className="inputFields"
              id="location"
              placeholder="Bulgaria"
              name="location"
              
            />
          </li>
          <li>
            <label htmlFor="date">Date of creation:</label>
            <input
              type="text"
              className="inputFields"
              id="date"
              placeholder="21.03.2022"
              name="date"
              
            />
          </li>
          <li>
            <label htmlFor="imageUrl">Mountain image:</label>
            <input
              type="text"
              className="inputFields"
              id="imageUrl"
              placeholder="http:/..."
              name="imageUrl"
              
            />
          </li>
          <li>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              className="inputFields"
              name="description"
              placeholder="Mointain is..."
              defaultValue={""}
            />
          </li>
          <li id="create-btn">
          <input type="submit" className="create-btn" value="Create" />
          </li>
        </ul>
      </form>
    </div>
  </section>

    );
};
export default Create;