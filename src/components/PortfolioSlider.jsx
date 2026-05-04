import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";

// Import images (replace with actual screenshots)
import ragImage from "../assets/swift.png"; // Your RAG app
import bookingImage from "../assets/booking-platform.jpg"; // Add screenshot of the pet grooming app

const PortfolioSlider = () => {
  const projects = [
    {
      title: "Structural Engineering RAG Assistant",
      subtitle: "Flagship SaaS Product",
      description:
        "Production-ready document intelligence platform. Engineers upload PDFs, standards, and reports and receive accurate, source-referenced answers instantly.",
      tags: ["RAG", "AI", "SaaS", "Live"],
      image: ragImage,
      url: "#",
      status: "LIVE",
    },
    {
      title: "Pet Grooming Booking Platform",
      subtitle: "Full-Stack Production System",
      description:
        "Complete booking and client management system with FastAPI backend, PostgreSQL, automated Telegram confirmations, and scalable AWS infrastructure.",
      tags: ["FastAPI", "PostgreSQL", "AWS", "Automation"],
      image: bookingImage,
      url: "#",
      status: "LIVE",
    },
    {
      title: "AI Document Automation System",
      subtitle: "Client / Internal Project",
      description:
        "Custom RAG + workflow automation tools that dramatically reduce time spent searching through technical documents and manuals.",
      tags: ["RAG", "Automation", "AI"],
      image: ragImage,
      url: "#",
      status: "DELIVERED",
    },
    {
      title: "Embedded AI & Development Partnership",
      subtitle: "Ongoing Managed Service",
      description:
        "Acting as the on-demand engineering and AI team for businesses — building, maintaining, and scaling their technical capabilities month after month.",
      tags: ["Managed Service", "AI", "Long-term"],
      image: ragImage,
      url: "#",
      status: "PARTNERSHIP",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="portfolio-slider -mx-2">
      {projects.map((project, index) => (
        <div key={index} className="px-2">
          <a
            href={project.url}
            target={project.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group block relative bg-[#1a1a1a] rounded-3xl overflow-hidden h-full border border-white/10 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="relative h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-black/70 backdrop-blur-sm border border-white/20">
                {project.status}
              </div>
            </div>

            <div className="p-7">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-white/5 text-gray-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-2 font-medium">
                {project.subtitle}
              </p>

              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center text-red-400 text-sm font-medium group-hover:gap-2 transition-all">
                View Project
                <BsArrowRight className="ml-1 transition" />
              </div>
            </div>
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default PortfolioSlider;
