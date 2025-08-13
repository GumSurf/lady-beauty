import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../../components/Testimonials";

const microbladingData = {
    name: "Microblading",
    imageHero:
        "https://res.cloudinary.com/dopysnsl1/image/upload/v1749217000/microblading-hero.webp",
    images: [
        "https://res.cloudinary.com/dopysnsl1/image/upload/v1749217000/microblading-image1.webp",
        "https://res.cloudinary.com/dopysnsl1/image/upload/v1749217000/microblading-image2.webp",
    ],
    description:
        "Redonnez vie à votre regard grâce à l’art délicat du Microblading. Cette technique de maquillage semi-permanent permet de restructurer vos sourcils poil par poil pour un résultat à la fois naturel, harmonieux et durable. Une véritable signature du visage, révélée en douceur.",
    sessionDetails:
        "Le rendez-vous débute par une écoute attentive de vos envies, suivie d’une étude morphologique minutieuse. Après désinfection et préparation de la peau, la technicienne dessine chaque poil avec une extrême précision à l’aide de micro-aiguilles. La pigmentation est choisie sur mesure pour s’adapter à votre carnation et votre pilosité. Un moment de concentration et de finesse, dans une bulle de sérénité.",
    benefits: [
        "Regard intensifié et sourcils redessinés",
        "Gain de temps chaque matin",
        "Effet naturel longue durée (jusqu’à 18 mois)",
        "Rajeunissement immédiat du visage",
        "Adapté à toutes les formes de sourcils"
    ],
    sessionsAvailable:
        "Une première séance, suivie d'une retouche offerte 4 à 6 semaines plus tard pour un résultat optimal. Un entretien annuel est recommandé pour conserver l’intensité.",
    duration: "2h",
    price: "250 €",
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Microblading = () => {
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
    } = microbladingData;

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
                            "url('https://blessed-connection-657913a5dc.media.strapiapp.com/pexels_pixabay_237382_fced0d2134.webp')",
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

export default Microblading;