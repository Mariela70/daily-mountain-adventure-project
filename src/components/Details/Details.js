import './details.css';
const Detaials =() => {
    return (
        
  <section id="details-page">
    <div className="main_card">
      <div className="card_left">
        <div className="card_datails">
          <h1>Title: Two golden snub-nosed monkeys</h1>
          <h3>Created by an author: Alex Petkov</h3>
          <div className="card_animal">
            <p className="card-keyword">Keyword: Animal</p>
            <p className="card-location">Location: North America</p>
            <p className="card-date">Date: 18.02.2021</p>
          </div>
          <p className="disc">
            Description: Monkey, in general, any of nearly 200 species of tailed
            primate, with the exception of lemurs, tarsiers, and lorises.All but
            the durukuli of tropical Central and South America are active during
            the day, moving frequently in bands as they search for vegetation.
          </p>
          {/* If there is no registered user, do not display buttons*/}
          <div className="social-btn">
            {/* Only for registered user and author of the post */}
            <a href="#" className="edit-btn">
              Edit
            </a>
            <a href="#" className="del-btn">
              Delete
            </a>
            {/* logged in users, who have not yet voted*/}
            <a href="#" className="vote-up">
              UpVote +1
            </a>
            <a href="#" className="vote-down">
              DownVote -1
            </a>
            {/* logged in user who has already voted*/}
            <p className="thanks-for-vote">Thanks For Voting</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    );
};
export default Detaials;