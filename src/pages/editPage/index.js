import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Posts } from "../../post";
import "./index.css";

const EditForm = () => {
  let { id } = useParams();
  const post = Posts.find((p) => p.id === id);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();
  const handleEditPost = (e) => {
    e.preventDefault();
    Posts.map((post) => {
      if (post.id === id) {
        post.content = content;
        post.title = title;
      }
      return post;
    });
    navigate("/");
  };

  return (
    <div className="edit-container">
      <h2 className="edit-title"> Edit post</h2>
      <form onSubmit={handleEditPost} className="edit-form">
        <div className="title-section">
          <label htmlFor="title" className="edit-label">
            Title:
          </label>
          <input
            className="edit-input-title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="content-section">
          <label htmlFor="content" className="eidt-label">
            Content:
          </label>
          <textarea
            className="edit-textarea"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-edit-button">
          Edit Post
        </button>
      </form>
    </div>
  );
};

export default EditForm;
