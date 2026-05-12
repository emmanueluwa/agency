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
            AI engineering that ships to production — not just to slides
          </h2>

          <div className="space-y-6 text-gray-300 text-[17px] leading-relaxed">
            <p>
              Fulodev is built by a hands-on engineer with a background in civil
              engineering and production AI systems. The flagship product is
              SwiftCiv — a live RAG system that lets civil engineers query
              regulatory documents and get verbatim quotes with exact page
              citations.
            </p>
            <p>Three things on offer:</p>
            <ul className="list-none space-y-3">
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">→</span>
                Custom AI tools and internal systems built for your workflow
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">→</span>
                Niche SaaS products designed around domain-specific problems
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">→</span>
                Embedded AI engineering on a retainer — your on-demand technical
                partner
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Stats + Credibility */}
        <div className="md:w-7/12">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">1</div>
              <div className="text-2xl font-semibold mb-3">Live AI Product</div>
              <p className="text-gray-400">
                SwiftCiv — a production RAG system for civil engineers, live at
                swiftciv.com
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">100%</div>
              <div className="text-2xl font-semibold mb-3">
                Hands-on Delivery
              </div>
              <p className="text-gray-400">
                Every project is built and led directly — no account managers,
                no handoffs
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">∞</div>
              <div className="text-2xl font-semibold mb-3">
                Long-term Partnerships
              </div>
              <p className="text-gray-400">
                Available as your on-demand AI and engineering department on a
                monthly retainer
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-red-400 text-6xl font-bold mb-1">BSc</div>
              <div className="text-2xl font-semibold mb-3">
                Civil Engineering
              </div>
              <p className="text-gray-400">
                Domain experience in the industry — not just the technology
              </p>
            </div>
          </div>

          <div className="mt-10 text-gray-400 text-sm leading-relaxed">
            The goal is simple: deliver AI and software that saves time, reduces
            costs, and creates real competitive advantage — not just impressive
            demos.
          </div>
        </div>
      </div>
    </div>
  );
};
