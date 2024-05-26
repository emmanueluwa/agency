import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { PopupButton } from "react-calendly";

export const Contact = () => {
  //state tracking if calendly popup is open
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="lg:px-24 px-4">
      <div
        className="relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl"
        id="contact"
      >
        {/* shapes  */}
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>

        {/* text  */}
        <div className="h-full flex items-center justify-center">
          <div className="lg:w-1/2 mx-auto text-center px-4">
            <h2 className="lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6">
              Ready to build a
              <span className="italic"> deeper connection </span>
              with your customers?
            </h2>
            <div className="text-white inline-flex items-center mt-6  gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in">
              <PopupButton
                url="https://calendly.com/fulodev/informal-chat"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
                text="Book a call"
                onClose={() => setIsCalendlyOpen(false)}
              />
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
