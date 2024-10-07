import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.userProfile} alt="User Profile" />
        <div>
          <h5>{post.userName}</h5>
          <small>{post.timestamp}</small>
        </div>
      </div>
      <div className="post-content">
        <p>{post.text}</p>
        {post.image && <img src={post.image} alt="Post Content" />}
      </div>
    </div>
  );
};

export default Post;
