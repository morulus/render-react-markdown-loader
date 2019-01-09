import React from "react";
import "./styles.css";

const items = [];

function renderMenuItem({
  link, name
}) {
  return (
    <li key={link}>
      <a href={link}>{name}</a>
    </li>
  );
}

export default () => (
  <nav className="TopBarMenu">
    <ul>
      {items.map(renderMenuItem)}
    </ul>
  </nav>
);
