import React from "react";
import company1 from "../assets/logo_svg.svg"; // Peteine
import { MovingText } from "./MovingText";

import company2 from "../assets/LunaLearn.svg";
import company3 from "../assets/grooming.svg";

export const Partners = () => {
  return (
    <div className="py-20 bg-black/40" id="partners">
      <div className="text-center mb-12 px-4">
        <h4 className="text-red-400 font-semibold tracking-widest text-sm uppercase mb-3">
          TRUSTED BY
        </h4>
        <h2 className="text-4xl font-bold text-white">
          Real businesses. Real results.
        </h2>
      </div>

      {/* Moving Text / Marquee */}
      <MovingText />

      {/* Company Logos */}
      <div className="lg:px-24 px-6 pt-8">
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center gap-12 opacity-75 hover:opacity-100 transition-all duration-300">
          <div className="flex justify-center">
            <img
              src={company1}
              alt="Peteine"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={company2}
              alt="LunaLearn"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={company3}
              alt="Grooming Loft London"
              className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* You can duplicate or add more logos here for better balance */}
          <div className="flex justify-center lg:block hidden">
            <img
              src={company1}
              alt="Peteine"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center lg:block hidden">
            <img
              src={company2}
              alt="LunaLearn"
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center lg:block hidden">
            <img
              src={company3}
              alt="Grooming Loft London"
              className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};
