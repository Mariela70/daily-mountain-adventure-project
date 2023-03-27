import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as adventureService from '../../services/adventureService';
import ProfileItem from "./ProfileItem";
import { useParams } from "react-router-dom";
import './profile.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { adventureId } = useParams();
  const [adventures, setAdventure] = useState([]);

  useEffect(() => {
    adventureService.getMyAdventure(adventureId)
      .then(result => {
        setAdventure(result);
      });
  }, [adventureId]);
  return (
    <section id="my-posts">
      <h1>My post.</h1>
      <div className="my-container">
        <h1 className="user">Full Name: {user.firstname} {user.lastName}</h1>
        <h1 className="user-email">Email: {user.email}</h1>

        <article className="user-publications">
          <ul className="created-publications">
            <h3 className="created">Created publications: {adventures.length}</h3>
            {adventures.length > 0
              ? adventures.map(x => <ProfileItem key={x._id} adventure={x} />)
              : <p className="no-publication">There are no created publications yet...</p>
            }
          </ul>
        </article>
      </div>
    </section>


  );
};
export default Profile;