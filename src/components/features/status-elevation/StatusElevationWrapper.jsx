"use client";

import React from "react";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { StatusElevationDemo } from "./StatusElevationDemo";
import { StatusElevationDemoCode } from "./StatusElevationCode";

const StatusElevationWrapper = () => {
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={"min-h-[500px]"}
            codeSnippet={StatusElevationDemoCode}
        >
            <StatusElevationDemo />
        </ComponentWrapper>
    );
};

export default StatusElevationWrapper;
