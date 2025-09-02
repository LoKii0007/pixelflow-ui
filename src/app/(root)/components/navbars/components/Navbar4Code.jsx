import React from 'react'

const Navbar4Code = () => {
  return (
    <nav
                    className={` ${
                      isNav ? "h-full" : ""
                    } w-full justify-center items-center fixed top-0 z-40`}
                  >
                    <div className="nav-left text-black absolute top-8 left-12 font-bold text-xl py-1 z-20">
                      Logo
                    </div>

                    <button className="bg-white rounded-full px-5 py-1 right-[calc(48px+32px+12px+60px)] absolute top-8 z-40">
                      Lets work
                    </button>

                    <div
                      onMouseEnter={() => setOnMenu(true)}
                      onMouseLeave={() => setOnMenu(false)}
                      onClick={() => toggleNav()}
                      className={`absolute top-8 ${
                        onMenu
                          ? "right-[calc(48px+32px+12px)]"
                          : "right-[calc(48px+32px)]"
                      }
          ${isNav ? "opacity-0" : "opacity-100"}
          ${isNav ? "translate-x-[100%]" : "translate-x-0"}
          ${isNav ? "delay-0" : "delay-1000"}
          z-40 py-1 duration-300 transition-all cursor-pointer`}
                    >
                      Menu
                    </div>

                    <div
                      onMouseEnter={() => setOnMenu(true)}
                      onMouseLeave={() => setOnMenu(false)}
                      onClick={() => toggleNav()}
                      className={`flex origin-center cursor-pointer absolute top-8 right-12 z-50 w-8 h-8 transition-all duration-300 bg-transparent p-4`}
                    ></div>

                    <div
                      className={`absolute w-2 h-2 ${
                        onMenu ? "scale-[4]" : "scale-100"
                      } bg-black top-12 right-16 z-20 rounded-full transition-all duration-300 -translate-y-[50%] translate-x-[50%]`}
                    ></div>

                    <div
                      onWheel={handleScroll}
                      onTouchMove={handleScroll}
                      onScroll={handleScroll}
                      style={{ height: `${isNav ? "100vh" : "0px"}` }}
                      className="h-0 bg-black w-full ease-in absolute top-0 left-0 nav-bg z-30 overflow-hidden transition-all duration-1000"
                    >
                      <div className="nav-left text-white absolute top-8 left-12 font-bold text-xl py-1">
                        Logo
                      </div>
                      <div
                        onClick={() => toggleNav()}
                        className={`absolute ${
                          onMenu ? "scale-125" : "scale-100"
                        } bg-white top-8 w-8 h-8 right-12 z-30 rounded-full transition-all duration-300`}
                      ></div>
                      <div className="relative h-screen w-full nav-wrapper grid grid-cols-2 p-12 text-white">
                        <div className="w-full flex flex-col justify-end gap-6">
                          <div className="space-y-4 flex flex-col text-4xl">
                            {[
                              { label: "work", href: "#" },
                              { label: "Services", href: "#" },
                              { label: "About", href: "#" },
                            ].map((item, index) => (
                              <button
                                key={index}
                                className="text-left relative group w-fit"
                              >
                                <p className="capitalize">{item.label}</p>
                                <div className="absolute group-hover:w-full group-hover:left-0 right-0 w-0 h-[1px] bg-white transition-all duration-300"></div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="right w-full flex items-end justify-end">
                          <div className=" flex flex-col justify-center gap-2 text-7xl font-bold">
                            <div className="flex gap-2">
                              { Array.from({ length: LOGO_TEXT.length/2 }).map((_, index) => (
                                <span key={index} className="logo-a">
                                  {LOGO_TEXT[index]}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              {Array.from({ length: LOGO_TEXT.length/2 }).map((_, index) => (
                                <span key={index} className="logo-a">
                                  {LOGO_TEXT[index + LOGO_TEXT.length/2]}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
  )
}

export default Navbar4Code