"use client";

import React, { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import "@/css/global.css";
import { Theme, DurationTypes } from "@/lib/constants";
import { useThemeStore } from "@/stores/themeStore";
import Custom from "@/components/Custom";
import  CopyBtn  from "@/components/common/CopyBtn";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const NavbarCustomizePage = () => {
  const activeTabTypes = {
    preview: "preview",
    code: "code",
    settings: "settings",
  };

  const [animationType, setAnimationType] = useState({ 
    label: "Fade Down", 
    value: "fade-down",
    className: "fade-down" 
  });
  const [animationDuration, setAnimationDuration] = useState(
    DurationTypes.medium
  );
  const { theme } = useThemeStore();
  const [activeTab, setActiveTab] = useState(activeTabTypes.preview);
  const [code, setCode] = useState("");

  const animationTypes = [
    { label: "Fade Down", value: "fade-down", className: "fade-down" },
    { label: "Fade Up", value: "fade-up", className: "fade-up" },
    { label: "Slide In", value: "slide-in", className: "slide-in" },
    { label: "Scale", value: "scale", className: "scale" },
    { label: "Bounce", value: "bounce", className: "bounce" },
    { label: "Custom", value: "custom", className: "custom" },
  ];

  // Update code whenever animation settings change
  React.useEffect(() => {
    setCode(
      `<nav className="w-full border-b border-gray-200 dark:border-gray-700">
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: ${animationDuration.value / 1000} }}
    className="container mx-auto flex justify-between items-center py-4"
  >
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="font-bold text-xl"
    >
      Logo
    </motion.div>
    <motion.ul className="flex space-x-4">
      {["Home", "About", "Services", "Contact"].map((item, i) => (
        <motion.li 
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: ${animationDuration.value / 1000} }}
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
</nav>`
    );
  }, [animationDuration, animationType]);

  const customNavbar = useCallback(() => {
    let initial = { opacity: 0, y: -20 };
    let animate = { opacity: 1, y: 0 };
    const duration = animationDuration.value / 1000;

    // Change animation based on type
    if (animationType.value === "fade-up") {
      initial = { opacity: 0, y: 20 };
      animate = { opacity: 1, y: 0 };
    } else if (animationType.value === "slide-in") {
      initial = { opacity: 0, x: -50 };
      animate = { opacity: 1, x: 0 };
    } else if (animationType.value === "scale") {
      initial = { opacity: 0, scale: 0.8 };
      animate = { opacity: 1, scale: 1 };
    } else if (animationType.value === "bounce") {
      initial = { opacity: 0, y: -50 };
      animate = { opacity: 1, y: 0 };
    }

    return (
      <nav className="w-full border-b border-gray-200 dark:border-gray-700">
        <motion.div 
          initial={initial}
          animate={animate}
          transition={{ duration: duration }}
          className="container mx-auto flex justify-between items-center py-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl"
          >
            Logo
          </motion.div>
          <motion.ul className="flex space-x-4">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <motion.li 
                key={item}
                initial={initial}
                animate={animate}
                transition={{ 
                  delay: i * 0.1, 
                  duration: duration,
                  ...(animationType.value === "bounce" ? { type: "spring", stiffness: 300 } : {})
                }}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </nav>
    );
  }, [animationDuration, animationType]);

  return (
    <div className="container h-full">
      <h1 className="text-3xl font-bold mb-6">Navbar</h1>

      <div className="space-y-8">
        <section>
          <div className="overflow-hidden">
            <div className="flex justify-between items-center w-1/2">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveTab(activeTabTypes?.preview)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium hover:cursor-pointer ",
                    activeTab === activeTabTypes?.preview && "text-cyan-700"
                  )}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab(activeTabTypes?.code)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium hover:cursor-pointer",
                    activeTab === activeTabTypes?.code && "text-cyan-700"
                  )}
                >
                  Code
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 space-y-12 w-full">
                <div className="p-4 border rounded-sm border-gray-600 min-h-[250px] overflow-y-auto relative">
                  <CopyBtn code={code} />

                  {activeTab === activeTabTypes?.preview ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                      {customNavbar()}
                    </div>
                  ) : (
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        {code}
                      </pre>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <h2 className="text-lg font-bold px-4">Duration</h2>
                  <div className="duration-options grid grid-cols-3 gap-8 h-fit justify-start items-start p-4">
                    {Object.values(DurationTypes).map((option) => (
                      <button
                        className={`rounded-full cursor-pointer p-2 border-2 bg-transparent ease-btn hover:border-cyan-700 ${
                          animationDuration.label === option.label &&
                          "border-cyan-700 active-ease-btn"
                        }
                  ${theme === Theme.dark ? "text-gray-50" : "text-zinc-950"} `}
                        key={option.label}
                        onClick={() => setAnimationDuration(option)}
                      >
                        {option.label}
                      </button>
                    ))}
                    {animationDuration.label === "Custom" && (
                      <Input className="w-full" type="number" />
                    )}
                  </div>
                </div>

                <div className="animation-options grid grid-cols-3 gap-8 h-fit justify-start items-start p-4">
                  {animationTypes.map((option) => (
                    <button
                      className={`rounded-full cursor-pointer p-2 border-2 bg-transparent ease-btn hover:border-cyan-700 ${
                        animationType.label === option.label &&
                        "border-cyan-700 active-ease-btn"
                      }
                  ${theme === Theme.dark ? "text-gray-50" : "text-zinc-950"} `}
                      key={option.label}
                      onClick={() => setAnimationType(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                {animationType.label === "Custom" && <Custom />}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavbarCustomizePage; 