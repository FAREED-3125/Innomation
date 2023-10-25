import React from "react";
import spaceboy from "../Assets/Images/Group 30.svg";
import dragon from "../Assets/Images/cute dragon.svg";
import { motion as m } from "framer-motion";
const Hero = () => {
  const spanVariant = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 100,
    },
    animate: (e) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: e * 0.1,
        duration: 0.3,
      },
    }),
  };
  return (
    <section className="w-full">
      <div className="w-full  h-[700px] mt-[10px]  lgcont overflow-hidden lg:flex relative">
        {/* text div starts  */}{" "}
        <div className=" h-[25%] lg:h-full lg:w-[55%] flex flex-col justify-center items-center relative z-[99]">
          <h3 className="font-[700] text-[25px] lg:text-[50px] text-center lg:text-left md:w-[80%] mx-auto lg:w-full ">
            {`Turning Imagination into`.split(" ").map((word, index) => (
              <m.span
                variants={spanVariant}
                animate="animate"
                initial="initial"
                custom={index}
                key={index}
                className=" inline-block mr-3"
              >
                {word}
              </m.span>
            ))}
            <m.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-max  bg-clip-text text-transparent"
            >
              Animation
            </m.span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              {`- Where Stories Come to Life`.split(" ").map((word, index) => (
                <m.span
                  variants={spanVariant}
                  animate="animate"
                  initial="initial"
                  custom={index + 4}
                  key={index}
                  className=" inline-block mr-3"
                >
                  {word}
                </m.span>
              ))}
            </span>
          </h3>
          <m.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.2,
              },
            }}
            className="hidden lg:block font-[400] text-slate-900 dark:text-slate-400 w-[85%] mr-auto"
          >
            Welcome to Inovation, a creative hub dedicated to crafting
            captivating animations that enchant, entertain, and inspire. Our
            passionate team of artists, storytellers, and technical wizards work
            tirelessly to bring your visions to life. Explore our portfolio and
            discover how we can transform your ideas into unforgettable animated
            experiences.
          </m.p>
        </div>
        {/* text div ends */}
        {/* <image div starts  */}
        <m.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: [0, 1.2, 1],
            transition: {
              delay: 1.1,
              type: "tween",
              duration: 0.6,
            },
          }}
          className="h-[75%]  overflow-hidden lg:h-full lg:w-[45%] relative z-[99]"
        >
          <img
            src={spaceboy}
            alt=""
            className="w-full h-full object-cover md:object-fill lg:object-fill    lg:translate-y-[10%]"
          />
        </m.div>
        {/* <image div ends */}
        <div className="w-[400px] h-[400px] rounded-full blur-[200px]  hidden  md:block bg-gradient-to-r from-purple-500 to-violet-500 absolute top-[10vh] right-[20vw]"></div>
      </div>
    </section>
  );
};

export default Hero;
