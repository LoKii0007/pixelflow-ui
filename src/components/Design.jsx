import React from "react";

const Design = () => {
  return (
    <div className="w-[300px] h-[300px] bg-gradient-to-b from-[#D97502] to-[#B9680F] rounded-4xl relative overflow-hidden flex justify-center items-center">
      <div
        style={{ boxShadow: "0px 0px 30px 4px #FCAE3E inset" }}
        className="absolute w-full h-full z-50 opacity-80"
      ></div>
      <div
        style={{ boxShadow: "0px 0px 20px 20px #000000" }}
        className="absolute w-[80%] h-[90%] -translate-y-1/3 bg-black top-0 rounded-full z-20"
      ></div>
      <div
        style={{ boxShadow: "0px 0px 20px 20px #000000" }}
        className="absolute w-[80%] h-[40%] bg-black top-0 rounded-full z-40 flex"
      >
        <div className="flex justify-between w-full items-start py-5">
          <div>
            <h1 className="text-2xl font-semibold">600m</h1>
            <p className="text-xs text-gray-300 opacity-80">New york st.</p>
          </div>
          <div className="flex justify-center">
            <div className="w-9 h-9 rounded-full bg-white z-20 absolute translate-y-6 items-center justify-center flex text-black text-xs">60</div>
            <div className="w-8 h-8 rounded-full bg-zinc-700 z-10 items-center justify-center flex text-[10px]">24</div>
          </div>
        </div>
      </div>
      <div className="z-10 w-full h-full flex justify-around ">
        <div className="w-3 h-full rotate-[30deg]  bg-gradient-to-b from-[#D97502] to-[#FFCA57] from-50%"></div>
        <div className="w-5 h-full rotate-[10deg] translate-y-4 -translate-x-[100%] bg-gradient-to-b from-[#D97502] to-[#FFCA57] from-50%"></div>
        <div className="w-5 h-full rotate-[-10deg] translate-y-4 translate-x-[100%] bg-gradient-to-b from-[#D97502] to-[#FFCA57] from-50%"></div>
        <div className="w-3 h-full rotate-[-30deg] bg-gradient-to-b from-[#D97502] to-[#FFCA57] from-50%"></div>
      </div>
      <div className="z-30 w-full h-full flex justify-center absolute items-end">
        <div className="w-7 h-full bg-gradient-to-b from-[#D97502] to-[#FFCA57] from-40%"></div>
        <div className="overflow-hidden w-16 h-16 translate-y-[-150%] absolute flex justify-center items-center">
          <div
            style={{ boxShadow: "0px 0px 5px 5px #ffffff" }}
            className="w-12 h-12 bg-[#FFBE1A] rotate-45 translate-y-9"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Design;
