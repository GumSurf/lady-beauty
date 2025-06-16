import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Soins Visage, corps & esthétique",
    services: [
      {
        name: "Soin Visage & Corps",
        image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1749216090/pexels-arina-krasnikova-6663368_ezz7fw.webp",
        description: "Soins personnalisés pour visage et corps, hydratation et revitalisation.",
      },
      {
        name: "Microneedling",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/pexels_shiny_diamond_3373721_af03bf71a1.jpg",
        description: "Stimulation du collagène pour une peau éclatante et renouvelée.",
      },
      {
        name: "Microblading",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/pexels_danxavier_839633_11243480fe.jpg",
        description: "Maquillage semi-permanent pour sourcils naturels.",
      },
      {
        name: "Winner filler",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/close_up_beauty_portrait_sensual_ginger_woman_with_long_hair_posing_with_closed_eyes_ecea2bb9b5.jpg",
        description: "Maquillage semi-permanent pour sourcils naturels.",
      },
      {
        name: "Acide hyaluronique",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/pink_abstract_background_oil_bubble_water_wallpaper_fe4364ed5a.jpg",
        description: "Maquillage semi-permanent pour sourcils naturels.",
      },
      {
        name: "Onglerie",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/woman_showing_her_beautiful_nails_c77bb5c835.jpg",
        description: "Maquillage semi-permanent pour sourcils naturels.",
      },
    ],
  },
  {
    title: "Techniques Spécifiques",
    services: [
      {
        name: "Ventouse",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/woman_experiencing_cupping_therapy_3db9ff9d49.jpg",
        description: "Massage par succion pour circulation et détente musculaire.",
      },
      {
        name: "Plasmapen",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/pexels_pixabay_34769_42dcbca216.jpg",
        description: "Plasma froid pour raffermir et régénérer la peau.",
      },
    ],
  },
  {
    title: "Soin Minceur et Épilation",
    services: [
      {
        name: "Anticellulite",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/close_up_hands_holding_belly_852e1fe8da.jpg",
        description: "Réduction ciblée de la cellulite et lissage de la peau.",
      },
      {
        name: "Épilation à la cire et fil",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/close_up_hand_touching_leg_e1587c15a9.jpg",
        description: "Techniques classiques pour une peau douce et nette.",
      },
      {
        name: "Épilation électrique avec aiguille",
        image: "https://blessed-connection-657913a5dc.media.strapiapp.com/close_up_hand_touching_leg_e1587c15a9.jpg",
        description: "Techniques classiques pour une peau douce et nette.",
      },
    ],
  },
];

const getGridClasses = (count) => {
  switch (count) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 sm:grid-cols-2";
    case 3:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    default:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServicesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-poppins bg-transparent text-brand-text">
      {categories.map(({ title, services }) => {
        const gridClass = getGridClasses(services.length);
        return (
          <motion.div
            key={title}
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className="text-4xl font-playfair text-center text-brand-accent_premium mb-12">
              {title}
            </h2>
            <motion.div className={`grid gap-8 ${gridClass}`}>
              {services.map(({ name, image, description }) => {
                const slug = name
                .toLowerCase()
                .normalize("NFD") // enlève les accents
                .replace(/[\u0300-\u036f]/g, "") // supprime les diacritiques
                .replace(/&/g, "and") // remplace les &
                .replace(/[^a-z0-9]+/g, "-") // remplace tout caractère non alphanumérique par -
                .replace(/(^-|-$)/g, ""); // enlève les tirets en début/fin
              
                return (
                  <motion.div key={name} variants={cardVariants}>
                    <Link
                      to={`/services/${slug}`}
                      className="relative group overflow-hidden rounded-3xl bg-white/40 backdrop-blur-md border border-[#C99192]/30 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="h-48 overflow-hidden rounded-t-3xl">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-playfair text-brand-accent group-hover:text-brand-accent_premium transition">
                          {name}
                        </h3>
                        <p className="mt-2 text-sm text-brand-text line-clamp-3">
                          {description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default ServicesGrid;