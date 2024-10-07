import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots, faTrash } from "@fortawesome/free-solid-svg-icons"; // Import the trash icon
import "./feeds.css";

const Feed = ({ feed, onDelete }) => {
  return (
    <div className="feed">
      <div className="top-content">
        <Link to={`/profile/${feed.userid}`}>
          <div className="user">
            <img src={feed.feedProfile} alt="Profile" />
            <div>
              <h5>{feed.name}</h5>
              <small>{new Date().toLocaleTimeString()}</small>
            </div>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
        <button onClick={() => onDelete(feed.id)} className="delete-btn">
          <FontAwesomeIcon icon={faTrash} /> {/* Delete icon */}
        </button>
      </div>
      <div className="middle-content">
        <p>{feed.desc}</p>
        {feed.feedImage && <img src={feed.feedImage} alt="Post" />}
      </div>
    </div>
  );
};

export default Feed;
