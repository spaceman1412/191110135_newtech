import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/post">Create New Post</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
