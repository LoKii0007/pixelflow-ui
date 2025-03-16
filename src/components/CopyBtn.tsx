"use client";

import React, { useState } from "react";
import { ClipboardIcon, CheckIcon } from "lucide-react";

export const CopyBtn = ({ code }: { code: string }) => {
  const [activeTab, setActiveTab] = useState("preview");
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
        className="absolute top-2 right-2 p-2 rounded-md bg-transparent hover:bg-muted-foreground/10"
        aria-label="Copy code"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>
    </>
  );
};
