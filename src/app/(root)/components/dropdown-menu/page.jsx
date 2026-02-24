import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import CopyBtn from "@/components/common/CopyBtn";
import { DropdownCode, AnimatedDropdownSource } from "@/components/features/dropdown-menu/DropdownCode";
import { DropdownDemo } from "@/components/features/dropdown-menu/DropdownDemo";

export const metadata = {
    title: "Animated Dropdown Menu | PixelFlow UI",
    description:
        "A recursive, animated dropdown menu component with slide transitions.",
    keywords: [
        "dropdown menu",
        "animated dropdown",
        "react dropdown",
        "framer motion menu",
        "recursive menu",
        "PixelFlow UI components",
    ],
};

const Page = () => {
    const dependencies = [
        {
            title: "Installation",
            installation: "npm install framer-motion lucide-react clsx tailwind-merge @radix-ui/react-dropdown-menu",
        },
    ];

    return (
        <div className="container">
            <ComponentHeading
                label="Animated Dropdown Menu"
                description="A highly customizable, recursive dropdown menu with smooth sliding animations."
            />

            <ComponentPageLayout className={'grid-cols-1 gap-12'}>
                {/* Demo and Usage Section */}
                <div className="col-span-1 space-y-6">
                    <h2 className="text-2xl font-semibold">Demo & Usage</h2>
                    <ComponentWrapper
                        className="col-span-1"
                        cardClassName={''}
                        codeSnippet={DropdownCode}
                    >
                        <DropdownDemo />
                    </ComponentWrapper>
                </div>

                {/* Installation Section */}
                <div className="col-span-1 space-y-6">
                    <h2 className="text-2xl font-semibold">Installation</h2>

                    <DocumentationLayout dependecies={dependencies} />

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium">Copy the Component Code</h3>
                            <CopyBtn code={AnimatedDropdownSource} />
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Create a file at <code className="bg-muted px-1 py-0.5 rounded">src/components/dropdown-menu/AnimatedDropdown.jsx</code> and paste the following code:
                        </p>
                        <div className="rounded-md border bg-black overflow-hidden relative p-4">
                            <CodeSnippetLayout code={AnimatedDropdownSource} />
                        </div>
                    </div>
                </div>
            </ComponentPageLayout>
        </div>
    );
};

export default Page;
