import React from "react";
import childrenToAnchore from "helpers/childrenToAnchore";

export default function Heading({
  level, children
}) {
  return (
    React.createElement(
      `h${level || 1}`,
      {
        id: `${childrenToAnchore(children)}`
      },
      children
    )
  );
}
