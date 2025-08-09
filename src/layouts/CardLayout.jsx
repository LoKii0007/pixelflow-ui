import React from "react";

const CardLayout = ({ children, style, className }) => {
  return (
    <div
      className={`p-4 border rounded-sm border-gray-600 h-[40vh] md:min-h-[250px] overflow-y-auto relative ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardLayout;
