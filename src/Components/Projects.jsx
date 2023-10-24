import React, { useEffect, useRef } from "react";
import { motion as m } from "framer-motion";
import dragon from "../Assets/Images/cute dragon.svg";
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
const Projects = () => {
  const project = useRef();
  const { scrollYProgress } = useScroll({
    target: project,
    offset: ["start start", "end end"],
  });

  const transX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "0%", "-40%", "-90%", "-130%", "-130%"]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["1", ".9", ".5", "0", "0", 0]
  );
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0", "0", ".4", ".8", "1", 1]
  );

  return (
    <section className="w-full h-[400vh] relative  pt-5 mt-10" ref={project}>
      <m.div className="sticky top-[0px] z-[99] lgcont overflow-clip">
        <m.div
          className="flex gap-[30%] overflow-visible"
          style={{
            translateX: transX,
          }}
        >
          {" "}
          {/* about container starts  */}
          <Aboutus scale1={scale1} />
          {/* about container ends */}
          {/* service container starts  */}
          <Services scale2={scale2} />
          {/* service container ends */}
        </m.div>
      </m.div>
      <Bubbles />
    </section>
  );
};

const Aboutus = ({ scale1 }) => {
  return (
    <m.div
      className="w-full h-[800px] flex items-center relative overflow-hidden shrink-0 origin-left"
      style={{
        scale: scale1,
        opacity: scale1,
      }}
    >
      <div className="lg:w-[70%] mx-auto relative z-[99]">
        <h3 className="font-[900] text-[24px] lg:text-[35px] text-gray-700 dark:text-white">
          About us
        </h3>

        <p className="text-gray-600 lg:text-[24px] dark:text-gray-300 text-[18px] mt-3">
          Welcome to Innomation, a leading animation studio dedicated to turning
          imagination into reality. Our passion for storytelling through
          animation is at the heart of everything we do. With years of
          experience in the industry, we take pride in creating captivating
          visuals that leave a lasting impression. From concept to completion,
          we work tirelessly to bring your ideas to life, crafting unique
          animations that engage, inform, and entertain.
        </p>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-[200px] h-[70px] rounded-full p-[1px]  mt-10 overflow-hidden">
          <div className="w-full h-full dark:bg-spaceblue bg-white text-gray-600 dark:text-white rounded-full flex items-center justify-center tet-white text-[18px] font-[700]">
            <span className="bg-gradient-to-r  from-blue-500 via-purple-500 to-violet-500 w-max  bg-clip-text text-transparent">
              testimonials
            </span>
          </div>
        </div>
      </div>
    </m.div>
  );
};

const Services = ({ scale2 }) => {
  return (
    <m.div
      className="w-full h-[800px] flex items-center relative overflow-hidden shrink-0 origin-left"
      style={{ scale: scale2, opacity: scale2 }}
    >
      <div className="lg:w-[70%] mx-auto relative z-[99]">
        <h3 className="font-[900] text-[24px] lg:text-[35px] text-gray-700 dark:text-white">
          our services
        </h3>

        <p className="text-gray-600 lg:text-[24px] dark:text-gray-300 text-[18px] mt-3">
          `Explore the wide spectrum of animation services we offer at [Your
          Company Name]. Whether you're looking for 2D or 3D animation,
          character design, explainer videos, or motion graphics, we've got you
          covered. Our team of talented artists and animators collaborates with
          you to deliver animations that not only meet but exceed your
          expectations. We're committed to providing innovative solutions that
          cater to all your animation needs. `
        </p>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-[200px] h-[70px] rounded-full p-[1px] mt-10 overflow-hidden">
          <div className="w-full h-full dark:bg-spaceblue bg-white text-gray-600 dark:text-white rounded-full flex items-center justify-center tet-white text-[18px] font-[700]">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-max  bg-clip-text text-transparent">
              meet the team
            </span>
          </div>
        </div>
      </div>
    </m.div>
  );
};

const Bubbles = () => {
  return (
    <>
      <div className="w-[200px] h-[200px] bg-gradient-to-t blur-[5px] from-blue-500 via-purple-500 to-violet-500  rounded-full absolute top-[40%] left-[30%]"></div>
      <div className="w-[100px] h-[100px] bg-gradient-to-l  blur-[2px] from-blue-500 via-purple-500 to-violet-500  rounded-full absolute top-[60px] left-[100px]"></div>{" "}
      <div className="w-[100px] h-[100px] bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500  rounded-full absolute bottom-[60px] right-[100px]  blur-[3px]"></div>{" "}
      <div className="w-[40px] h-[40px] bg-gradient-to-r blur-[4px] from-blue-500 via-purple-500 to-violet-500  rounded-full absolute left-[10%] bottom-[30%]"></div>{" "}
      <div className="w-[50px] h-[50px] bg-gradient-to-b blur-[4px] from-blue-500 via-purple-500 to-violet-500  rounded-full absolute top-[50%] right-[70px]"></div>
    </>
  );
};

export default Projects;
