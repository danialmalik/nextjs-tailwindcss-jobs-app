import React from "react";

const MaxWidthContainer = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-2xl p-4">{children}</div>
  );
};

export default MaxWidthContainer;
