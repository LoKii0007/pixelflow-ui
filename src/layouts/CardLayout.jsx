import React from "react";

const CardLayout = ({ children, style, className }) => {
  return (
    <div
      className={`p-4 border rounded-sm border-gray-600 h-[70vh] min-h-[500px] overflow-y-auto relative ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardLayout;
