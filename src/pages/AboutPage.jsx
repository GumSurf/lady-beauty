import React from "react";
import { motion } from "framer-motion";
import SeoHelmet from "../components/SeoHelmet";
import Testimonials from "../components/Testimonials";
import OptimizedImage from "../components/OptimizedImage"; // adapte le chemin selon ta structure

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = () => {
    return (
        <>
            <SeoHelmet
                title="À propos de moi | Lady Beauty"
                description="Découvrez le parcours et la vision holistique de la fondatrice de Lady Beauty. Une experte diplômée en esthétique et en naturopathie."
                image="/images/pexels-pixabay-237382-1920.jpg" // exemple image optimisée dans public/images
                url="https://lady-beauty.vercel.app/a-propos"
            />

            <div className="bg-white text-brand-text font-serif relative z-10">
                {/* Hero Section */}
                <div
                    className="min-h-[80vh] md:h-screen bg-cover bg-center relative flex items-center justify-center z-10"
                    style={{
                        backgroundImage:
                            "url('/images/pexels-mareefe-672051-1920.webp')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 text-center px-4"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl tracking-wide">
                            À propos de moi
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-rose mt-4 italic">
                            Une approche douce, holistique et passionnée
                        </p>
                    </motion.div>
                </div>

                {/* Présentation personnelle */}
                <section className="relative bg-brand-primary py-24 px-6 z-10">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <OptimizedImage
                                basePath="/images/d52f8050-1e7b-4f20-83c1-e65b7170a44d"
                                alt="Portrait de la fondatrice de Lady Beauty"
                                widths={[480, 768, 1280, 1920]}
                                className="rounded-[3rem] shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-semibold mb-6 text-brand-text">
                                Mon parcours
                            </h2>
                            <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                                Je suis une passionnée de bien-être et de beauté. Mon objectif
                                est de sublimer chaque femme en révélant sa lumière naturelle,
                                tout en l’accompagnant avec douceur et bienveillance.
                            </p>
                            <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                                En plus de mon expertise en esthétique, je suis également
                                diplômée en naturopathie. Cela me permet de proposer une
                                approche plus holistique de la beauté et du bien-être. Je peux
                                conseiller mes clientes sur leur système immunitaire, les
                                troubles du corps, l’utilisation des huiles essentielles, des
                                fleurs de Bach, des vitamines naturelles et des plantes.
                            </p>
                            <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                                Je suis également certifiée en Winner Filler, une technique
                                avancée pour repulper et réhydrater la peau de manière naturelle.
                                Chaque soin que je propose est pensé dans une logique de soin
                                global, qui prend en compte le corps, l’âme et l’esprit.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Valeurs et mission */}
                <section className="relative bg-white py-24 px-6 z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-semibold mb-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Mes valeurs & ma mission
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-700 leading-relaxed italic"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            Créer un espace sacré où chaque femme peut se reconnecter à
                            elle-même, à son corps et à sa beauté intérieure. Je crois en
                            une beauté respectueuse, naturelle et bienveillante. Mes valeurs
                            sont l’écoute, l’authenticité, la douceur et l’excellence.
                        </motion.p>
                    </div>
                </section>

                <div className="relative z-1">
                    <div
                        className="fixed inset-0 bg-cover bg-center opacity-30 z-1"
                        style={{
                            backgroundImage: "url('/images/pexels-pixabay-237382-1920.webp')",
                        }}
                    ></div>
                    {/* Témoignages clients */}
                    <div className="relative z-10">
                        <Testimonials />
                    </div>
                </div>

                {/* Call to action */}
                <section className="relative py-24 px-6 bg-brand-gold text-center z-10">
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-brand-text"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        Prête à vivre votre instant sacré ?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-brand-text mb-10"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        Réservez votre séance et commencez un voyage vers votre mieux-être.
                    </motion.p>
                    <motion.a
                        href="#contact"
                        className="inline-block bg-white text-brand-text hover:text-white hover:bg-brand-accent hover:border-brand-accent py-3 px-10 rounded-full border-transparent text-lg shadow-xl transition duration-300"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        Prendre rendez-vous
                    </motion.a>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
