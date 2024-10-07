// ProfilePostForm.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./profilePostForm.css";
import CurrentUser from "../../FakeAPI/currentUserData"; // Adjust the import path as necessary

const ProfilePostForm = ({ onPostAdded }) => {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (postContent.trim() === "" && !postImage) return;

    const newPost = {
      id: Math.random(),
      desc: postContent,
      feedImage: postImage,
      userid: 1,
      name: CurrentUser[0].name,
      feedProfile: CurrentUser[0].ProfileImage,
    };

    onPostAdded(newPost);

    setPostContent("");
    setPostImage(null);
  };

  return (
    <form onSubmit={handlePostSubmit} className="profile-post-form">
      <div className="post-header">
        <img
          src={CurrentUser[0].ProfileImage}
          alt="Profile"
          className="post-profile-image"
        />
        <textarea
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="post-input"
        />
      </div>

      {postImage && (
        <div className="image-preview">
          <img src={postImage} alt="Preview" />
          <button
            type="button"
            onClick={() => setPostImage(null)}
            className="btn-remove"
          >
            Remove Image
          </button>
        </div>
      )}

      <div className="actions">
        <label htmlFor="imageUpload" className="icon">
          <FontAwesomeIcon icon={faImage} />
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </label>

        <button type="submit" className="btn-post">
          Post
        </button>
      </div>
    </form>
  );
};

export default ProfilePostForm;
