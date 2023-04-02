import { useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileItem from "./ProfileItem";
import './profile.css';

const Profile = ({adventures}) => {
  const { user } = useContext(AuthContext);

  return (
    <section id="my-posts">
      <h1>My post.</h1>
      <div className="my-container">
        <h1 className="user-email">Email: {user.email}</h1>

        <article className="user-publications">
          <ul className="created-publications">
            <h3 className="created">Created publications: {adventures.length}</h3>
            {adventures.length > 0
              ? adventures.map(x => <ProfileItem key={x._id} adventure={x} />)
              : <p className="no-offer">There are no created publications yet...</p>
            }
          </ul>
        </article>
      </div>
    </section>


  );
};
export default Profile;