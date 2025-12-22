const Navbar1RetroCode = `
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NavbarRetro = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["HOME", "PRODUCTS", "RESOURCES", "PRICING"];

  return (
    <div className="flex justify-center items-center font-mono">
      <motion.nav
        initial={{
          height: "100%",
          width: "100%",
          top: 0,
          background: "#ffffff",
          border: "2px solid #000000",
          boxShadow: "0px 0px 0px #000000",
        }}
        animate={{
          height: isMobileMenuOpen ? "auto" : "60px",
          width: "90%",
          top: 20,
          background: "#ffffff",
          border: "2px solid #000000",
          boxShadow: "4px 4px 0px 0px #000000",
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
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-xs border-2 border-black group-hover:bg-white group-hover:text-black transition-colors">
              &gt;_
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">
              PIXELFLOW_UI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold hover:underline underline-offset-4 decoration-2 px-3 py-1.5 transition-all duration-200 uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-1 bg-black text-white border-2 border-black px-4 py-2 text-xs font-bold hover:bg-white hover:text-black transition-colors uppercase">
              START <ArrowRight size={12} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-black hover:text-white transition-colors"
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
              className="md:hidden px-4 pb-4 border-t-2 border-black"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-lg font-bold hover:bg-black hover:text-white py-2 px-2 transition-colors uppercase"
                  >
                    {">"} {item}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 w-full border-2 border-black text-black hover:bg-black hover:text-white py-3 font-bold flex items-center justify-center gap-2 uppercase transition-all"
                >
                  INITIALIZE <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-white"
        >
          <div className="text-4xl md:text-5xl font-bold tracking-tighter text-black uppercase flex flex-col items-center gap-2">
             <span>PIXELFLOW_UI</span>
             <span className="text-sm tracking-[0.5em] animate-pulse">LOADING...</span>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default NavbarRetro;`;

export default Navbar1RetroCode;
