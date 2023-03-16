import './create-edit.css';
const Create = () => {
    return (

  <section id="create-page">
    <div className="createSection">
      <div className="info">
        <h2>Create your post, share information about adventure.</h2>
      </div>
      <form action="#" method="" className="createForm">
        <h2>Create Post</h2>
        <ul className="noBullet">
          <li>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="inputFields"
              id="title"
              placeholder="Two golden snub-nosed monkeys"
              name=""
              defaultValue=""
            />
          </li>
          <li>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              className="inputFields"
              id="location"
              placeholder="North America"
              name=""
              defaultValue=""
            />
          </li>
          <li>
            <label htmlFor="date">Date of creation:</label>
            <input
              type="text"
              className="inputFields"
              id="date"
              placeholder="18.02.2021"
              name=""
              defaultValue=""
            />
          </li>
          <li>
            <label htmlFor="image">Mountain image:</label>
            <input
              type="text"
              className="inputFields"
              id="image"
              placeholder="http:/..."
              name=""
              defaultValue=""
            />
          </li>
          <li>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              className="inputFields"
              name=""
              placeholder="Monkey is..."
              defaultValue={""}
            />
          </li>
          <li id="center-btn">
            <button id="create-btn">Create</button>
          </li>
        </ul>
      </form>
    </div>
  </section>

    );
};
export default Create;