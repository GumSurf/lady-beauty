import React from "react";
import AboutLadyBeauty from "../components/AboutLadyBeauty";
import HeroCarousel from "../components/HeroCarousel";
import ServicesGrid from "../components/ServicesGrid";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-b from-[#FAFAFA] via-[#F0F0F0] to-[#E5CFCB] text-brand-text z-10" >
                <HeroCarousel />
                <AboutLadyBeauty />
                <ServicesGrid />
            </div>

            <div className="relative">
                {/* Background fixe */}
                <div
                    className="fixed inset-0 bg-cover bg-center opacity-30 z-1"
                    style={{
                        backgroundImage:
                            "url('https://blessed-connection-657913a5dc.media.strapiapp.com/pexels_pixabay_237382_fced0d2134.webp')",
                    }}
                ></div>

                {/* Contenu normal */}
                <div className="relative z-10">
                    <Testimonials />
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
                </div>
            </div>
        </div>
    );
};

export default Home;

