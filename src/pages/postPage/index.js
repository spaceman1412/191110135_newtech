import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Posts, randomstring } from "../../post";
import "./index.css";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or update state
    Posts.unshift({
      id: randomstring(),
      title: title,
      content: content,
      timestamp: new Date(),
      comments: [],
    });
    navigate("/");
  };

  return (
    <div className="container-post">
      <h2 className="header-title">Create a New Post</h2>
      <form className="form-submit-post" onSubmit={handleSubmit}>
        <div className="title-container-post">
          <label className="title-label-post" htmlFor="title">
            Title:
          </label>
          <input
            className="title-input-post"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="content-container-post">
          <label className="title-label-post" htmlFor="content">
            Content:
          </label>
          <textarea
            className="content-area-post"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="button-submit-add-post" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
