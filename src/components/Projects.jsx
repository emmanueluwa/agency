import React from "react";
import PortfolioSlider from "./PortfolioSlider";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      </div>

      {/* carousel card */}
      <div className="lg:px-24 px-4 overflow-hidden">
        <PortfolioSlider />
      </div>
    </div>
  );
};
