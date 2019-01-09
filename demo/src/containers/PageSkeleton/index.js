import React from "react";
import cn from "classnames";
import GithubCorner from "components/GithubCorner";
import TopMenu from "chunks/TopMenu";
import TopBarMenu from "chunks/TopBarMenu";
import "./styles.css";

export default ({
  children,
  fixed,
  bgColor
}) => (
  <div
    className={cn("Container", {
      fixed
    })}
    style={{
      backgroundColor: bgColor || "white"
    }}
  >
    <div className="Header">
      <div>
        <h1><i>{"{"}</i>render<i>{"}"}</i>-react-markdown-loader</h1>
      </div>
      <TopMenu />
      <TopBarMenu />
    </div>
    <div>
      {children}
    </div>
    <GithubCorner />
  </div>
);
