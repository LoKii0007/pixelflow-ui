import CopyBtn from "@/components/common/CopyBtn";
import React from "react";

const DocumentationLayout = ({ usage = [] }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {usage.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">How to use</h1>
            {usage.map((step, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm text-gray-300">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="font-medium">{step.title}</div>
                    {step.description && (
                      <p className="text-sm text-gray-400">{step.description}</p>
                    )}
                  </div>
                </div>
                {step.code && (
                  <div className="flex justify-between items-center gap-2 bg-zinc-800 text-gray-300 p-2 rounded-md ml-8">
                    <pre className="whitespace-pre-wrap break-all text-sm">
                      {step.code}
                    </pre>
                    <CopyBtn code={step.code} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DocumentationLayout;
