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
      <div className="px-4 lg:px-24 pt-20">
        <div className="max-w-5xl">
          <h1 className="md:w-4/5 lg:text-7xl sm:text-6xl text-5xl mb-6 text-white font-bold lg:leading-tight sm:leading-tight leading-tight">
            Production-grade AI engineering
            <br />
            for ambitious businesses
          </h1>
          <p className="max-w-2xl text-xl text-gray-300 mb-8">
            Custom AI tools, specialised SaaS products, and embedded engineering
            — built to solve real problems and shipped to production.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-400 mb-10">
            <div>✓ Live RAG system for civil engineers</div>
            <div>✓ Custom AI development + SaaS products</div>
            <div>✓ Long-term technical partnerships</div>
          </div>

          {/* CTA Area */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              className="cursor-pointer group inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-all text-white font-semibold text-lg px-8 py-4 rounded-2xl"
            >
              Start a Project
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              className="cursor-pointer inline-flex items-center justify-center gap-3 border border-white/30 hover:border-white/60 transition-all text-white font-medium text-lg px-8 py-4 rounded-2xl"
            >
              See Our Work
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            No sales pitch. Just honest advice.
          </p>
        </div>
      </div>

      {/* scroll indicator */}
      <Link
        to="services"
        smooth={true}
        className="cs-down_btn md:mt-24 mt-16"
      ></Link>
    </div>
  );
};
