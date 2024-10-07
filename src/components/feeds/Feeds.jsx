import React from "react";
import "./feeds.css";
import Feed from "./Feed";

const Feeds = ({ posts, onPostDelete }) => {
  return (
    <div className="feeds">
      {posts.map((post) => (
        <Feed feed={post} key={post.id} onDelete={onPostDelete} /> // Pass delete function to Feed
      ))}
    </div>
  );
};

export default Feeds;
