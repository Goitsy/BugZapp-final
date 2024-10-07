import React, { useState } from "react";
import "./addPost.css";
import CurrentUserData from "../../FakeAPI/currentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faVideo,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

const AddPost = ({ onPostAdded }) => {
  const [postText, setPostText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new post object
    const newPost = {
      id: Date.now(), // Generate a unique ID based on current timestamp
      userid: CurrentUserData[0].userid, // Assuming you have userid in your current user data
      name: CurrentUserData[0].name,
      feedImage: selectedFile,
      feedProfile: CurrentUserData[0].ProfileImage,
      desc: postText,
    };

    // Call parent function to add post
    onPostAdded(newPost);

    // Reset form fields
    setPostText("");
    setSelectedFile(null);
  };

  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <div className="user form-top">
        <img src={CurrentUserData[0].ProfileImage} alt="Profile" />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>

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
          Feeling
        </span>
      </div>

      {selectedFile && (
        <div className="preview">
          <img src={selectedFile} alt="Preview" />
        </div>
      )}
    </form>
  );
};

export default AddPost;
