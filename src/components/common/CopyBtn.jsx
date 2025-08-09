"use client";

import React, { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

const CopyBtn = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <button
        onClick={copyToClipboard}
        className="p-1 m-1 rounded-sm bg-transparent hover:bg-gray-300 transition-all duration-300 text-white hover:text-black"
        aria-label="Copy code"
      >
        {copied ? (
          <CheckIcon width={16} height={16} />
        ) : (
          <CopyIcon width={16} height={16} />
        )}
      </button>
    </>
  );
};

export default CopyBtn;