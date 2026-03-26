import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
    {
        title: "Soins Visage, corps & esthétique",
        services: [
            {
                name: "Soin Visage & Corps",
                image: "/images/soin-visage-corps-hero-1920",
                description:
                    "Soins personnalisés pour visage et corps, hydratation et revitalisation.",
            },
            {
                name: "Microneedling",
                image: "/images/microneedling-hero-1920",
                description:
                    "Stimulation du collagène pour une peau éclatante et renouvelée.",
            },
            {
                name: "Microblading",
                image: "/images/microblading-hero-1920",
                description: "Maquillage semi-permanent pour sourcils naturels.",
            },
            {
                name: "Winner filler",
                image: "/images/winner-filler-hero-1920",
                description: "Maquillage semi-permanent pour sourcils naturels.",
            },
            {
                name: "Acide hyaluronique",
                image: "/images/acide-hyaluronique-hero-1920",
                description: "Maquillage semi-permanent pour sourcils naturels.",
            },
            {
                name: "Onglerie",
                image: "/images/onglerie-hero-1920",
                description: "Maquillage semi-permanent pour sourcils naturels.",
            },
        ],
    },
    {
        title: "Techniques Spécifiques",
        services: [
            {
                name: "Thérapie par ventouses",
                image: "/images/ventouses-hero-1920",
                description:
                    "Massage par succion pour circulation et détente musculaire.",
            },
            {
                name: "Plasma pen",
                image: "/images/plasma-pen-hero-1920",
                description: "Plasma froid pour raffermir et régénérer la peau.",
            },
        ],
    },
    {
        title: "Soin Minceur et Épilation",
        services: [
            {
                name: "Lipocavitation anticellulite",
                image: "/images/lipocavitation-hero-1920",
                description:
                    "Réduction ciblée de la cellulite et lissage de la peau.",
            },
            {
                name: "Épilation à la cire et au fil",
                image: "/images/epilation-hero-1920",
                description: "Techniques classiques pour une peau douce et nette.",
            },
            {
                name: "Épilation électrique à l'aiguille",
                image: "/images/epilation-electrique-hero-1920",
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
            return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
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
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
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
                        <motion.div
                            className={`grid gap-8 ${gridClass} justify-items-center justify-center`}
                        >
                            {services.map(({ name, image, description }) => {
                                const slug = name
                                    .toLowerCase()
                                    .normalize("NFD")
                                    .replace(/[\u0300-\u036f]/g, "")
                                    .replace(/&/g, "and")
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/(^-|-$)/g, "");

                                return (
                                    <motion.div key={name} variants={cardVariants} className="w-full">
                                        <Link href={`/services/${slug}`} className="relative group overflow-hidden rounded-3xl bg-white/40 backdrop-blur-md border border-[#C99192]/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                                            <div className="h-48 overflow-hidden rounded-t-3xl">
                                                <Image
                                                    src={image + ".webp"}
                                                    alt={name}
                                                    width={1280}
                                                    height={192}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, 25vw"
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
