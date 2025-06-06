import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesList from "./pages/ServicesList";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

// Import des pages services
import SoinVisageCorps from "./pages/services/SoinVisageCorps";
import Microbladinge from "./pages/services/Microblading";
import Microneedling from "./pages/services/Microneedling";
import Ventouse from "./pages/services/VentouseTherapy";
import Plasmapene from "./pages/services/PlasmaPen";
import Anticellulite from "./pages/services/Anticellulite";
import EpilationCireFil from "./pages/services/Epilation";


function App() {
    return (
        <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesList />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Routes services individuelles */}
                    <Route path="/services/soin-visage-corps" element={<SoinVisageCorps />} />
                    <Route path="/services/microblading" element={<Microbladinge />} />
                    <Route path="/services/microneedling" element={<Microneedling />} />
                    <Route path="/services/ventouse" element={<Ventouse />} />
                    <Route path="/services/plasmapene" element={<Plasmapene />} />
                    <Route path="/services/anticellulite" element={<Anticellulite />} />
                    <Route path="/services/epilation-cire-fil" element={<EpilationCireFil />} />
                </Routes>
            </Layout>
        </div>
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

/*import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesList from "./pages/ServicesList";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

// Import des pages services adaptées
import SoinVisageCorps from "./pages/services/SoinVisageCorps";
import Microbladinge from "./pages/services/Microblading";
import Microneedling from "./pages/services/Microneedling";
import Ventouse from "./pages/services/VentouseTherapy";
import Plasmapene from "./pages/services/PlasmaPen";
import Dermapene from "./pages/services/Dermapen";
import Anticellulite from "./pages/services/Anticellulite";
import EpilationCireFil from "./pages/services/Epilation";

function App() {
    return (
        <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesList />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/services/soin-visage-corps" element={<SoinVisageCorps />} />
                    <Route path="/services/microblading" element={<Microbladinge />} />
                    <Route path="/services/microneedling" element={<Microneedling />} />
                    <Route path="/services/ventouse" element={<Ventouse />} />
                    <Route path="/services/plasmapene" element={<Plasmapene />} />
                    <Route path="/services/dermapene" element={<Dermapene />} />
                    <Route path="/services/anticellulite" element={<Anticellulite />} />
                    <Route path="/services/epilation-cire-fil" element={<EpilationCireFil />} />
                </Routes>
            </Layout>
        </div>
    );
}

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
        </>
    );
}

export default App;*/
