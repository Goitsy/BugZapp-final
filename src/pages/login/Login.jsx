import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth"; // Import Firebase authentication
import { auth, googleProvider } from "../login/Auth/firebaseConfig"; // Import Firebase config
import "./login.css"; // Ensure you have styles for your login
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; // For Google icon

import BugZappLogo from "../../assets/favicon/BugZappLogo.png";

// Hardcoded users
const fakeUsers = [
  { username: "admin", password: "12345" },
  { username: "user", password: "password" },
];

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fakeUsers = [
    { username: "admin", password: "12345" },
    { username: "user", password: "password" },
  ];

  // Simulated login
  const handleLogin = (e) => {
    e.preventDefault();

    const user = fakeUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  // Firebase Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Optional: Store user information
      const user = result.user;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <div className="login ">
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
          <span>Don't Have An Account?</span>
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>

        <form className="right" onSubmit={handleLogin}>
          <h2>Login</h2>
          <br />
          <input
            type="text"
            required
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <br />
          <button type="submit" className="btn btn-login">
            Login
          </button>
          <button className="btn-red" onClick={handleGoogleLogin}>
            Login with <FontAwesomeIcon icon={faGoogle} />
          </button>
          <div class="social-login">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
      <div class="footer">
        © 2024 BugZapp All rights reserved. developed by Goitseone Montsho &
        Abdelrahman Ibrahim
      </div>
    </div>
  );
};
