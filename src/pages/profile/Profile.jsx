// Profile.jsx
import React, { useState, useEffect } from "react";
import UserProfile from "../../components/userProfile/UserProfile";
import ProfilePostForm from "../../components/userProfile/ProfilePostForm";
import CurrentUser from "../../FakeAPI/currentUserData";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
    setUserPosts(storedPosts);
  }, []);

  const handlePostAdded = (newPost) => {
    const updatedPosts = [newPost, ...userPosts];
    setUserPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
  };

  const handlePostDeleted = (postId) => {
    const updatedPosts = userPosts.filter((post) => post.id !== postId);
    setUserPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="profile-container">
      <UserProfile user={CurrentUser[0]} />
      <ProfilePostForm
        onPostAdded={handlePostAdded}
        user={CurrentUser[0]}
      />{" "}
      <div className="posts-container">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img
                  src={post.feedProfile}
                  alt="Profile"
                  className="post-profile-image"
                />
                <h4>{post.name}</h4>
                <button
                  onClick={() => handlePostDeleted(post.id)}
                  className="btn-delete"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <p>{post.desc}</p>
              {post.feedImage && (
                <img src={post.feedImage} alt="Post" className="post-image" />
              )}
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
