const Register = () => {
    return (
<section id="register-page">
  <div className="signupSection">
    
    <form action="#" method="" className="signupForm">
      <h2>Sign Up</h2>
      <ul className="noBullet">
        <li>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            className="inputFields"
            id="first-name"
            name=""
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
            name=""
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
            name=""
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
            name=""
            placeholder="******"
          />
        </li>
        <li>
          <label htmlFor="repeat-password">Repeat-Password:</label>
          <input
            type="password"
            className="inputFields"
            id="repeat-password"
            name=""
            placeholder="******"
          />
        </li>
        <li id="center-btn">
          <button id="join-btn">Join</button>
        </li>
      </ul>
    </form>
  </div>
</section>
    );
};
export default Register;