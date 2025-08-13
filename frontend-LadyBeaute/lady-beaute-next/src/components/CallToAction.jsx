import React from "react";
import { motion } from "framer-motion";
import BookingButton from "./BookingButton";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CallToAction = () => {
    return (
        <section className="text-center py-16 bg-brand-gold animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-brand-text font-playfair">
                Prête à révéler votre beauté naturelle ?
            </h3>
            <a
                href="/booking"
                className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-brand-text font-semibold py-3 px-8 sm:py-4 sm:px-12 rounded shadow-lg transition animate-bounceSlow font-poppins"
            >
                Prenez rendez-vous aujourd’hui
            </a>
        </section>
    );
};

export default CallToAction;
