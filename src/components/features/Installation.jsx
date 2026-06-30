"use client";

import React, { useEffect, useMemo, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyBtn from "@/components/common/CopyBtn";
import { useThemeStore } from "@/stores/themeStore";
import {
  CN_UTIL_SNIPPET,
  REGISTRY_HOME,
  getRegistryName,
} from "@/lib/installation-data";

const TABS = [
  { value: "cli", label: "CLI" },
  { value: "manual", label: "Manual" },
];

// A single code block matching the design: rounded panel, line numbers and a
// copy button anchored to the top-right.
const CodeBlock = ({ code, language = "jsx" }) => (
  <div className="relative rounded-lg border border-white/10 bg-zinc-900/70 overflow-hidden">
    <div className="absolute right-2 top-2 z-10">
      <CopyBtn code={code} />
    </div>
    <SyntaxHighlighter
      language={language}
      style={atelierCaveDark}
      showLineNumbers
      wrapLongLines
      customStyle={{
        margin: 0,
        background: "transparent",
        padding: "1rem 0.75rem",
        fontSize: "0.85rem",
      }}
      lineNumberStyle={{ color: "rgba(255,255,255,0.25)", minWidth: "2.25em" }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

// One step on the vertical timeline.
const Step = ({ step }) => (
  <div className="relative pl-7 pb-8 last:pb-0">
    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/30 bg-zinc-950" />
    <h4 className="text-base font-medium text-white">{step.title}</h4>
    {step.description && (
      <p className="mt-1 text-sm text-gray-400">{step.description}</p>
    )}
    {step.filename && (
      <div className="mt-3 mb-1 text-sm text-gray-400">{step.filename}</div>
    )}
    {step.code && (
      <div className="mt-3">
        <CodeBlock code={step.code} language={step.language} />
      </div>
    )}
  </div>
);

const fileName = (path = "") => path.split("/").pop();

const Installation = ({ item }) => {
  const { styleMode } = useThemeStore();
  const [activeTab, setActiveTab] = useState("cli");
  const [registryItem, setRegistryItem] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error

  const registryName = useMemo(
    () => getRegistryName(item.id, styleMode),
    [item.id, styleMode]
  );

  useEffect(() => {
    if (!registryName) return;
    let cancelled = false;
    setStatus("loading");
    fetch(`/r/${registryName}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setRegistryItem(data);
          setStatus("idle");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setRegistryItem(null);
          setStatus("error");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [registryName]);

  const cliSteps = useMemo(() => {
    if (!registryName) return [];
    return [
      {
        title: "Run the following command",
        code: `npx shadcn@latest add ${REGISTRY_HOME}/r/${registryName}.json`,
        language: "bash",
      },
    ];
  }, [registryName]);

  const manualSteps = useMemo(() => {
    const steps = [];
    const deps = registryItem?.dependencies || [];
    const registryDeps = registryItem?.registryDependencies || [];

    if (deps.length > 0) {
      steps.push({
        title: "Install dependencies",
        code: `npm i ${deps.join(" ")}`,
        language: "bash",
      });
    }

    if (registryDeps.length > 0) {
      steps.push({
        title: "Add the required shadcn/ui components",
        code: `npx shadcn@latest add ${registryDeps.join(" ")}`,
        language: "bash",
      });
    }

    steps.push({
      title: "Add the cn helper",
      filename: "lib/utils.ts",
      code: CN_UTIL_SNIPPET,
      language: "typescript",
    });

    (registryItem?.files || []).forEach((file) => {
      if (!file?.content) return;
      steps.push({
        title: "Copy the source code",
        filename: file.path ? fileName(file.path) : undefined,
        code: file.content,
        language: "jsx",
      });
    });

    return steps;
  }, [registryItem]);

  if (!registryName) return null;

  const steps = activeTab === "cli" ? cliSteps : manualSteps;

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-white">Installation</h2>

      <div className="flex w-fit items-center gap-1 rounded-lg border border-white/10 bg-zinc-800/60 p-1">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-md px-4 py-1.5 text-sm transition-all duration-200 ${
                isActive
                  ? "border border-white/20 bg-zinc-700 text-white"
                  : "border border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "manual" && status === "loading" ? (
        <p className="text-sm text-gray-500">Loading installation steps…</p>
      ) : activeTab === "manual" && status === "error" ? (
        <p className="text-sm text-gray-500">
          Manual installation details are unavailable for this component.
        </p>
      ) : (
        <div className="relative border-l border-white/10 pl-1">
          {steps.map((step, i) => (
            <Step key={i} step={step} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Installation;
