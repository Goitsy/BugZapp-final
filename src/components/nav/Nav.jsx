import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./nav.css";

// Insert the FAKEApi data_____________________
import CurrentUser from "../../FakeAPI/currentUserData";

// Insert Comps
import DarkMode from "../darkmode/DarkMode";
// DON'T forget the fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
  faSignOutAlt, // Import the sign-out icon
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear user data
    navigate("/"); // Redirect to login page
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <h3 className="logo">BugZapp</h3>
          </Link>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" />
          </div>
        </div>

        <div className="nav-right">
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMode />
          <Link to="/">
            <FontAwesomeIcon icon={faBars} />
          </Link>

          <div className="user">
            <img src={CurrentUser.map((user) => user.ProfileImage)} alt="" />
            <h4>Moana Montinui</h4>
          </div>

          {/* Add Logout Button */}
          <button onClick={handleLogout} className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
