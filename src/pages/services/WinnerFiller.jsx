import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";

const ventousesData = {
    name: "Thérapie par Ventouses",
    imageHero:
        "https://res.cloudinary.com/dopysnsl1/image/upload/v1749217200/ventouses-hero.webp",
    images: [
        "https://res.cloudinary.com/dopysnsl1/image/upload/v1749217200/ventouses-image1.webp",
        "https://res.cloudinary.com/dopysnsl1/image/upload/v1749217200/ventouses-image2.webp",
    ],
    description:
        "Plongez dans une thérapie ancestrale aux vertus libératrices. La pose de ventouses stimule la circulation sanguine et énergétique, dénoue les tensions profondes, et favorise l’élimination des toxines. C’est un soin puissant qui reconnecte le corps à ses forces naturelles d’auto-guérison.",
    sessionDetails:
        "La séance débute dans un cocon de calme, avec un massage préparatoire pour détendre les muscles. Les ventouses sont ensuite posées stratégiquement sur des zones ciblées, créant une succion douce et progressive. Cette action active la microcirculation et libère les blocages. La séance se conclut par un massage drainant qui relance les flux et invite le corps à lâcher prise.",
    benefits: [
        "Soulagement rapide des tensions musculaires",
        "Stimulation du système immunitaire",
        "Effet détoxifiant puissant",
        "Peau raffermie et réoxygénée",
        "Rééquilibrage énergétique global"
    ],
    sessionsAvailable:
        "Séance unique pour un soulagement immédiat, ou en cure de 3 à 5 séances pour une action en profondeur, selon vos besoins corporels et émotionnels.",
    duration: "1h",
    price: "90 €",
};


const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Ventouses = () => {
    const {
        name,
        imageHero,
        images,
        description,
        sessionDetails,
        benefits,
        sessionsAvailable,
        duration,
        price,
    } = ventousesData;

    return (
        <div className="relative bg-white text-brand-text font-serif z-10">
            {/* Hero Section */}
            <div
                className="min-h-[80vh] md:h-screen bg-cover bg-center relative flex items-center justify-center z-10"
                style={{ backgroundImage: `url(${imageHero})` }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl tracking-wide">
                        {name}
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-rose mt-4 italic">
                        {duration} • {price}
                    </p>
                    <button className="mt-8 bg-white text-brand-text hover:text-white hover:bg-brand-accent hover:border-brand-accent py-3 px-10 rounded-full border-transparent text-lg shadow-xl transition duration-300">
                        Réserver mon instant sacré
                    </button>
                </motion.div>
            </div>

            {/* Immersive Storytelling */}
            <section className="relative bg-brand-primary py-24 px-6 mx-auto z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.img
                        src={images[0]}
                        alt="Description"
                        className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full hover:scale-105 transition-transform duration-500"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    />
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold mb-6">Un rituel d’éveil des sens</h2>
                        <p className="text-lg leading-relaxed text-gray-700 italic">{description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Session Details */}
            <section className="relative py-24 px-6 bg-brand-accent z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold mb-6 text-white">Déroulement de la séance</h2>
                        <p className="text-lg leading-relaxed text-white italic">{sessionDetails}</p>
                    </motion.div>
                    <motion.img
                        src={images[1]}
                        alt="Séance"
                        className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full hover:scale-105 transition-transform duration-500"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    />
                </div>
            </section>

            {/* Benefits */}
            <section className="relative bg-white py-24 px-6 z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl font-semibold mb-10 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    Bienfaits ressentis dès la première séance
                </motion.h2>
                <motion.ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {benefits.map((b, idx) => (
                        <li
                            key={idx}
                            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-brand-accent text-brand-accent"
                        >
                            {b}
                        </li>
                    ))}
                </motion.ul>
                </div>
            </section>
            <div className="relative z-1">
                {/* Background fixe */}
                <div
                    className="fixed inset-0 bg-cover bg-center opacity-30 z-1"
                    style={{
                        backgroundImage:
                            "url('https://res.cloudinary.com/dopysnsl1/image/upload/v1748951118/pexels-pixabay-237382_d0qi3o.jpg')",
                    }}
                ></div>
                {/* Testimonial */}
                <Testimonials />

                {/* Sessions Info */}
                <section className="relative py-24 px-6 bg-brand-gold text-center z-10">
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-brand-text"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        Combien de séances prévoir ?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-brand-text mb-10"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {sessionsAvailable}
                    </motion.p>
                    <motion.button
                        className="bg-white text-gray-700 py-4 px-12 text-lg rounded shadow-xl transition duration-300"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        Je réserve mon moment de rêve
                    </motion.button>
                </section>
            </div>
        </div>
    );
};

export default Ventouses;