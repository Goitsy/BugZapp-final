import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth"; // Import Firebase authentication
import { auth, googleProvider } from "../login/Auth/firebaseConfig"; // Import Firebase config
import "./login.css"; // Ensure you have styles for your login

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
          <button onClick={handleGoogleLogin} className="btn btn-google">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};
