import React from "react";
import PageSkeleton from "containers/PageSkeleton";
import SyntaxPoster404 from "components/SyntaxPoster404";

export default () => (
  <PageSkeleton bgColor="#1a3135">
    <div className="Contents">
      <SyntaxPoster404 />
    </div>
  </PageSkeleton>
);
