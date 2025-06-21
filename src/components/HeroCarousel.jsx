import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import OptimizedImage from "./OptimizedImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Soin du visage et peau",
    description:
      "Offrez à votre peau un soin complet et revitalisant, pour un teint frais, lumineux et éclatant de santé.",
    image: "/images/pexels-arina-krasnikova-6663574",
    anchor: "visage-corps",
  },
  {
    id: 2,
    title: "Soins techniques spécifiques",
    description:
      "Des techniques innovantes et douces pour améliorer la texture de votre peau et révéler sa beauté naturelle.",
    image: "/images/pexels-polina-tankilevitch-3738355",
    anchor: "techniques-specifiques",
  },
  {
    id: 3,
    title: "Soins corporels et esthétiques",
    description:
      "Prenez soin de votre corps avec des soins ciblés pour une peau douce, hydratée et éclatante de vitalité.",
    image: "/images/pexels-shkrabaanthony-5177995",
    anchor: "minceur-epilation",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    arrows: true,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <div className="relative w-full overflow-hidden z-10" style={{ height: "calc(100vh - 64px)" }}>
      <Slider {...settings} style={{ height: "calc(100vh - 64px)" }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-screen">
            {/* OptimizedImage en plein écran */}
            <div className="absolute inset-0 -z-10">
              <OptimizedImage
                basePath={slide.image}
                alt={slide.title}
                widths={[768, 1280, 1920]}
                className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-in-out ${
                  activeIndex === index ? "scale-110" : "scale-100"
                }`}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 bg-black/60 backdrop-blur-sm" />

            {/* Texte */}
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white p-6 ${
                activeIndex === index ? "animate-slideUpFade" : "opacity-0"
              }`}
            >
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg text-center font-playfair">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-2xl max-w-2xl text-center drop-shadow-md mb-6 font-poppins">
                {slide.description}
              </p>

              <Link
                to={`/services-page#${slide.anchor}`}
                className="bg-brand-accent_premium text-white px-4 py-2 rounded border border-transparent hover:bg-white hover:text-brand-accent_premium hover:border-brand-accent_premium transition duration-300 font-semibold shadow-sm font-poppins"
              >
                En savoir plus
              </Link>

              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2 select-none text-white text-lg italic drop-shadow-lg z-20">
                <span>Glissez</span>
                <svg
                  className="w-6 h-6 animate-slideRight"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          50% {
            opacity: 1;
            transform: translateX(8px);
          }
          100% {
            opacity: 0;
            transform: translateX(0);
          }
        }
        .animate-slideRight {
          animation: slideRight 1.5s ease-in-out infinite;
        }

        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUpFade {
          animation: slideUpFade 0.7s ease forwards;
        }

        .opacity-0 {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
