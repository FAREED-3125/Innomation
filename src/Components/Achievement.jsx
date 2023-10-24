import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
const Achievement = () => {
  return (
    <div className="w-full min-h-[300px]  flex items-center">
      <div className="lgcont grid min-h-[275px]  md:grid-cols-2 lg:grid-cols-3 gap-[50px] px-[20px]">
        <AchievContainer
          number={"1000+"}
          title={"Projects"}
          message={
            "With a rich history of creativity, we've successfully completed over a thousand animated projects, each one a unique masterpiece."
          }
          custom={0}
        />
        <AchievContainer
          number={"100+"}
          title={" Satisfied Clients"}
          message={
            "We've had the pleasure of working with over 50 satisfied clients who have entrusted us with their animation needs."
          }
          custom={1}
        />
        <AchievContainer
          number={"100%"}
          title={"Client Satisfaction Rate"}
          message={
            "Our commitment to excellence is reflected in our 100% client satisfaction rate, a testament to our dedication to delivering top-notch animations."
          }
          custom={2}
        />
      </div>
    </div>
  );
};

const AchievContainer = ({ number, title, message, custom }) => {
  const [widthport, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  console.log(widthport);
  return (
    <div className="overflow-hidden p-1 w-full h-full">
      <m.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "linear",
            delay: widthport < 740 ? 0 : custom * 0.3,
          },
        }}
        className="w-full min-h-[275px] h-full py-7 px-5 shadow-xl rounded-2xl dark:shadow-gray-900 ring-slate-300 dark:ring-2 ring-[1px] dark:ring-gray-800 flex items-center lg:items-start justify-start  flex-col"
      >
        <div className="flex items-center lg:items-start flex-col">
          <h3 className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-max  bg-clip-text text-transparent text-[44px] font-[900] text-center">
            {number}
          </h3>
          <p className="text-[22px] text-center lg:text-start">{title}</p>
        </div>
        <div className="mt-3">
          <p className="dark:text-gray-300 text-center lg:text-start text-gray-500">
            {message}
          </p>
        </div>
      </m.div>
    </div>
  );
};

export default Achievement;
