import React, { useState } from "react";
import Button from "../../components/button/Button";
import Post from "../../components/post/Post";
import { Posts } from "../../post";
import "./index.css";

function Main() {
  const [posts, setPosts] = useState(Posts);

  const handleOnDeletePost = (id) => {
    setPosts((oldPost) => {
      return oldPost.filter((post) => post.id !== id);
    });
  };

  return (
    <div>
      <h1>Welcome to my blog website!</h1>

      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.title}
            message={post.content}
            timestamp={post.timestamp}
            onDelete={() => handleOnDeletePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
