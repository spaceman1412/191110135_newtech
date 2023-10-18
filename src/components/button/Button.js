import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  const { text, linkRedirect, type, contentType } = props;
  let buttonType = "button " + type;
  let buttonText = "button-content " + contentType;
  return (
    <div className={buttonType}>
      <Link to={linkRedirect} className={buttonText}>
        <h4 className={buttonText}>{text}</h4>
      </Link>
    </div>
  );
}

export default Button;
