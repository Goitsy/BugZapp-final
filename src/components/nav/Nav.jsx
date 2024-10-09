import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./nav.css";
import BugZappLogo from "../../assets/favicon/BugZappLogo.png";

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
      <div className="logo-imgnav">
        <img src={BugZappLogo} alt="BugZapp Logo" />
      </div>
      <div className="hlogonav">
        Bug<span class="highlight">Zapp</span>
      </div>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/"></Link>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" placeholder="Search BugZapp" />
          </div>
        </div>

        <div className="nav-right">
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBell} />
          </Link>

          <div className="usern">
            <img src={CurrentUser.map((user) => user.ProfileImage)} alt="" />
          </div>
        </div>
      </div>

      <div className="lamp">
        <DarkMode />
      </div>

      {/* Add Logout Button */}
      <button onClick={handleLogout} className="logout-button">
        Logout{" "}
      </button>
    </nav>
  );
}

export default Nav;
