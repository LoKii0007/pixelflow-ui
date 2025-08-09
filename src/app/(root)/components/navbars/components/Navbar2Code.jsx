const Navbar2Code = `import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{
        height: "50px",
        width: "50px",
        top: -70,
        borderRadius: "25px",
      }}
      animate={{
        width: "90%",
        top: 15,
      }}
      transition={{ duration: 1, ease: "anticipate" }}
      className=" h-full w-full bg-white flex items-center justify-center text-black px-5 overflow-hidden absolute"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-5 h-5 bg-black rounded-full"
          />
          <p className="text-base">PixelflowUI</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar`;

export default Navbar2Code;
