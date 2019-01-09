/* global document */
import React from "react";
import ReactDom from "react-dom";
import Entry from "routes";
import "./styles.css";
import "github-markdown-css/github-markdown.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/shadowfox.css";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/markdown/markdown";

ReactDom.render(
  <Entry />,
  document.getElementById("root")
);
