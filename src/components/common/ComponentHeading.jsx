import React from "react";

const ComponentHeading = ({ label, description }) => {
  return (
    <h1 className="text-xl font-bold mb-4 md:mb-6 md:text-3xl">{label}</h1>
  );
};

export default ComponentHeading;
