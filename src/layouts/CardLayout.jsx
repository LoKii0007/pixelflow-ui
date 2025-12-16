import React from "react";

const CardLayout = ({ children, style, className }) => {
  return (
    <div
      className={`p-4 bg-zinc-700/10 rounded-sm border-white/20 shadow-[-3px_-3px_0px_0_rgba(255,255,255,0.1)_inset,3px_3px_0px_0_rgba(255,255,255,0.1)_inset,1.5px_1.5px_0px_0_rgba(255,255,255,0.2)_inset,-1.5px_-1.5px_0px_0_rgba(255,255,255,0.2)_inset] h-[70vh] min-h-[500px] overflow-y-auto relative custom-scrollbar ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardLayout;
