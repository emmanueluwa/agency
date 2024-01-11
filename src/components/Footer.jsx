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
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
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
              href="https://www.linkedin.com/company/fulodev/"
              target="_blank"
              rel="noopener"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fulo.learning/"
              target="_blank"
              rel="noopener"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/FULODEV_"
              target="_blank"
              rel="noopener"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/emmanuel.fulodev"
              target="_blank"
              rel="noopener"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* service */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Services</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
              Website Applications
            </a>
            <a href="/" className="block">
              Marketing Automation
            </a>
            <a href="/" className="block">
              Saas
            </a>
            <a href="/" className="block">
              Business Automation
            </a>
          </div>
        </div>

        {/* contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="space-y-3 text-gray-300">
            {/* <div className='space-y-3'>number</div> */}
            <p>emmanuel@fulodev.com</p>
            {/* <p>address, <br/>address</p> */}
          </div>
        </div>

        {/* subscribe */}
        {/* <div className="space-y-4 lg:w-96">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <div className="space-y-3 text-gray-300">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="example@email.com"
                className="newsletter_input"
              />
              <button className="newsletter_btn">
                <span>Send</span>
              </button>
            </div>

            <p>
              Subscribe to the newsletter to keep up to date with our journey.
            </p>
          </div>
        </div> */}
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-300" />
      <div className="h-8"></div>

      {/* copyright */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        <p>Copyright @ 2022 Fulodev.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
