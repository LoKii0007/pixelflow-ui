import React from "react";

const CodeSnippetLayout = ({ code }) => {
  return (
    <div className="relative">
      <pre className="text-white p-4 rounded-md whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
};

export default CodeSnippetLayout;
