import React from "react";

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
      </div>
    </div>
  );
};
