"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import ReplayBtn from "@/components/common/ReplayBtn";

export function Loader1RetroDemo({
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
            <div className="w-full h-full p-4 flex flex-col font-mono text-black">
                <div className="w-full border-2 border-black flex justify-between px-2 py-1 bg-white mb-2 shadow-[4px_4px_0px_0px_#000000]">
                    <span className="font-bold uppercase text-xs sm:text-sm">SYSTEM_LOADER.exe</span>
                    <span className="font-bold uppercase text-xs sm:text-sm">{loadingPercentage}%</span>
                </div>

                <div
                    ref={containerRef}
                    className="w-full h-full overflow-hidden relative border-2 border-black shadow-[4px_4px_0px_0px_#000000] bg-white"
                >
                    <div className="bg-white h-full w-full absolute top-0 left-0 z-[10]"></div>

                    <div
                        ref={textRef}
                        style={textStyle}
                        className="text-black z-[20] absolute text-[60px] md:text-[80px] lg:text-[100px] font-black leading-none transition-all ease-linear select-none"
                    >
                        {loadingPercentage}
                    </div>

                    <div
                        style={barStyle}
                        className="bg-black absolute z-[30] overflow-hidden transition-all ease-linear"
                    >
                        <div
                            style={{
                                width: dimensions.width ? `${dimensions.width}px` : "100%",
                                height: dimensions.height ? `${dimensions.height}px` : "100%",
                                position: "absolute",
                                top: barStyle.bottom === 0 ? "auto" : 0,
                                bottom: barStyle.bottom === 0 ? 0 : "auto",
                                left: barStyle.right === 0 ? "auto" : 0,
                                right: barStyle.right === 0 ? 0 : "auto",
                            }}
                        >
                            <div
                                style={textStyle}
                                className="text-white z-[40] absolute text-[60px] md:text-[80px] lg:text-[100px] font-black leading-none transition-all ease-linear select-none"
                            >
                                {loadingPercentage}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-[50] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>

                </div>
            </div>
            {!externalResetAnimation && <ReplayBtn resetAnimation={resetAnimation} />}
        </>
    );
}
