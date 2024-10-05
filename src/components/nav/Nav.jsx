import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

//Insert the FAKEApi data_____________________
import CurrentUser from "../../FakeAPI/currentUserData";

//Insert Comps
import DarkMode from "../darkmode/DarkMode";
//DONt forget the fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Nav() {
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
        </div>
      </div>
    </nav>
  );
}
export default Nav;
