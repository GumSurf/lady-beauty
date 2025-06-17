import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import SeoHelmet from "../components/SeoHelmet";
import { generateJsonLdService } from "../utils/seoHelpers";
import slugify from "slugify";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BookingButton = ({ className = "" }) => (
    <button
        onClick={() => {
            document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`bg-white text-brand-text hover:text-white hover:bg-brand-accent hover:border-brand-accent py-3 px-10 rounded-full border-transparent text-lg shadow-xl transition duration-300 ${className}`}
    >
        Réserver mon instant sacré
    </button>
);

const ServicePage = ({
    name,
    imageHero,
    images,
    description,
    sessionDetails,
    benefits,
    sessionsAvailable,
    duration,
    price,
    servicesSimilaires = [],
}) => {
    const shortDesc = description.slice(0, 155) + "...";
    const slug = slugify(name, { lower: true, strict: true });
    const jsonLdData = generateJsonLdService({ name, description, image: imageHero });

    return (
        <>
            <SeoHelmet
                title={`${name} | Lady Beauty`}
                description={shortDesc}
                image={imageHero}
                url={`https://lady-beauty.vercel.app/services/${slug}`}
                jsonLdData={jsonLdData}
            />

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
                        <BookingButton className="mt-8" />
                    </motion.div>
                </div>

                {/* Immersive Storytelling */}
                <section aria-labelledby="story-title" className="relative bg-brand-primary py-24 px-6 mx-auto z-10">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.img
                            src={images[0]}
                            alt={`Illustration de ${name}`}
                            className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full hover:scale-105 transition-transform duration-500"
                            loading="lazy"
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
                            <h2 id="story-title" className="text-4xl font-semibold mb-6">Un rituel d’éveil des sens</h2>
                            {description.split("\n").map((para, idx) => (
                                <p key={idx} className="text-lg leading-relaxed text-gray-700 italic mb-4">{para}</p>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Session Details */}
                <section aria-labelledby="session-title" className="relative py-24 px-6 bg-brand-accent z-10">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h2 id="session-title" className="text-4xl font-semibold mb-6 text-white">Déroulement de la séance</h2>
                            <p className="text-lg leading-relaxed text-white italic">{sessionDetails}</p>
                        </motion.div>
                        <motion.img
                            src={images[1]}
                            alt={`Déroulement du soin ${name}`}
                            className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section aria-labelledby="benefits-title" className="relative bg-white py-24 px-6 z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            id="benefits-title"
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

                {/* Fixed Background + Testimonials */}
                <div className="relative z-1">
                    <div
                        className="fixed inset-0 bg-cover bg-center opacity-30 z-1"
                        style={{ backgroundImage: "url('https://blessed-connection-657913a5dc.media.strapiapp.com/pexels_pixabay_237382_fced0d2134.webp')" }}
                    ></div>
                    <Testimonials />

                    {/* Sessions Info */}
                    <section
                        id="booking"
                        aria-labelledby="session-count-title"
                        className="relative py-24 px-6 bg-brand-gold text-center z-10"
                    >
                        <motion.h2
                            id="session-count-title"
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
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <BookingButton />
                        </motion.div>
                    </section>
                </div>
                <section className="max-w-full relative bg-white z-1">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <motion.h3
                            className="text-3xl font-semibold mb-10 text-center"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Découvrez aussi ces prestations
                        </motion.h3>

                        {servicesSimilaires.length === 0 ? (
                            <motion.div
                                className="flex justify-center items-center min-h-[100px]"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <p className="text-center text-gray-500">
                                    Aucun service similaire disponible pour le moment.
                                </p>
                            </motion.div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {servicesSimilaires.map((service) => (
                                    <motion.a
                                        key={service.id}
                                        href={`/services/${slugify(service.name, { lower: true })}`}
                                        className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            src={service.imageHero}
                                            alt={service.name}
                                            className="w-full h-48 object-cover"
                                            loading="lazy"
                                        />
                                        <div className="p-4 bg-white">
                                            <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                                            <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default ServicePage;