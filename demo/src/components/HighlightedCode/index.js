import React from "react";
import Highlight from "components/Highlight";

export default function HighlightedCode({
  language, value
}) {
  return (
    <Highlight language={language}>{value}</Highlight>
  );
}
