import React from "react";

const MaxWidthContainer = ({ children }) => {
  return (
      <div className="container mx-auto max-w-screen-2xl p-4">
        <div className="relative flex flex-wrap items-center w-full">{children}</div>
      </div>
  );
};

export default MaxWidthContainer;
