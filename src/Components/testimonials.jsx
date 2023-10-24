import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TbArrowNarrowRight } from "react-icons/tb";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { motion as m } from "framer-motion";
import "swiper/css/bundle";
import "swiper/css/navigation";

const Testimonials = () => {
  const testname = [
    "fareed",
    "karan",
    "joseph",
    "Denver matrick",
    "spike roller",
    "adam smith",
  ];
  const testmsg = [
    "Working with [Your Company Name] was a delightful experience. They took our concept and turned it into a mesmerizing animation that exceeded our expectations. Their attention to detail and commitment to delivering quality is truly commendable. We look forward to collaborating on future projects.",
    "We entrusted [Your Company Name] with our product's explainer video, and they delivered a masterpiece. The animation not only simplified our complex product but also engaged our audience in a fun and informative way. The team's creativity and professionalism are top-notch.",
    "The animations created by [Your Company Name] added a new dimension to our marketing campaigns. Their ability to convey our brand's message through visuals is exceptional. It's a pleasure to work with a team that's not only skilled but also highly responsive to our needs.",
    "We've been collaborating with [Your Company Name] for several projects, and each time, they have delivered animations that leave a lasting impact. Their versatility, from 2D character animations to technical motion graphics, is impressive. They're a trusted partner in our creative endeavors.",
    "As an educational institution, we needed animations to make learning engaging and interactive. [Your Company Name] understood our vision perfectly and created animations that have made a significant difference in our e-learning materials. Their dedication to our project was exceptional.",
    "We couldn't be happier with the animations produced by [Your Company Name]. They transformed our ideas into visually stunning stories that resonate with our audience. Their animations have become an integral part of our brand's identity, and we highly recommend their services.",
  ];
  return (
    <div className="w-full h-[370px] mt-[80px]   ">
      <div className="lgcont  h-full">
        <h3 className="text-center text-[22px] dark:text-white flex items-center gap-8 justify-center text-gray-600 lg:text-[28px] font-[700] mb-5 cursor-pointer">
          {" "}
          <m.span
            whileTap={{ scale: 1.2 }}
            className="prev-element inline-flex w-[50px] h-[50px]  items-center justify-center text-[34px] rounded-full shadow-md ring-[1px] ring-gray-200"
          >
            <TbArrowNarrowLeft />
          </m.span>
          <span>Testimonials</span>
          <m.span
            whileTap={{ scale: 1.2 }}
            className="next-element inline-flex w-[50px] h-[50px]   items-center justify-center text-[34px] rounded-full shadow-md ring-[1px] ring-gray-200 cursor-pointer"
          >
            <TbArrowNarrowRight />
          </m.span>
        </h3>
        {/* swiper contaienr starts  */}
        <div className="lg:w-[80%] mt-8 h-[300px] flex items-center justify-center  mx-auto">
          <Swiper
            effect="coverflow"
            spaceBetween={50}
            modules={[Navigation, EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
            }}
            navigation={{
              prevEl: ".prev-element",
              nextEl: ".next-element",
            }}
            loop={true}
            grabCursor={true}
          >
            {testmsg.map((msg, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[250px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 p-[2px]">
                  <div
                    className=" p-3 flex rounded-lg bg-white
                 items-center justify-center w-full h-full text-[14px] backdrop-blur-[2px] dark:bg-spaceblue text-gray-600 dark:text-gray-300"
                  >
                    <p>
                      <span className="">
                        <RiDoubleQuotesL />
                      </span>
                      {msg}{" "}
                      <span className=" ">
                        <RiDoubleQuotesR />
                      </span>
                    </p>
                  </div>{" "}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>{" "}
        {/* swiper contaienr ends */}
      </div>
    </div>
  );
};

export default Testimonials;
