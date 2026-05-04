import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white pt-20 pb-12">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12">
        {/* Left - Brand */}
        <div className="space-y-4 lg:w-1/3">
          <a href="/" className="text-white text-3xl font-bold">
            <span className="text-red-400">f</span>ulodev
          </a>
          <p className="text-gray-400 max-w-xs">
            AI Software Agency building custom tools, SaaS products, and serving
            as your embedded engineering team.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/company/fulodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-red-500 p-3 rounded-full transition-all hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Navigation</h3>
          <div className="space-y-3 text-gray-400">
            <a href="#about" className="block hover:text-white transition">
              About
            </a>
            <a href="#services" className="block hover:text-white transition">
              Services
            </a>
            <a href="#portfolio" className="block hover:text-white transition">
              Projects
            </a>
            <a href="#partners" className="block hover:text-white transition">
              Clients
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <div className="space-y-3 text-gray-400">
            <a href="#services" className="block hover:text-white transition">
              Custom AI Development
            </a>
            <a href="#services" className="block hover:text-white transition">
              RAG & Document AI
            </a>
            <a href="#services" className="block hover:text-white transition">
              SaaS Product Development
            </a>
            <a href="#services" className="block hover:text-white transition">
              Embedded AI Team
            </a>
            <a href="#services" className="block hover:text-white transition">
              Mobile & Web Applications
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <div className="space-y-3 text-gray-400">
            <a
              href="mailto:emmanuel@fulodev.com"
              className="block hover:text-white transition"
            >
              emmanuel@fulodev.com
            </a>
            <p className="text-sm text-gray-500">
              I reply to every message personally.
            </p>
          </div>
        </div>
      </div>

      <div className="h-16"></div>
      <hr className="border-white/10" />
      <div className="h-8"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Fulodev. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-300 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
