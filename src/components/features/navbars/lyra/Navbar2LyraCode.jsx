const Navbar2LyraCode = `
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "Products", "Resources", "Pricing"];

  return (
    <div className="flex justify-center items-center">
      <motion.nav
        initial={{
          height: "60px",
          width: "60px",
          top: -100,
          borderRadius: "0px",
          background: "rgba(0, 0, 0, 1)",
          border: "1px solid rgba(255,255,255,0)",
        }}
        animate={{
          height: isMobileMenuOpen ? "auto" : "60px",
          width: "90%",
          top: 20,
          borderRadius: "0px",
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          mass: 1,
          delay: 0.2,
        }}
        className="absolute z-20 flex flex-col overflow-hidden text-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between w-full px-5 h-[60px] flex-shrink-0"
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-white flex items-center justify-center text-black font-bold text-xs">
              P
            </div>
            <span className="text-sm font-semibold text-neutral-200 tracking-tight uppercase">
              PixelFlow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs uppercase font-medium text-neutral-400 hover:text-white px-3 py-1.5 hover:bg-white/10 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-1 bg-white text-black px-4 py-2 text-xs font-medium hover:bg-neutral-200 transition-colors uppercase">
              Get Started <ArrowRight size={12} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="md:hidden p-2 hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden px-4 pb-4 bg-black/50"
            >
              <div className="flex flex-col space-y-2 pt-2 border-t border-neutral-800">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-lg font-medium text-neutral-300 hover:text-white py-2 px-2 hover:bg-white/10 transition-colors uppercase"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 w-full bg-white text-black py-3 font-medium flex items-center justify-center gap-2 uppercase text-sm"
                >
                  Get Started <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;`;

export default Navbar2LyraCode;
