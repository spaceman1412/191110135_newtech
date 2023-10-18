import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Posts, randomstring } from "../../post";
import "./index.css";

function PostDetail() {
  const { id } = useParams();
  const post = Posts.find((p) => p.id === id);
  const [comments, setComments] = useState(post.comments);
  const [inputComment, setInputComment] = useState("");
  const handleCreateNewSubmit = () => {
    let newComment = {
      id: randomstring(),
      content: inputComment,
      timestamp: new Date(),
    };

    setComments((oldComment) => [...oldComment, newComment]);
    Posts.map((value) => {
      if (value.id === id) {
        value.comments = comments;
      }

      return value;
    });
  };
  return (
    <div className="form-post">
      <h2 className="title">{post.title}</h2>
      <div className="content-container">
        <p className="content">{post.content}</p>
      </div>
      <div className="input-comment-container">
        <input
          type="text"
          id="comment"
          className="input-comment"
          placeholder="comments..."
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleCreateNewSubmit}
          className="button-submit"
        >
          Comment
        </button>
      </div>
      <h3 className="comment-header">Comments</h3>
      <ul className="list-comment">
        {comments.map((comment) => (
          <li className="comment" key={comment.id}>
            <p className="comment-time">{comment.timestamp.toLocaleString()}</p>
            <p className="comment-content">{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetail;
