import React from "react";

const ScreenCardLayout = ({ children, style }) => {
  return (
    <div
      className="p-4 border rounded-sm border-gray-600 h-[70vh] min-h-[250px] overflow-y-auto relative"
      style={style}
    >
      {children}
    </div>
  );
};

export default ScreenCardLayout;
