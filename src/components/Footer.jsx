import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white">
      {/* footer top */}
      <div>
        {/* logo text */}
        <div className="space-y-4 lg:w-1/3">
          <a href="/" className="text-white text-3xl font-bold">
            <span className="text-orange">f</span>ulodev
          </a>
          <p className="text-gray-200">
            Join us on our journey towards making things better.
          </p>

          {/* socials */}
          <div className="flex gap-5 text-white">
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fulo.learning/"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/FULODEV_"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/emmanuel.fulodev"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
