export const Loader1RetroCode = `
"use client";

import React, { useRef, useEffect, useState } from "react";

const LoaderRetro = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [textDimensions, setTextDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
      if (textRef.current) {
        setTextDimensions({
          width: textRef.current.offsetWidth,
          height: textRef.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Simplified logic for demo purposes - assume Left-to-Right swipe
  const travelWidth = Math.max(0, dimensions.width - textDimensions.width);
  const currentX = (travelWidth * loadingPercentage) / 100;

  const barStyle = {
      height: "100%",
      width: \`\${loadingPercentage}%\`,
      left: 0,
      top: 0, 
  };
  
  const textStyle = {
      left: \`\${currentX}px\`,
      bottom: 0, // Align closer to bottom like original if needed
      top: "auto"
  };

  return (
      <div className="w-full h-screen p-4 flex flex-col font-mono text-black bg-white">
        <div className="w-full border-2 border-black flex justify-between px-2 py-1 bg-white mb-2 shadow-[4px_4px_0px_0px_#000000]">
             <span className="font-bold uppercase text-sm">SYSTEM_LOADER.exe</span>
             <span className="font-bold uppercase text-sm">{loadingPercentage}%</span>
        </div>
        
        <div
            ref={containerRef}
            className="w-full h-full overflow-hidden relative border-2 border-black shadow-[4px_4px_0px_0px_#000000] bg-white"
        >
            <div className="bg-white h-full w-full absolute top-0 left-0 z-[10]"></div>

            <div
                ref={textRef}
                style={textStyle}
                className="text-black z-[20] absolute text-[100px] font-black leading-none transition-all ease-linear select-none"
            >
                {loadingPercentage}
            </div>

            <div
                style={barStyle}
                className="bg-black absolute z-[30] overflow-hidden transition-all ease-linear"
            >
                <div
                    style={{
                        width: dimensions.width ? \`\${dimensions.width}px\` : "100vw",
                        height: dimensions.height ? \`\${dimensions.height}px\` : "100vh",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    <div
                        style={textStyle}
                        className="text-white z-[40] absolute text-[100px] font-black leading-none transition-all ease-linear select-none"
                    >
                        {loadingPercentage}
                    </div>
                </div>
            </div>
             <div className="absolute inset-0 pointer-events-none z-[50] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>
        </div>
      </div>
  );
};

export default LoaderRetro;`;
