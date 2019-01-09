import React from "react";
import gettingStarted from "../../../../web-docs/getting-started.md";
import PageSkeleton from "containers/PageSkeleton";
import HighlightedCode from "components/HighlightedCode";
import Heading from "components/Heading";
import Article from "components/Article";
import Chunk from "components/Chunk";
import parseMarkdownAst from "helpers/parseMarkdownAst";

const headings = parseMarkdownAst(gettingStarted.metadata.ast);

export default () => (
  <PageSkeleton>
    <Article
      menuItems={headings}
    >
      <div className="Contents markdown-body">
        <gettingStarted.Component
          markdown={{
            renderers: {
              code: HighlightedCode,
              heading: Heading,
              chunk: Chunk
            }
          }}
        />
      </div>
    </Article>
  </PageSkeleton>
);
