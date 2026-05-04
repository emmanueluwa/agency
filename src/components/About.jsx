import React from "react";

export const About = () => {
  return (
    <div className="text-white md:-mt-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-3xl z-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url(/src/assets/funfact_bg.svg)] bg-no-repeat bg-center opacity-10"></div>

      <div className="relative flex flex-col md:flex-row gap-12 items-center">
        {/* Left - Story */}
        <div className="md:w-5/12" id="about">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            We build AI systems that actually move the needle
          </h2>

          <div className="space-y-6 text-gray-300 text-[17px] leading-relaxed">
            <p>
              Founded by a hands-on engineer, we started by building real
              products — not just client websites. Our flagship product is a
              production-ready RAG (Retrieval-Augmented Generation) system for
              structural engineers.
            </p>
            <p>
              Today we operate as an{" "}
              <span className="text-white font-medium">AI Software Agency</span>{" "}
              that does three things:
            </p>
            <ul className="list-none space-y-3">
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">→</span>
                Builds custom AI tools and internal systems
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">→</span>
                Launches niche SaaS products
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">→</span>
                Acts as your long-term embedded AI &amp; engineering team
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Stats + Credibility */}
        <div className="md:w-7/12">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">1</div>
              <div className="text-2xl font-semibold mb-3">
                Production AI Product
              </div>
              <p className="text-gray-400">
                Live RAG system used by structural engineering firms
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">100%</div>
              <div className="text-2xl font-semibold mb-3">
                Hands-on Delivery
              </div>
              <p className="text-gray-400">
                Every project is led by experienced engineers, not account
                managers
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">∞</div>
              <div className="text-2xl font-semibold mb-3">
                Long-term Partnerships
              </div>
              <p className="text-gray-400">
                We become your on-demand AI &amp; development department
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">2026</div>
              <div className="text-2xl font-semibold mb-3">Built for Scale</div>
              <p className="text-gray-400">
                From solo founder to full agency — we grow with our clients
              </p>
            </div>
          </div>

          <div className="mt-10 text-gray-400 text-sm leading-relaxed">
            Our mission is simple: Deliver AI and software solutions that save
            time, reduce costs, and create real competitive advantage — not just
            pretty interfaces.
          </div>
        </div>
      </div>
    </div>
  );
};
