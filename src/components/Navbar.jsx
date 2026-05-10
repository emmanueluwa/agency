import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Contact", path: "contact" },
  ];

  const NavLink = ({ item }) => {
    if (isHome) {
      return (
        <ScrollLink
          to={item.path}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          className="block text-base text-white uppercase hover:text-orange cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.link}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        to={`/#${item.path}`}
        className="block text-base text-white uppercase hover:text-orange cursor-pointer"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.link}
      </RouterLink>
    );
  };

  return (
    <header className="bg-transparent w-full fixed top-0 right-0 left-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in"
            : "transition-all duration-300 ease-in"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <RouterLink to="/" className="text-white text-5xl font-bold">
            <span className="text-orange">f</span>ulodev
          </RouterLink>

          {/* large devices */}
          <ul className="md:flex space-x-12 hidden navitems items-center">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
            <RouterLink
              to="/blog"
              className="block text-base text-white uppercase hover:text-orange cursor-pointer"
            >
              Blog
            </RouterLink>
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-transparent text-white p-2 border rounded-full">
              <FaBarsStaggered className="w-4 h-4 hover:text-orange" />
            </button>
          </div>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBarsStaggered className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-dark transition-all duration-300 ease-in ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
          <RouterLink
            to="/blog"
            className="block text-base text-white uppercase hover:text-orange cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </RouterLink>
        </div>
      </nav>
    </header>
  );
};
