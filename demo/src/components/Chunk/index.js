import React from "react";
import "./styles.css";

export default function Chunk({
  children
}) {
  return (
    <div className="Chunk">
      {children}
    </div>
  );
}
