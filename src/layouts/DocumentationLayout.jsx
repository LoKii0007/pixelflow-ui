import CopyBtn from "@/components/common/CopyBtn";
import Link from "next/link";
import React from "react";

const DocumentationLayout = ({ dependecies = [] }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* //? dependecies */}
        {dependecies.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Dependencies</h1>
            {dependecies.map((item, i) => (
              <div key={i} className="flex flex-col ga-2">
                <div>{item.title}</div>
                {item.link ? (
                  <Link
                    href={item.installation}
                    target="_blank"
                    className="bg-zinc-800 text-gray-300 p-2 rounded-md"
                  >
                    {item.installation}
                  </Link>
                ) : (
                  <div className="flex justify-between items-center bg-zinc-800 text-gray-300 p-2 rounded-md">
                    <p className="">{item.installation}</p>
                    <CopyBtn code={item.installation} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* //? how to */}
      </div>
    </>
  );
};

export default DocumentationLayout;
