import React from "react";

const ComponentPageLayout = ({ children, className }) => {
  return (
    <div className={`all-components w-full grid grid-cols-1 gap-4 md:gap-12 ${className}`}>
      {children}
    </div>
  );
};

export default ComponentPageLayout;
