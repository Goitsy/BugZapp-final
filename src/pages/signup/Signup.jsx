import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import BugZappLogo from "../../assets/favicon/BugZappLogo.png";

export const Signup = () => {
  const handleGoogleLogin = () => {
    // Here we simulate Google login success
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="signup">
      <div class="hlogo">
        Bug<span class="highlight">Zapp</span>
      </div>

      <div className="card shiny-effect">
        <div className="left">
          <div className="logo-img">
            <img src={BugZappLogo} alt="BugZapp Logo" />
          </div>
          <p>
            Welcome to BugZapp – social platform for programmers to connect,
            collaborate, and debug together. Join the community and level up
            your skills today!
          </p>
          <span>Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <button className="btn-red" onClick={handleGoogleLogin}>
            Login with <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>
        <form className="right">
          <h2>Sign Up</h2>
          <br />
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <br />
          <button type="submit" className="btn btn-login">
            Register
          </button>
        </form>
      </div>
      <div class="footer">© 2024 BugZapp All rights reserved.</div>
    </div>
  );
};
