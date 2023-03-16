import './login-register.css';
const Login = () => {
    return (
<section id="login-page">
  <div className="loginSection">
    <form action="#" method="" className="loginForm">
      <h2>Login</h2>
      <ul className="login">
        <li>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="inputFields"
            id="email"
            name=""
            placeholder="alex@gmail.com"
          />
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="inputFields"
            id="password"
            name=""
            placeholder="*******"
          />
        </li>
        <li id="center-btn">
          <button id="login-btn">Login</button>
        </li>
      </ul>
    </form>
  </div>
</section>
    );
};
export default Login;