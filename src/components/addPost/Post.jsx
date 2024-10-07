import React, { useState, useEffect } from "react";
import "./post.css";

const Post = () => {
  const [userPosts, setUserPosts] = useState([]);

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
    setUserPosts(storedPosts);
  }, []);

  // Function to delete a post by ID and update localStorage
  const handleDeletePost = (postId) => {
    const updatedPosts = userPosts.filter((post) => post.id !== postId);
    setUserPosts(updatedPosts); // Update the local state
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts)); // Persist the change to localStorage
  };

  return (
    <div className="posts-list">
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
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
