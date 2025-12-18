"use client";

import React, { useCallback, useState } from "react";
import { LazyMotion, domAnimation, AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Menu, X, ArrowRight } from "lucide-react";
import ReplayBtn from "@/components/common/ReplayBtn";

export function Navbar2Demo({ resetAnimation: externalResetAnimation }) {
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resetAnimation = useCallback(() => {
    setAnimationKey((prevKey) => prevKey + 1);
    setIsMobileMenuOpen(false);
  }, []);

  const handleReset = externalResetAnimation || resetAnimation;

  const navItems = ["Home", "Products", "Resources", "Pricing"];

  return (
    <>
      <div className="flex justify-center items-center ">
        <LazyMotion features={domAnimation}>
          <m.nav
            key={animationKey}
            initial={{
              height: "60px",
              width: "60px",
              top: -100,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 1)",
              border: "1px solid rgba(255,255,255,0)",
            }}
            animate={{
              height: isMobileMenuOpen ? "auto" : "60px",
              width: "90%",
              top: 20,
              borderRadius: "24px",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.5)",
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
            className="absolute z-20 flex flex-col overflow-hidden text-black"
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </m.div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <m.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden px-4 pb-4 bg-white/50"
                >
                  <div className="flex flex-col space-y-2 pt-2 border-t border-neutral-200/50">
                    {navItems.map((item, idx) => (
                      <m.a
                        key={item}
                        href="#"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-lg font-medium text-neutral-700 hover:text-black py-2 px-2 hover:bg-white/40 rounded-lg transition-colors"
                      >
                        {item}
                      </m.a>
                    ))}
                    <m.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-4 w-full bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                    >
                      Get Started <ArrowRight size={16} />
                    </m.button>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </m.nav>
        </LazyMotion>
      </div>
      {!externalResetAnimation && <ReplayBtn resetAnimation={handleReset} />}
    </>
  );
}


