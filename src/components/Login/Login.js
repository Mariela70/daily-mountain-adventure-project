import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-register.css';
const Login = () => {
  const {userLoginHandler} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
  
    e.preventDefault();

    const {
      email,
      password,

    } = Object.fromEntries(new FormData(e.target));
    authService.login(email, password)
    .then(authData => {
      userLoginHandler(authData);
      navigate('/');
    })
    .catch(() => {
      navigate('/');

    });
  };
  return (
    <section id="login-page">
      <div className="loginSection">
        <form id="login" onSubmit={onSubmit}>
          <h2>Login</h2>
          <ul className="login">
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="inputFields"
                id="email"
                name="email"
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
                placeholder="*******"
              />
            </li>
            <li id="center-btn">
              <input type="submit" className = "login-btn" value="Login" />
              <p className="fiels">
                <span>
                  If you don't have profile click <Link to="/register">here</Link>
                </span>
              </p>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default Login;