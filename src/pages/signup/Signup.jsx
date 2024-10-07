import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>
            - <br />
            BugZapp SignUp <br /> -
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            porro expedita eius nisi eveniet quo accusantium praesentium
            pariatur,
          </p>
          <span>Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
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
