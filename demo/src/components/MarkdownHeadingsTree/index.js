import React from "react";
import childrenToAnchore from "helpers/childrenToAnchore";
import "./styles.css";

function renderItem({
  text, raw
}) {
  return (
    <li>
      <a href={`#${childrenToAnchore(raw)}`}>{text[0]}</a>
    </li>
  );
}

export default function MarkdownHeadingsTree({
  items,
  ...props
}) {
  return <nav {...props} className="MarkdownHeadingsTree">
    <ul>
      {items.map(renderItem)}
    </ul>
  </nav>;
}
