import React from "react";
import {
  NavLink
} from "react-router-dom";
import "./styles.css";

const items = [
  {
    name: "Try it",
    to: "/tryit"
  },
  {
    name: "Reference",
    to: "/docs"
  },
  {
    name: "GitHub",
    link: "https://github.com/morulus/render-react-markdown-loader"
  }
];

function renderMenuItem({
  name, to, link
}) {
  return <li>
    {link
      ? (
        <a href={link}>{name}</a>
      )
      : (
        <NavLink
          key={to}
          to={to}
          activeClassName="active"
        >{name}</NavLink>
      )}
  </li>;
}

export default () => (
  <nav className="TopMenu">
    <ul>
      {items.map(renderMenuItem)}
    </ul>
  </nav>
);
