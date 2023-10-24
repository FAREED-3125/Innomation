import React from "react";
import pixar from "../Assets/Images/pixar.svg";
import warner from "../Assets/Images/warner-bros.svg";
import legendary from "../Assets/Images/legendary-pictures-logo.svg";
import disney from "../Assets/Images/walt-disney-pictures.svg";
import dreamworks from "../Assets/Images/dreamworks-pictures.svg";
import sony from "../Assets/Images/sony-pictures-1.svg";
import universal from "../Assets/Images/universal-3.svg";
import paramount from "../Assets/Images/paramount-pictures.svg";
import columbia from "../Assets/Images/columbia-pictures-logo-1.svg";
import { motion as m } from "framer-motion";
const Partners = () => {
  const parters = [
    pixar,
    columbia,
    warner,
    legendary,
    disney,
    dreamworks,
    sony,
    universal,
    paramount,
  ];
  return (
    <div className="w-full  mt-10">
      <div className="lgcont overflow-hidden">
        <h3 className="font-[500] text-gray-600 text-[22px] mb-3 dark:text-gray-300">
          Trusted partners
        </h3>
        <m.div
          animate={{
            x: "-50%",
            transition: {
              duration: 20,
              type: "tween",
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="w-max flex items-center gap-4 overflow-auto p-2"
        >
          {parters.map((partner, index) => (
            <div
              className="w-[150px]  h-[100px] rounded overflow-hidden ring-[1px] ring-gray-300 shrink-0 bg-white p-4  shadow-lg"
              key={index}
            >
              <img className="w-full h-full object-fill" src={partner} alt="" />
            </div>
          ))}
          {parters.map((partner, index) => (
            <div
              className="w-[150px]  h-[100px] rounded  ring-[1px] ring-gray-300   shrink-0 bg-white p-4 shadow-lg"
              key={index}
            >
              <img className="w-full h-full object-fill" src={partner} alt="" />
            </div>
          ))}
        </m.div>
        <m.div
          initial={{
            x: "-50%",
          }}
          animate={{
            x: "0%",
            transition: {
              duration: 22,
              type: "tween",
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          className="w-max flex items-center gap-4 overflow-auto mt-5 p-2"
        >
          {parters.map((partner, index) => (
            <div
              className="w-[150px]  h-[100px] rounded  ring-[1px] ring-gray-300   shrink-0 bg-white p-4 shadow-lg"
              key={index}
            >
              <img className="w-full h-full object-fill" src={partner} alt="" />
            </div>
          ))}
          {parters.map((partner, index) => (
            <div
              className="w-[150px]  h-[100px] rounded  ring-[1px] ring-gray-300   shrink-0 bg-white p-4 shadow-lg"
              key={index}
            >
              <img className="w-full h-full object-fill" src={partner} alt="" />
            </div>
          ))}
        </m.div>
      </div>
    </div>
  );
};

export default Partners;
