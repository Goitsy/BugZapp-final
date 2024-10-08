// ProfilePostForm.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faSmile, faVideo, faTags } from "@fortawesome/free-solid-svg-icons";

import "./profilePostForm.css";
import CurrentUser from "../../FakeAPI/currentUserData"; // Adjust the import path as necessary

const ProfilePostForm = ({ onPostAdded }) => {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);

  // Handle image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
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
    <form onSubmit={handlePostSubmit} className="postForm">
      <div className="form-top">
        <img
          src={CurrentUser[0].ProfileImage}
          alt="Profile"
          className="post-profile-image"
        />
        <input
          placeholder="<Commit your thoughts here (no rollbacks)!>"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="post-input"
          required
        />
        <button type="submit" className="btn-pos">
          Commit
        </button>
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

      <div className="post-categories">
        <label htmlFor="imageFile">
          <input
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={handleFileChange}
          />
          <span>
            <FontAwesomeIcon icon={faImage} />
            Photos
          </span>
        </label>

        <label htmlFor="videoFile">
          <input
            type="file"
            id="videoFile"
            accept="video/*"
            onChange={handleFileChange}
          />
          <span>
            <FontAwesomeIcon icon={faVideo} />
            Videos
          </span>
        </label>

        <span>
          <FontAwesomeIcon icon={faTags} />
          Tag
        </span>
        <span>
          <FontAwesomeIcon icon={faSmile} />
          Coding Mode
        </span>
      </div>
    </form>
  );
};

export default ProfilePostForm;
