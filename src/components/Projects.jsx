import React from "react";
import PortfolioSlider from "./PortfolioSlider";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Projects = () => {
  return (
    <div>
      <div className="text-center pb-14 lg:px-24 px-4" id="portfolio">
        <h4 className="text-gray-200 font-semibold text-2xl">
          Latest Projects
        </h4>
        <h2 className="text-5xl font-bold leading-snug text-white">
          Explore our most popular projects
        </h2>
        <div className="md:h-24 h-12"></div>
        <div className="h-full flex items-center justify-center">
          <div className="lg:w-1/2 mx-auto text-center px-4">
            <a
              href=""
              className="text-white inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
            >
              <BsArrowLeft />
              <span>Click and Swipe</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* carousel card */}
      <div className="lg:px-24 px-4 overflow-hidden">
        <PortfolioSlider />
      </div>

      <div className="md:h-24 h-12"></div>
    </div>
  );
};
