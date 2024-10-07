import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Ensure you have styles for your login

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

  const handleLogin = (e) => {
    e.preventDefault();

    const user = fakeUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Simulate login success
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  // Google Auth Simulation
  const handleGoogleLogin = () => {
    // Here we simulate Google login success
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="card">
        <div className="left">
          <h2>
            - <br />
            BugZapp <br /> -
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            porro expedita eius nisi eveniet quo accusantium praesentium
            pariatur,
          </p>
          <span>Don't Have An Account?</span>
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <form className="right" onSubmit={handleLogin}>
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
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <div className="google-login">
          <p>Or login with Google:</p>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
      </div>
    </div>
  );
};
