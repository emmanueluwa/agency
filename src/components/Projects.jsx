import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  return (
    <div className="pt-20 pb-10" id="portfolio">
      <div className="text-center lg:px-24 px-4 mb-16">
        <h4 className="text-red-400 font-semibold tracking-widest text-lg uppercase">
          Featured Work
        </h4>
        <h2 className="text-5xl font-bold leading-tight text-white mt-3">
          Real products. Real impact.
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
          From AI-powered SaaS tools to full-stack production systems — built
          and shipped to production.
        </p>
      </div>

      <div className="lg:px-24 px-4">
        <PortfolioSlider />
      </div>
    </div>
  );
};
