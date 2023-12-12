import React from "react";
import banner from "../assets/funfact_bg.svg";

export const About = () => {
  return (
    <div className="text-white md:-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12 relative">
      <div className="bg-[url(/src/assets/funfact_bg.svg)] bg-no-repeat bg-center h-full w-full absolute top-0 left-0 opacity-75"></div>

      {/* left text  */}
      <div className="md:w-2/5" id="about">
        <h2 className="text-5xl font-bold mb-5">A little about us</h2>
        <p className="text-gray-300">
          We aim to help in areas meaningful and impactful to us. Our current
          interests are animals, health and wellness, sustainability, psychology
          and AI.
        </p>
      </div>

      {/* right text  */}
      <div className="md:w-3/5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">6</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Industries of Interest
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">5</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Projects Completed
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">1</h4>
            <div>
              {/* <span className="text-orange font-bold text-lg">+</span> */}
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Engineer
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">2</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Industry Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
