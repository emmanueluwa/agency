import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="banner cs-style1" id="home">
      {/* css shapes */}
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>

      {/* banner content */}
      <div className="px-4 lg:px-24">
        <h1 className="md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug">
          Mission: Make Things Better
        </h1>

        {/* banner button and text */}
        <div className="text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8">
          <div>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              className="cursor-pointer inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
            >
              <span>Get a Quote</span>
              <BsArrowRight />
            </Link>
          </div>
          <div className="md:w-1/2">
            <p className="">
              We use software to provide solutions to problems.
            </p>
          </div>
        </div>
      </div>

      {/* scroll for service section  */}
      <Link
        to="services"
        smooth={true}
        className="cs-down_btn md:mt-20 mt-8"
      ></Link>
    </div>
  );
};
