import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import ComponentPageLayoutV2 from "@/layouts/ComponentPageLayoutV2";
import { AccordionDemo } from "@/components/features/Accordian1";

const Page = () => {
  return (
    <div className="container ">
      <ComponentHeading label="Accordians" description="Accordians" />

      <ComponentPageLayoutV2 className={'col-span-2'}>
        <AccordionDemo />
      </ComponentPageLayoutV2>
    </div>
  );
};

export default Page;
