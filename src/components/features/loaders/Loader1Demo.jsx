"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import ReplayBtn from "@/components/common/ReplayBtn";

export function Loader1Demo({
  resetAnimation: externalResetAnimation,
  start,
  end,
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [replay, setReplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [textDimensions, setTextDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
  }, [loadingPercentage]);

  const resetAnimation = useCallback(() => {
    setReplay((prev) => !prev);
  }, []);

  useEffect(() => {
    if (externalResetAnimation) {
      resetAnimation();
    }
  }, [externalResetAnimation, resetAnimation]);

  useEffect(() => {
    let interval = null;
    setLoading(true);
    setLoadingPercentage(0);

    let i = 0;
    interval = setInterval(() => {
      if (i === 100) {
        setLoading(false);
      }
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      i++;
    }, 50);

    return () => clearInterval(interval);
  }, [replay]);

  const defaultDesktopStart = "bottom-left";
  const defaultDesktopEnd = "bottom-right";
  const defaultMobileStart = "top-left";
  const defaultMobileEnd = "bottom-left";

  const effectiveStart =
    start || (isMobile ? defaultMobileStart : defaultDesktopStart);
  const effectiveEnd = end || (isMobile ? defaultMobileEnd : defaultDesktopEnd);

  const parsePos = (pos) => {
    const [y, x] = pos.split("-");
    return { y, x };
  };

  const startPos = parsePos(effectiveStart);
  const endPos = parsePos(effectiveEnd);

  const isHorizontal = startPos.y === endPos.y;
  const isVertical = startPos.x === endPos.x;

  let barStyle = {};
  let textStyle = {};

  const travelWiidth = Math.max(0, dimensions.width - textDimensions.width);
  const travelHeight = Math.max(0, dimensions.height - textDimensions.height);

  const currentX = (travelWiidth * loadingPercentage) / 100;
  const currentY = (travelHeight * loadingPercentage) / 100;

  if (isHorizontal) {
    barStyle.height = "100%";
    barStyle.width = `${loadingPercentage}%`;
    barStyle.top = startPos.y === "top" ? 0 : "auto";
    barStyle.bottom = startPos.y === "bottom" ? 0 : "auto";

    const isLTR = startPos.x === "left";
    barStyle.left = isLTR ? 0 : "auto";
    barStyle.right = isLTR ? "auto" : 0;
    barStyle.transformOrigin = isLTR ? "left" : "right";

    textStyle.top = startPos.y === "top" ? 0 : "auto";
    textStyle.bottom = startPos.y === "bottom" ? 0 : "auto";

    if (isLTR) {
      textStyle.left = `${currentX}px`;
    } else {
      textStyle.right = `${currentX}px`;
    }
  } else if (isVertical) {
    barStyle.width = "100%";
    barStyle.height = `${loadingPercentage}%`;
    barStyle.left = startPos.x === "left" ? 0 : "auto";
    barStyle.right = startPos.x === "right" ? 0 : "auto";

    const isTTB = startPos.y === "top";
    barStyle.top = isTTB ? 0 : "auto";
    barStyle.bottom = isTTB ? "auto" : 0;
    barStyle.transformOrigin = isTTB ? "top" : "bottom";

    textStyle.left = startPos.x === "left" ? 0 : "auto";
    textStyle.right = startPos.x === "right" ? 0 : "auto";

    if (isTTB) {
      textStyle.top = `${currentY}px`;
    } else {
      textStyle.bottom = `${currentY}px`;
    }
  } else {
    barStyle.width = `${loadingPercentage}%`;
    barStyle.height = "100%";
    textStyle.left = "0";
    textStyle.bottom = "0";
  }

  return (
    <>
      <div
        ref={containerRef}
        className="loading-page w-full h-full overflow-hidden relative z-10"
      >
        <div className="bg-black h-full w-full absolute top-0 left-0 z-[10]"></div>

        <div
          ref={textRef}
          style={textStyle}
          className="text-white z-[20] absolute text-[100px] px-5 leading-none transition-all ease-linear"
        >
          {loadingPercentage}
        </div>

        <div
          style={barStyle}
          className="bg-white absolute z-[30] overflow-hidden transition-all ease-linear"
        >
          <div
            style={{
              width: dimensions.width ? `${dimensions.width}px` : "100vw",
              height: dimensions.height ? `${dimensions.height}px` : "100vh",
              position: "absolute",
              top: barStyle.bottom === 0 ? "auto" : 0,
              bottom: barStyle.bottom === 0 ? 0 : "auto",
              left: barStyle.right === 0 ? "auto" : 0,
              right: barStyle.right === 0 ? 0 : "auto",
            }}
          >
            <div
              style={textStyle}
              className="text-black z-[40] absolute text-[100px] px-5 leading-none transition-all ease-linear"
            >
              {loadingPercentage}
            </div>
          </div>
        </div>
      </div>
      {!externalResetAnimation && <ReplayBtn resetAnimation={resetAnimation} />}
    </>
  );
}


