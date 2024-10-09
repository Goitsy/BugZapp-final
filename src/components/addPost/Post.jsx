import React, { useState, useEffect } from "react";
import "./post.css";

const Post = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
    setUserPosts(storedPosts);
  }, []);

  const handleAddPost = (newPost) => {
    setUserPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = userPosts.filter((post) => post.id !== postId);
    setUserPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="posts-list">
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.desc}</p>
            <button
              onClick={() => handleDeletePost(post.id)}
              className="btn btn-red"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Post;
