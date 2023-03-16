import { useEffect, useState } from "react";
import * as adventureService from '../../services/adventureService';
import './catalog.css';
import LatestAdventure from "./LatestAdventure/LatestAdventure";
const Catalog = () => {
  const [adventures, setAdventure] = useState([]);

  useEffect(() => {
    adventureService.getAll()
      .then(result => {
        setAdventure(result);
      });
  }, []);
  return (
  
      <section id="catalog">
        <h1>All posts</h1>
        <div className="band">
          <h1>Latest Adventure</h1>

          {adventures.length > 0
            ? adventures.map(x => <LatestAdventure key={x._id} adventure={x} />)
            : <p className="no-offer">There are no posts yet...</p>
          }
        </div>
      </section>
  
  );
};
export default Catalog;