import React from "react";
import { Link } from "react-scroll";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PortfolioSlider = () => {
  const projects = [
    {
      title: "Pet friendly property renting platform",
      subtitle: "See Details",
      // url: "https://www.peteine.com/",
      image: "public/images/peteine.png",
    },
    {
      title: "Connect with pet owners worldwide",
      subtitle: "See Details",
      // url: "/",
      image: "public/images/petm8.png",
    },
    {
      title: "Generate dog images with AI",
      subtitle: "See Details",
      // url: "https://www.creator.fulodev.com/",
      image: "public/images/icons.png",
    },
    {
      title: "Pet friendly property renting platform",
      subtitle: "See Details",
      // url: "https://www.peteine.com/",
      image: "public/images/peteine.png",
    },
    {
      title: "Connect with pet owners worldwide",
      subtitle: "See Details",
      // url: "/",
      image: "public/images/petm8.png",
    },
    {
      title: "Generate dog images with AI",
      subtitle: "See Details",
      // url: "https://www.creator.fulodev.com/",
      image: "public/images/icons.png",
    },
    {
      title: "Pet friendly property renting platform",
      subtitle: "See Details",
      // url: "https://www.peteine.com/",
      image: "public/images/peteine.png",
    },
    {
      title: "Connect with pet owners worldwide",
      subtitle: "See Details",
      // url: "/",
      image: "public/images/petm8.png",
    },
    {
      title: "Generate dog images with AI",
      subtitle: "See Details",
      // url: "https://www.creator.fulodev.com/",
      image: "public/images/icons.png",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="lg:-mx-64 gap-5">
      {projects.map((item, index) => (
        <Link key={index} to="/" className={`cs-portfolio cs-bg relative`}>
          <div className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl"></div>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div className="absolute top-0 left-0 hover:bg-orange/80 w-full h-full flex items-center justify-center rounded-2xl cursor-pointer">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
              <p className="cs-portfolio_subtitle">{item.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default PortfolioSlider;
