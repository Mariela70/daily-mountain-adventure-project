import { useContext } from 'react';
import * as authService from '../../services/authService';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const { userLoginHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      repeatPassword
    } = Object.fromEntries(new FormData(e.target));

    if (password !== repeatPassword) {
      return;
    }
    authService.register(firstName, lastName, email, password)
      .then(authData => {
        userLoginHandler(authData)
        navigate('/');
      });
  }
  return (
    <section id="register-page">
      <div className="register">
        <form className="signupForm" onSubmit={onSubmit}>
          <h2>Sign Up</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="first-name">First Name:</label>
              <input
                type="text"
                className="inputFields"
                id="first-name"
                name="firstName"
                defaultValue=""
                placeholder="Alex"
              />
            </li>
            <li>
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                className="inputFields"
                id="last-name"
                name="lastName"
                defaultValue=""
                placeholder="Petkov"
              />
            </li>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="inputFields"
                id="email"
                name="email"
                defaultValue=""
                placeholder="alex@gmail.com"
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="inputFields"
                id="password"
                name="password"
                placeholder="******"
              />
            </li>
            <li>
              <label htmlFor="repeat-password">Repeat-Password:</label>
              <input
                type="password"
                className="inputFields"
                id="repeat-password"
                name="repeatPassword"
                placeholder="******"
              />
            </li>
            <li id="register-btn">
              <input type="submit" className="register-btn" value="Register" />
              <p className="fiels">
                <span>
                  If you already have profile click <Link to="/login">here</Link>
                </span>
              </p>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default Register;