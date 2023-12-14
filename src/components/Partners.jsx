import React from "react";
import { MovingText } from "./MovingText";
import company1 from "../assets/logo_svg.svg";

export const Partners = () => {
  return (
    <div>
      <MovingText />

      {/* company logos */}
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center gap-8 lg:px-24 px-4 pt-5">
        <img src={company1} alt="image of peteine brand" />
      </div>

      <div className="h-20"></div>
    </div>
  );
};
