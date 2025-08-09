import React from "react";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

const ReplayBtn = ({ resetAnimation }) => {
  return (
    <Button
      onClick={resetAnimation}
      className="absolute bottom-3 right-3 cursor-pointer replay-btn group hover:bg-gray-300 transition-all duration-300 text-white hover:text-black p-1 rounded-md"
    >
      <RotateCw
        className="group-hover:rotate-360 transition-all ease-in-out duration-500"
        size={16}
      />
    </Button>
  );
};

export default ReplayBtn;
