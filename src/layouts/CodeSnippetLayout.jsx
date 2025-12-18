import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippetLayout = ({ code }) => {
  return (
    <div className="relative">
      <pre className="">
        <SyntaxHighlighter wrapLongLines={true} style={atelierCaveDark} language="javascript">{code}</SyntaxHighlighter>
      </pre>
    </div>
  );
};

export default CodeSnippetLayout;
