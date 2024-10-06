import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  const handleGoogleLogin = () => {
    // Here we simulate Google login success
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>BugZapp</h2>
          <p>
            Welcome to BugZapp – the go-to social platform for programmers to
            connect, collaborate, and debug together. Join the community and
            level up your skills today!
          </p>
          <span>Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <button className="btn-red" onClick={handleGoogleLogin}>
            Login with Google
          </button>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
