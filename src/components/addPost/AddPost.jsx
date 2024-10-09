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

    const newPost = {
      id: Date.now(),
      userid: CurrentUserData[0].userid,
      name: CurrentUserData[0].name,
      feedImage: selectedFile,
      feedProfile: CurrentUserData[0].ProfileImage,
      desc: postText,
    };

    const storedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
    const updatedPosts = [...storedPosts, newPost];
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));

    onPostAdded(newPost);

    setPostText("");
    setSelectedFile(null);
  };

  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <div className="user form-top">
        <img src={CurrentUserData[0].ProfileImage} alt="Profile" />

        {/* Controlled input for post text */}
        <input
          type="text"
          placeholder="<Commit your thoughts here (no rollbacks)!>"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          required
        />

        <button type="submit" className="btn-pos">
          Commit
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
          Coding Mode
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
