import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const Contact = () => {
  return (
    <div className="lg:px-24 px-4">
      <div className="relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl">
        {/* shapes  */}
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>

        {/* text  */}
        <div className="h-full flex items-center justify-center">
          <div className="lg:w-1/2 mx-auto text-center px-4">
            <h2 className="lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6">
              Ready to make your business more
              <span className="italic"> efficient</span> ?
            </h2>
            <a
              href=""
              className="text-white inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
            >
              <span>Book a call</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
