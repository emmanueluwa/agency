import React from "react";
import { Link } from "react-scroll";
import { RouterLink } from "react-router-dom";

export const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      <div className="h-36"></div>

      <div className="pt-5" id="services">
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-red-400">
              SERVICES
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI-Powered Software for Ambitious Businesses
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
              Custom AI tools, specialised SaaS products, and embedded
              engineering — built to solve real problems and shipped to
              production.
            </p>
          </div>

          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Custom Projects */}
            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2 className="text-lg font-semibold leading-8 text-white">
                  Custom Projects
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                One-time builds and AI implementations, scoped to your problem.
              </p>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                className="cursor-pointer bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get in Touch
              </Link>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li className="flex gap-x-3">
                  ✓ Custom websites &amp; web apps
                </li>
                <li className="flex gap-x-3">
                  ✓ AI RAG / Document Intelligence systems
                </li>
                <li className="flex gap-x-3">
                  ✓ Mobile apps (iOS &amp; Android)
                </li>
                <li className="flex gap-x-3">
                  ✓ Automation &amp; workflow tools
                </li>
                <li className="flex gap-x-3">
                  ✓ Integrations with existing systems
                </li>
              </ul>
            </div>

            {/* SaaS Products */}
            <div className="bg-white/5 ring-2 ring-red-500 rounded-3xl p-8 xl:p-10 relative">
              <div className="flex items-baseline justify-between gap-x-4">
                <h2 className="text-lg font-semibold leading-8 text-white">
                  SaaS Products
                </h2>
                <p className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  LIVE NOW
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Ready-to-use AI tools built for specific industries.
              </p>
              <Link
                to="portfolio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                className="cursor-pointer bg-red-500 text-white shadow-sm hover:bg-red-400 focus-visible:outline-red-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                See Our Products
              </Link>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li className="flex gap-x-3">
                  ✓ SwiftCiv — RAG assistant for civil engineers (Live)
                </li>
                <li className="flex gap-x-3">
                  ✓ Document AI &amp; Knowledge Bases
                </li>
                <li className="flex gap-x-3">✓ Internal AI tools for teams</li>
                <li className="flex gap-x-3">
                  ✓ White-label &amp; custom versions available
                </li>
                <li className="flex gap-x-3">
                  ✓ Fast onboarding &amp; dedicated support
                </li>
              </ul>
            </div>

            {/* Embedded AI Department */}
            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2 className="text-lg font-semibold leading-8 text-white">
                  Embedded AI Engineering
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                A long-term technical partnership on a monthly retainer.
              </p>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                className="cursor-pointer bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Let&apos;s Talk
              </Link>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                <li className="flex gap-x-3">
                  ✓ Ongoing development &amp; maintenance
                </li>
                <li className="flex gap-x-3">
                  ✓ AI strategy &amp; new feature delivery
                </li>
                <li className="flex gap-x-3">
                  ✓ Dedicated engineer time every month
                </li>
                <li className="flex gap-x-3">
                  ✓ Technical support &amp; training
                </li>
                <li className="flex gap-x-3">✓ Scales with your business</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Not sure what fits? Get in touch and expect honest advice, not a
              sales pitch.
            </p>
          </div>
        </div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};
