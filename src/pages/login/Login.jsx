import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
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
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="text" required placeholder="password" />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
