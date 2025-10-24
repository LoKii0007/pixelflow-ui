import React from "react";

const MultiSelect1Doc = () => {
  const props = [
    {
      name: "options ",
      type: "Array",
      description:
        "An array of objects defining selectable options. Each object should contain a `label` and `value`, and can optionally include an `icon` component.",
    },
    {
      name: "wrap ",
      type: "Boolean",
      description:
        "A boolean that controls whether selected badges wrap onto the next line. When `true`, badges flow to the next row; when `false`, overflowed options are condensed into a '+X more' badge.",
    },
  ];

  return (
    <div className=" text-white py-6">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>
      <div className="grid grid-cols-1 max-w-5xl border border-white">
        {props.map((prop, i) => (
          <div
            key={prop.name}
            className={` ${
              i !== props.length - 1 ? "border-b mb-2" : ""
            } border-white grid grid-cols-2 p-2 pb-4`}
          >
            <div className="flex items-start">
              <div className="font-semibold text-lg capitalize">{prop.name}</div>
              <div className="">: {prop.type}</div>
            </div>

            <div className="text-gray-300 text-base">{prop.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect1Doc;
