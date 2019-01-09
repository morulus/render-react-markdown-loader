import React from "react";
import PageSkeleton from "containers/PageSkeleton";
import SyntaxPoster from "components/SyntaxPoster";

export default () => (
  <PageSkeleton bgColor="#1a3135">
    <div className="Contents">
      <SyntaxPoster />
    </div>
  </PageSkeleton>
);
