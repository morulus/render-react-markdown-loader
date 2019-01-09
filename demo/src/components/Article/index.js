import React from "react";
import MarkdownHeadingsTree from "components/MarkdownHeadingsTree";
import {
  StickyContainer,
  Sticky
} from "react-sticky";
import "./styles.css";

export default ({
  menuItems,
  children
}) => (
  <StickyContainer>
    <div className="Article">
      <div className="ArticleBody">
        {children}
      </div>
      <div className="ArticleStickyMenuContainer">
        <Sticky>{({
          style
        }) => (
          <div style={style} className="ArticleStickyMenu">
            <MarkdownHeadingsTree items={menuItems} />
          </div>
        )}</Sticky>
      </div>

    </div>
  </ StickyContainer>
);
