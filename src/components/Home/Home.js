import { useContext } from "react";

import { AdventureContext } from "../../contexts/AdventureContext";
import './home.css';
import LatestAdventure from './LatestAdventure/LatestAdventure';
const Home = () => {
  const {adventures} =useContext(AdventureContext);
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="short-info">
            <h1>The best of mountain adventure!</h1>
          </div>
        </div>
      </section>

      <section id="home-page">

        <div className="offers">
          <h1>Latest Adventure</h1>

          {adventures.length > 0
            ? adventures.map(x => <LatestAdventure key={x._id} adventure={x} />)
            : <p className="no-offer">There are no posts yet...</p>
          }
        </div>

      </section>
    </>
  );
};

export default Home;