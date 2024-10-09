import React, { useState, useEffect } from "react";
import AddPost from "../../components/addPost/AddPost";
import Feeds from "../../components/feeds/Feeds";
import LeftBar from "../../components/leftbar/LeftBar";

import FeedsData from "../../FakeAPI/HomeFeedData";
import CurrentUserData from "../../FakeAPI/currentUserData";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || FeedsData;
    setAllPosts(savedPosts);
  }, []);

  const handlePostAdded = (newPost) => {
    setAllPosts((prevPosts) => [newPost, ...prevPosts]);
    localStorage.setItem("posts", JSON.stringify([newPost, ...allPosts]));
  };

  const handlePostDelete = (postId) => {
    const updatedPosts = allPosts.filter((post) => post.id !== postId);
    setAllPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <>
      <AddPost onPostAdded={handlePostAdded} />
      <Feeds posts={allPosts} onPostDelete={handlePostDelete} />{" "}
    </>
  );
};

export default Home;
