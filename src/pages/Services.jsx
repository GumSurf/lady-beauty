import React from "react";
import { motion } from "framer-motion";
import ServicesGrid from "../components/ServicesGrid";
import SeoHelmet from "../components/SeoHelmet";
import BookingButton from "../components/BookingButton";
import CallToAction from "../components/CallToAction";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ServicesPage = () => {
  return (
    <>
      <SeoHelmet
        title="Prestations | Lady Beauty"
        description="Découvrez nos soins holistiques pour sublimer votre peau, votre esprit et votre bien-être intérieur."
        url="https://lady-beauty.vercel.app/services"
        image="https://res.cloudinary.com/dopysnsl1/image/upload/v1749216090/pexels-arina-krasnikova-6663368_ezz7fw.webp"
      />

      <div className="bg-white text-brand-text font-serif">
        {/* Hero avec ambiance */}
        <div
  className="min-h-[50vh] md:min-h-[60vh] bg-cover bg-center relative flex items-center justify-center z-10"
          style={{ backgroundImage: "url(https://res.cloudinary.com/dopysnsl1/image/upload/v1749216090/pexels-arina-krasnikova-6663368_ezz7fw.webp)" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 text-center px-6 pt-24"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-2xl">
              Laissez parler votre beauté intérieure
            </h1>
            <p className="text-brand-rose text-xl md:text-2xl mt-6 italic">
              Un voyage sensoriel à travers nos soins d'exception
            </p>
            <BookingButton className="mt-10" />
          </motion.div>
        </div>

        {/* Introduction immersive */}
        <section className="bg-white py-20 px-6 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Bienvenue dans votre bulle de sérénité
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 italic leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Chaque soin chez Lady Beauty est un rituel sacré, conçu pour éveiller vos sens, libérer vos tensions et révéler la lumière unique qui sommeille en vous. Notre mission ? Offrir bien plus qu’un soin : une transformation intérieure.
          </motion.p>
        </section>

        {/* Grille dynamique */}
        <section className="relative z-10">
          <ServicesGrid />
        </section>

        {/* CTA finale */}
        <CallToAction />
      </div>
    </>
  );
};

export default ServicesPage;
