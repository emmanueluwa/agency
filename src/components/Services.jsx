import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

//images
import service1 from "../assets/service_1.jpeg";
import service2 from "../assets/service_2.jpeg";
import service3 from "../assets/service_3.jpg";
import service4 from "../assets/service_4.jpeg";

export const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      <div className="h-36"></div>

      {/* services */}
      <div className="pt-5 " id="services">
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-red-400">
              Pricing
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              websites alone are not enough anymore, build a deeper connection
              with your customers.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
            Choose the product that works best
          </p>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* <!-- First Product --> */}
            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product1"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Package 1
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Product details for standard package
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  5000 GBP
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                aria-describedby="product1"
                className="cursor-pointer bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Order Now
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  pubslished to apple and android stores
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  strategic brand identity
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  training videos & post launch support
                </li>
              </ul>
            </div>

            {/* <!-- Second Product --> */}
            <div className="bg-white/5 ring-2 ring-red-500 rounded-3xl p-8 xl:p-10">
              <div className="flex items-baseline justify-between gap-x-4">
                <h2
                  id="product2"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Package 2
                </h2>
                <p className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                The most popular choice. Premium package
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  10000 GBP
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                aria-describedby="product2"
                className="cursor-pointer bg-red-500 text-white shadow-sm hover:bg-red-400 focus-visible:outline-red-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Order Now
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  published to apple and android stores
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  free optimised website
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  free ongoing maintenance
                </li>
              </ul>
            </div>

            {/* <!-- Third Product --> */}
            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product3"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Package 3
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Product details for support package
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  4000 GBP / m
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                aria-describedby="product3"
                className="cursor-pointer bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Order Now
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  application fixes
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  ongoing support, updates and maintenance
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  technology and social media solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};
