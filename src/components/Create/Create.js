import * as adventureService from '../../services/adventureService';
import './create.css';
const Create = ({addAdventureHandler}) => {

  const onSubmit = (e) => {
    e.preventDefault();

    const adventureData = Object.fromEntries(new FormData(e.target));

    adventureService.create(adventureData)
    .then(result => {
      addAdventureHandler(result)
    });
  };
    return (

  <section id="create-page">
    <div className="createSection">
      <form id="create" onSubmit={onSubmit}>
        <h2>Create Adventure</h2>
        <ul className="createForm">
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
              id="image"
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
          <li id="center-btn">
          <input type="submit" id="create-btn" value="Create" />
          </li>
        </ul>
      </form>
    </div>
  </section>

    );
};
export default Create;