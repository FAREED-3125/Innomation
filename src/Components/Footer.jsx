import React from "react";

export const Footer = () => {
  return (
    <div className="dark:bg-black bg-spaceblue w-full min-h-[1000px] lg:h-[800px] py-10 lg:py-0  mt-[100px] flex items-center justify-center">
      <div className="lgcont  flex flex-col lg:flex-row  h-[95%] lg:h-[80%] gap-[80px] lg:gap-0">
        {/* compny detail and address container starts  */}
        <div className="w-full h-full flex flex-col justify-between gap-[50px] lg:gap-0">
          <div className="h-full  flex items-start justify-between  w-[80%] mx-auto flex-wrap gap-5 ">
            <div className="mt-2 lg:mt-8">
              <h3 className="text-[24px] text-white">Links</h3>
              <div className="flex flex-col gap-2 mt-3 text-gray-400">
                <a href="">products</a>
                <a href="">services</a>
                <a href="">partners</a>
                <a href="">about</a>
              </div>
            </div>
            <div className="mt-2 lg:mt-8">
              <h3 className="text-[24px] text-white">Partners</h3>
              <div className="flex flex-col gap-2 mt-3 text-gray-400">
                <a href="">disney</a>
                <a href="">dream works</a>
                <a href="">Sony</a>
                <a href="">Pixar</a>
                <a href="">Legendary</a>
                <a href="">columbia pictures</a>
              </div>
            </div>
            <div className="mt-2 lg:mt-8">
              <h3 className="text-[24px]  text-white">Partners</h3>
              <div className="flex flex-col gap-2 mt-3 text-gray-400">
                <a href="">disney</a>
                <a href="">dream works</a>
                <a href="">Sony</a>
                <a href="">Pixar</a>
                <a href="">Legendary</a>
                <a href="">columbia pictures</a>
              </div>
            </div>
          </div>
          <div className="h-full w-[80%]   mx-auto flex-col flex justify-center">
            <h3 className="text-[24px] text-white">Address:</h3>
            <div className="mt-5 text-[18px] text-gray-400">
              <p>innnomation3125@gmail.com</p>
              <p>southern waleys</p>
              <p>10/123, @some street name </p>
              <p>los angels,America</p>
            </div>
          </div>
        </div>
        {/* compny detail and address container ends */}

        {/* mail box container starts  */}
        <div className="w-full lg:w-[80%] flex flex-col justify-between mx-auto h-full ">
          <div className="">
            <div className="text-center">
              <h3 className="text-[26px] font-[700] text-white">Contact us</h3>
              <p className="mt-3 text-gray-300 font-[500] md:w-[85%] lg:w-full mx-auto">
                Ready to get started on your next animation project or have any
                questions? We'd love to hear from you. Feel free to reach out,
                and our dedicated team will be happy to assist you in bringing
                your creative ideas to life.
              </p>{" "}
            </div>
            <div className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto h-[250px] mt-[60px] ring-2 ring-slate-700 rounded-lg p-2">
              <input
                type="email"
                className="w-full h-[50px] rounded-lg pl-3 mt-2 bg-slate-900 outline-none"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="w-full mt-5 rounded-lg h-[50px] pl-3 bg-slate-900 outline-none"
                placeholder="name"
              />
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 w-full h-[55px] p-[1px] rounded-lg mt-12">
                <div className="w-full h-full bg-spaceblue rounded-lg flex items-center justify-center">
                  <h3 className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 text-transparent bg-clip-text w-max font-[500] text-[20px]">
                    Submit
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="font-[300] text-center mt-[100px] text-white">
            design & build{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 text-transparent bg-clip-text w-max font-[500]">
              Fareed
            </span>
          </div>
        </div>
        {/* mail box container ends */}
      </div>
    </div>
  );
};
