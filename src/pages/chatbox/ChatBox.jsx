import "./chatbox.css";
import CurrenUserData from "../../FakeAPI/currentUserData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
const ChatBox = () => {
  const currentUser = CurrenUserData[0];

  return (
    <div className="chat-box">
      <div className="chat-box-top">
        <img src={currentUser?.ProfileImage} alt="User Profile" />

        <div className="user-name">
          <h3>{currentUser?.name}</h3>
          <h5>@{currentUser?.username}</h5>
        </div>
      </div>

      <div className="chat-box-bottom">
        <form action="#">
          <input type="text" placeholder="writesomething" />
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
          <label className="btn btn-primary" htmlFor="CFile">
            <FontAwesomeIcon icon={faFileAlt} />
            <input type="file" id="CFile" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
