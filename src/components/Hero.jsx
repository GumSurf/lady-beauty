// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-pink-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
        Prenez soin de vous chez Lady Beauty
      </h2>
      <p className="text-gray-700 text-lg md:text-xl mb-8">
        Sentez-vous belle, détendue et rayonnante.
      </p>
      <a href="#contact" className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition">
        Réserver maintenant
      </a>
    </section>
  );
};

export default Hero;
