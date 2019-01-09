import React from "react";
import {
  Link
} from "react-router-dom";
import "./styles.css";

export default () => (
  <div className="SyntaxPosterContainer">
    <div className="SyntaxPoster">
      <code>{"404"}</code>
    </div>
    <div className="Footer">
      <summary>Get extended Markdown syntax to render contents of code blocks with React</summary>
      <Link to="/tryit">
        <button>Try in now</button>
      </Link>
    </div>
  </div>
);
