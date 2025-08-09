

export const BouncyInputCode = `
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const BouncyInput = () => {
  const [value, setValue] = useState("");
  const controls = useAnimation();

  // re-trigger bounce whenever value changes
  useEffect(() => {
    controls.start({
      scaleX: [1, 1.01, 1],
      scaleY: [1, 1.1, 1],
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  }, [value, controls]);

  return (
    <div className="relative justify-center items-center w-full">
      <motion.div
        animate={controls}
        className="h-full w-full flex items-center justify-center text-black overflow-hidden border-[0.6px] box-border border-gray-300 rounded-md px-3 py-2 absolute bg-transparent z-10"
      ></motion.div>
      <input
        type="text"
        className="w-full text-white focus:outline-none px-3 py-2 z-20 relative"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default BouncyInput`
