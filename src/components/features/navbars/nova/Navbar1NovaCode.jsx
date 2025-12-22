const Navbar1NovaCode = `
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
          height: "100%",
          width: "100%",
          top: 0,
          borderRadius: "0px",
          background: "rgba(255, 255, 255, 1)",
          border: "1px solid rgba(255,255,255,0)",
        }}
        animate={{
          height: isMobileMenuOpen ? "auto" : "60px",
          width: "90%",
          top: 20,
          borderRadius: "25px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        transition={{ duration: 0.8, ease: "anticipate" }}
        className="absolute z-20 flex flex-col overflow-hidden text-black"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="flex items-center justify-between w-full px-5 h-[60px] flex-shrink-0"
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">
              P
            </div>
            <span className="text-sm font-semibold text-neutral-800 tracking-tight">
              PixelFlow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-black px-3 py-1.5 hover:bg-black/5 rounded-full transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-800 transition-colors">
              Get Started <ArrowRight size={12} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 active:bg.black/10 transition-colors"
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
              className="md:hidden px-4 pb-4 bg.white/50"
            >
              <div className="flex flex-col space-y-2 pt-2 border-t border-neutral-200/50">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-lg font-medium text-neutral-700 hover:text-black py-2 px-2 hover:bg-white/40 rounded-lg transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 w-full bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
            PixelFlow<span className="text-neutral-400">UI</span>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;`;

export default Navbar1NovaCode;


