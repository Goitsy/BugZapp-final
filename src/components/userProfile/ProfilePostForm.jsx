import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./profilePostForm.css";
import CurrentUser from "../../FakeAPI/currentUserData";

const ProfilePostForm = ({ onPostAdded }) => {
  const [postContent, setPostContent] = useState(""); // state for post text
  const [postImage, setPostImage] = useState(null); // state for post image

  // Handler for image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result); // set the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for form submission
  const handlePostSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if both text and image are empty
    if (postContent.trim() === "" && !postImage) return;

    // Create a new post object
    const newPost = {
      id: Math.random(), // Generating a random ID for the post
      desc: postContent,
      feedImage: postImage,
      userid: 1, // Current user's id
      name: CurrentUser[0].name,
      feedProfile: CurrentUser[0].ProfileImage,
    };

    // Trigger post addition in the parent component
    onPostAdded(newPost);

    // Reset input fields after submission
    resetForm();
  };

  // Resetting the form fields
  const resetForm = () => {
    setPostContent(""); // Clear post text
    setPostImage(null); // Clear the selected image
  };

  return (
    <form onSubmit={handlePostSubmit} className="postForm">
      <div className="form-top">
        <img
          src={CurrentUser[0].ProfileImage}
          alt="Profile"
          className="profile-image"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)} // Update post content
        />
      </div>

      {/* Image preview section */}
      {postImage && (
        <div className="image-preview">
          <img src={postImage} alt="Preview" />
          <button
            type="button"
            onClick={() => setPostImage(null)} // Remove the image
            className="btn-remove"
          >
            Remove Image
          </button>
        </div>
      )}

      <div className="post-categories">
        <label htmlFor="imageUpload" className="icon">
          <FontAwesomeIcon icon={faImage} />
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }} // Hide the default file input
            onChange={handleImageUpload} // Handle image file selection
          />
        </label>

        <button type="submit" className="btn-pos">
          Post
        </button>
      </div>
    </form>
  );
};

export default ProfilePostForm;
