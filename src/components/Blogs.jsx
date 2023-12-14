import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const Blogs = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      {/* blog top */}
      <div>
        <h2 className="text-4xl font-bold text-center leading-snug lg:w-4/6 mx-auto pb-20">
          We are agile. We adapt to change. We see change as an opportunity to
          improve, we respond through planning and execution.
        </h2>

        {/* video player */}
        {/* <a href="/">
          <div className="bg-[url('/src/assets/video_bg.jpeg')] bg-cover bg-no-repeat cursor-pointer cs-video_block cs-style1 cs-video_open cs-bg">
            <span className="cs-player_btn cs-accent_color">
              <span></span>
            </span>
          </div>
        </a> */}
      </div>

      <div className="h-28"></div>

      {/* main blog section  */}
      <div className="relative" id="blogs">
        <div classname="flex flex-col lg:flex-row justify-between lg:items-center gap-12">
          {/* content */}
          <div className="lg:w-1/3 space-y-5">
            <h4 className="text-gray-200 font-semibold text-2xl">Our Blog</h4>
            <h2 className="text-5xl font-bold mb-5 leading-snug text-white">
              Explore recent publications
            </h2>
            <a
              href=""
              className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
            >
              <span>View more blogs</span>
              <BsArrowRight />
            </a>
          </div>

          {/* cards */}
          <div className="lg:w-2/3 my-8">
            <div className="flex mb-10">
              <div className="h-8 w-1/3 rounded-s-2xl bg-gray-500"></div>
              <div className="h-8 w-1/3  bg-orange"></div>
              <div className="h-8 w-1/3  bg-gray-500"></div>
              <div className="h-8 w-1/3 rounded-a-2xl bg-orange"></div>
            </div>

            {/* blog cards */}
          </div>
        </div>
      </div>
    </div>
  );
};
