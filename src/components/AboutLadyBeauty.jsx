import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage"; // adapte le chemin selon ton projet

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutLadyBeauty = () => {
  return (
    <motion.section
      className="relative py-20 px-6 sm:px-10 max-w-7xl mx-auto font-poppins overflow-hidden z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariant}
    >
      {/* Décorations flottantes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#F0F0F0] rounded-full blur-2xl opacity-30 animate-floatSlow" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#E5CFCB] rounded-full blur-2xl opacity-20 animate-floatDelay" />

      <h2 className="text-4xl sm:text-5xl font-bold text-brand-text mb-16 text-center font-playfair relative z-10">
        À propos de <span className="text-brand-accent_premium">Lady Beauty</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Galerie d'images */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            <OptimizedImage
              basePath="/images/pexels-olly-3756694"
              alt="Institut 1"
              widths={[480, 768, 1280, 1920]}
              className="rounded-2xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <OptimizedImage
              basePath="/images/pexels-andrzej-gdula-177638374-12336389"
              alt="Soin beauté"
              widths={[480, 768, 1280, 1920]}
              className="rounded-2xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <OptimizedImage
            basePath="/images/pexels-jonathanborba-19641830"
            alt="Visage détendu"
            widths={[480, 768, 1280, 1920]}
            className="rounded-3xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Texte de présentation */}
        <motion.div
          className="text-brand-text text-lg sm:text-xl leading-relaxed space-y-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutLadyBeauty;
