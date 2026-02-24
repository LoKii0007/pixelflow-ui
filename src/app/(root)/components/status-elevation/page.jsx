import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import StatusElevationWrapper from "@/components/features/status-elevation/StatusElevationWrapper";

export const metadata = {
    title: "Status Elevation | PixelFlow UI",
    description:
        "An animated priority queue component that re-orders items based on status priority with smooth layout animations.",
    keywords: [
        "status elevation",
        "priority queue",
        "animated list",
        "react status",
        "framer motion layout",
        "PixelFlow UI components",
    ],
};

const Page = () => {
    const dependecies = [
        {
            title: "Motion",
            installation: "npm i motion",
            link: false,
        },
        {
            title: "Lucide React",
            installation: "npm i lucide-react",
            link: false,
        },
    ];

    return (
        <div className="container">
            <ComponentHeading
                label="Status Elevation"
                description="A priority queue component that smoothly re-orders items based on their status priority using layout animations."
            />

            <ComponentPageLayout className={"grid-cols-1"}>
                <StatusElevationWrapper />
                <DocumentationLayout dependecies={dependecies} />
            </ComponentPageLayout>
        </div>
    );
};

export default Page;
