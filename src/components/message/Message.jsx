import React, { useState } from "react";
import "./message.css";
import { Link } from "react-router-dom";
import MessageData from "../../FakeAPI/MessageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit } from "@fortawesome/free-solid-svg-icons";

const Message = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`Message ${isCollapsed ? "collapsed" : ""}`}>
      <div className="message-top" onClick={toggleCollapse}>
        <h4>Chat with Coders</h4>
      </div>
      {!isCollapsed && (
        <>
          <div className="message-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" placeholder="Search Message" />
          </div>

          {MessageData.map((mess) => (
            <Link to={`/chatbox/${mess.id}`} key={mess.id}>
              <div className="message">
                <div className="user">
                  <img src={mess.img} alt="" />
                  <div className="green-active"></div>
                </div>
                <div className="message-body">
                  <h5>{mess.name}</h5>
                  <p>{mess.mText}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Message;
