import { Link } from "react-router-dom";
import "./leftbar.css";
//comp________________----
import CurrentUser from "../../FakeAPI/currentUserData";

//INSERT Images from fakAPi

import Friend from "../../assets/icons/1.png";
import Groups from "../../assets/icons/2.png";
import Market from "../../assets/icons/3.png";
import Watch from "../../assets/icons/4.png";
import gallery from "../../assets/icons/5.png";
import videos from "../../assets/icons/6.png";
import message from "../../assets/icons/7.png";

function LeftBar() {
  return (
    <div className="left-bar">
      <div className="left-container">
        <div className="menu">
          <Link to="/profile/id">
            <div className="userm">
              <img src={CurrentUser.map((user) => user.ProfileImage)} alt="" />
              <h4>Moana Montinui</h4>
            </div>
          </Link>
          <Link to="/">
            <div className="item">
              <img src={Friend} alt="" />
              <h4>Friends</h4>
            </div>
          </Link>
          <Link to="/">
            <div className="item">
              <img src={Groups} alt="" />
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to="/">
            <div className="item">
              <img src={Market} alt="" />
              <h4>Market</h4>
            </div>
          </Link>
          <Link to="/">
            <div className="item">
              <img src={Watch} alt="" />
              <h4>Watch</h4>
            </div>
          </Link>

          <Link to="/">
            <div className="item">
              <img src={message} alt="" />
              <h4>Message</h4>
            </div>
          </Link>
        </div>
        <hr />
        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
          <Link to="/">
            <div className="item">
              <img src={gallery} alt="" />
              <h4>Gallery</h4>
            </div>
          </Link>{" "}
          <Link to="/">
            <div className="item">
              <img src={videos} alt="" />
              <h4>Videos</h4>
            </div>
          </Link>
        </div>
      </div>
      <div class="footerl">
        © 2024 BugZapp All rights reserved. developed by Goitseone Montsho &
        Abdelrahman Ibrahim
      </div>
    </div>
  );
}

export default LeftBar;
