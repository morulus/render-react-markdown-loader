import React from "react";
import Highlight from "components/Highlight";

export default function HighlightedCode({
  language, children
}) {
  return (
    <Highlight language={language}>{children}</Highlight>
  );
}
