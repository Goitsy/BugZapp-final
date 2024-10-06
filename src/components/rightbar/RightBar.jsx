import React from "react";
import Message from "../message/Message";
import FriendReq from "../friendreq/FriendReq";
import "./rightbar.css";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightbar-container">
        <Message />
        <FriendReq />
      </div>
    </div>
  );
};

export default RightBar;
