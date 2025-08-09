import React from "react";

const ComponentPageLayout = ({ children }) => {
  return (
    <div className="all-components w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
      {children}
    </div>
  );
};

export default ComponentPageLayout;
