import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesList from "./pages/ServicesList";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

// Import des pages services
import SoinVisageCorps from "./pages/services/SoinVisageCorps";
import Microblading from "./pages/services/Microblading";
import Microneedling from "./pages/services/Microneedling";
import Ventouse from "./pages/services/VentouseTherapy";
import Plasmapen from "./pages/services/PlasmaPen";
import Anticellulite from "./pages/services/Anticellulite";
import EpilationCireFil from "./pages/services/Epilation";
import Service from "./pages/services/[slug]";


function App() {
    return (
        <HelmetProvider>
            <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<ServicesList />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Routes services individuelles */}
                        <Route path="/services/anticellulite" element={<Anticellulite />} />
                        <Route path="/services/epilation-cire-fil" element={<EpilationCireFil />} />
                        <Route path="/services/:slug" element={<Service />} />
                    </Routes>
                </Layout>
            </div>
        </HelmetProvider>
    );
}

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default App;
