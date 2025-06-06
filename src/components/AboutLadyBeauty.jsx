import React from "react";

const AboutLadyBeauty = () => {
  return (
    <section className="relative py-20 px-6 sm:px-10 max-w-7xl mx-auto font-poppins overflow-hidden z-10">
      {/* Décorations flottantes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#F0F0F0] rounded-full blur-2xl opacity-30 animate-floatSlow" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#E5CFCB] rounded-full blur-2xl opacity-20 animate-floatDelay" />

      <h2 className="text-4xl sm:text-5xl font-bold text-brand-text mb-16 text-center font-playfair relative z-10">
        À propos de <span className="text-brand-accent_premium">Lady Beauty</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Galerie d'images */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dopysnsl1/image/upload/v1749216089/pexels-olly-3756694_nz7k71.webp"
              alt="Institut 1"
              className="rounded-2xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://res.cloudinary.com/dopysnsl1/image/upload/v1749216092/pexels-andrzej-gdula-177638374-12336389_tpxiqu.webp"
              alt="Soin beauté"
              className="rounded-2xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <img
            src="https://res.cloudinary.com/dopysnsl1/image/upload/v1749216089/pexels-jonathanborba-19641830_llfa9u.webp"
            alt="Visage détendu"
            className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texte de présentation */}
        <div className="text-brand-text text-lg sm:text-xl leading-relaxed space-y-5">
          <p>
            Depuis plus d’un an, <strong>Lady Beauty</strong> vous accompagne pour prendre <strong>soin de votre peau</strong> avec des <strong>soins professionnels</strong> et personnalisés.
          </p>
          <p>
            Que vous cherchiez à <strong>illuminer</strong> votre teint, <strong>traiter</strong> vos imperfections ou simplement offrir un moment de <strong>détente</strong>, Fatma vous propose des techniques reconnues dans un cadre élégant.
          </p>
          <p>
            Spécialisée en <strong>Microneedling</strong>, <strong>Hydrofacial</strong>, <strong>Dermaplaning</strong> et <strong>Plasmapen</strong>, elle vous aide à retrouver une peau éclatante et lisse.
          </p>
          <p className="italic text-brand-accent">
            Prenez un moment pour vous, même une petite heure, et laissez Lady Beauty révéler votre beauté naturelle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutLadyBeauty;
