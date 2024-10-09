import React from "react";
import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import BugZappLogo from "../../assets/favicon/BugZappLogo.png";

export const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage("Registration Successful!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <div className="signup">
      <div className="hlogo">
        Bug<span className="highlight">Zapp</span>
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
        <form className="right" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <br />

          <input
            type="text"
            id="username"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="btn btn-login1">
            Sign Up
          </button>

          {/* Success message directly after the submit button */}
          {successMessage && (
            <p className="success-message">
              {successMessage} You can now <Link to="/login">Login</Link>.
            </p>
          )}
        </form>
      </div>

      <div className="footer">
        © 2024 BugZapp All rights reserved. Developed by Goitseone Montsho &
        Abdelrahman Ibrahim.
      </div>
    </div>
  );
};
