import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

import "./Post.css";

function Post(props) {
  const { username, message, timestamp, id, onDelete } = props;

  return (
    <div className="post">
      <Link to={`/post/${id}`}>
        <p className="post-username">{username}</p>
      </Link>
      <p className="post-message">{message}</p>
      <p className="post-timestamp">{timestamp.toLocaleString()}</p>

      <div className="button-container">
        <Button
          text="EDIT"
          linkRedirect={`post/edit/${id}`}
          type={"detail-button"}
        />
        <button onClick={onDelete} className="delete-button">
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Post;
