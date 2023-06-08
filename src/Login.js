import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};

  const loginToApp = () => {};

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt="LinkedIn"
      />
      <form>
        <input type="text" placeholder="Full Name (required if registering)" />
        <input type="text" placeholder="Picture URL (optional)" />
        <input type="email" placeholder="Email (required)" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
