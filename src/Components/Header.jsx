import React, { useEffect, useRef, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { motion as m } from "framer-motion";

const menus = ["products", "services", "partners", "about"];

const Header = () => {
  const isDark = JSON.parse(localStorage.getItem("theme")) || "dark";
  const [toogleDark, setToogleDark] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const toogleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify("Dark"));
    }
  };

  useEffect(() => {
    if (isDark === "light") {
      document.documentElement.classList.remove("dark");
      setToogleDark(false);
    } else if (isDark === "dark") {
      document.documentElement.classList.add("dark");
      setToogleDark(true);
    }
  }, []);

  return (
    <div className="w-full h-[56px]  flex items-center  bg-blue-50/80 z-[9999] dark:bg-spaceblue/80 backdrop-blur-[2px]  md:h-[65px] sticky top-0 lg:shadow-md lg:shadow-violet-700">
      <div className="lgcont flex items-center justify-between h-full">
        <h3 className="font-[700] text-[22px] bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-max  bg-clip-text text-transparent">
          Inomation
        </h3>
        {/* toogle and menu container starts  */}
        {/* big screen menu starts  */}
        <div className="h-full w-max hidden  lg:flex  items-center gap-8">
          {menus.map((menu, index) => {
            return (
              <m.div
                whileHover={{
                  scale: 1.1,
                }}
                key={index}
                className="cursor-pointer"
              >
                {menu}
              </m.div>
            );
          })}
        </div>
        {/* big screen menu ends */}
        <div className="flex items-center gap-3 lg:gap-4 h-full">
          {/* toogle theme starts */}
          <div className="hidden lg:grid h-full place-items-center text-gray-400">
            Toogle theme
          </div>
          <div
            className="w-[30px] h-[15px] bg-violet-500 flex items-center  relative rounded-full cursor-pointer"
            onClick={() => {
              setToogleDark((ps) => !ps);
              toogleTheme();
            }}
          >
            {!toogleDark ? (
              <m.div
                layout
                className="w-[20px] h-[20px] absolute top-[-2px] left-[-3px] bg-white ring-1 ring-slate-500 flex items-center justify-center text-slate-700 rounded-full z-[9]"
              >
                <BiSolidSun />
              </m.div>
            ) : (
              <m.div
                layout
                className="w-[20px] h-[20px] absolute top-[-2px] right-[-3px] bg-slate-700 flex items-center justify-center text-white rounded-full z-[9]"
              >
                <BiSolidMoon />
              </m.div>
            )}
          </div>
          {/* toogle theme ends */}
          {/* menu button starts  */}
          <div
            onClick={() => setOpenMenu(true)}
            className=" w-[50px] h-full flex items-end flex-col gap-[5px] justify-center lg:hidden rotate-[-45deg] translate-x-[10%] translate-y-[10%]"
          >
            <m.div
              animate={
                openMenu
                  ? {
                      scale: 0,
                    }
                  : { scale: 1 }
              }
              className="w-[40%] h-[2px] rounded-full  mr-1 bg-slate-500"
            ></m.div>
            <m.div
              animate={
                openMenu
                  ? {
                      scale: 0,
                    }
                  : { scale: 1 }
              }
              transition={{
                delay: 0.2,
              }}
              className="w-[55%] h-[2px] rounded-full bg-slate-500"
            ></m.div>
            <m.div
              animate={
                openMenu
                  ? {
                      scale: 0,
                    }
                  : { scale: 1 }
              }
              className="w-[40%] mr-1 rounded-full  h-[2px] bg-slate-500"
            ></m.div>
          </div>
          {/* menu button ends */}
        </div>
        {/* toogle and menu container ends */}
      </div>
      <div className="from-blue-500 via-purple-500 to-violet-500 bg-gradient-to-r w-full absolute bottom-0 h-[1px] md:h-[2px] lg:hidden">
        {" "}
      </div>

      <m.div
        animate={
          openMenu
            ? {
                visibility: "visible",
                transition: {
                  duration: 1,
                  delay: 0.4,
                },
              }
            : {
                visibility: "hidden",
              }
        }
        className="w-full h-screen bg-transparent/50 z-[9999999] backdrop-blur-[5px] fixed top-0 flex justify-end overflow-hidden"
      >
        <OpenMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
      </m.div>
    </div>
  );
};

const OpenMenu = ({ setOpenMenu, openMenu }) => {
  const menu = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menu.current.contains(e.target)) {
        setOpenMenu(false);
      } else return;
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return (
    <m.div
      ref={menu}
      animate={
        openMenu
          ? {
              x: 0,
              transition: {
                delay: 0.5,
                type: "tween",
              },
            }
          : {
              x: 280,
            }
      }
      className=" h-screen w-[70%] bg-white  backdrop-blur-[2px] grid place-items-center dark:bg-spaceblue"
    >
      <div className="flex  items-center flex-col text-[18px] gap-8">
        {menus.map((menu, index) => {
          return (
            <div className="overflow-hidden">
              <m.div
                whileTap={{
                  scale: 1.1,
                }}
                animate={
                  openMenu
                    ? {
                        y: 0,
                        transition: { delay: 0.8 },
                      }
                    : {
                        y: 50,
                      }
                }
                key={index}
                className="cursor-pointer"
              >
                {menu}
              </m.div>
            </div>
          );
        })}
      </div>
    </m.div>
  );
};

export default Header;
