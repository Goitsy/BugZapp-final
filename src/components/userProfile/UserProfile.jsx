import "./userProfile.css";

//FAKe API

import CurrenUserData from "../../FakeAPI/currentUserData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="cover-photos">
        <img src={CurrenUserData.map((user) => user.CoverPhoto)} alt="" />
      </div>
      <div className="profile-info">
        <img src={CurrenUserData.map((user) => user.ProfileImage)} alt="" />
        <div className="user-name">
          <h3>{CurrenUserData.map((user) => user.name)}</h3>
          <h5>{CurrenUserData.map((user) => user.username)}</h5>
        </div>
        <div className="profile-button">
          <Link to="/chatbox/id">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Link>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faFeed} /> Follow me
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div>

        <p className="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          animi voluptatum quis, architecto odit voluptate dignissimos expedita
          odio pariatur qui reprehenderit aliquam sint vitae? Repellendus nulla
          maxime natus ratione aperiam!
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
