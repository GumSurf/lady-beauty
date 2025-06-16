import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Home";
import ServicesPage from "./Services";
import Booking from "./Booking";
import Contact from "./Contact";
import Service from "./services/[slug]";
import AboutPage from "./AboutPage";
import MentionsLegales from "./MentionsLegales";
import ConditionsGenerales from "./ConditionsGenerales";
import PolitiqueConfidentialite from "./PolitiqueConfidentialite";
import NotFound from "./NotFound";

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
};

const pageTransition = {
    duration: 0.4,
};

const AnimatedRoutes = () => {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<AboutPage />} />
                    <Route path="/services-page" element={<ServicesPage />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services/:slug" element={<Service />} />
                    <Route path="/mentions-legales" element={<MentionsLegales />} />
                    <Route path="/conditions-generales" element={<ConditionsGenerales />} />
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;