import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesList from "./pages/ServicesList";
import ServicesPage from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Service from "./pages/services/[slug]";
import AboutPage from "./pages/AboutPage";
import MentionsLegales from "./pages/MentionsLegales";
import ConditionsGenerales from "./pages/ConditionsGenerales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
    return (
        <HelmetProvider>
            <div className="bg-pink-50 text-gray-800 min-h-screen flex flex-col">
                <Layout>
                <AnimatedRoutes />
                </Layout>
            </div>
        </HelmetProvider>
    );
}

function Layout({ children }) {
    return (
      <div className="flex flex-col min-h-screen bg-pink-50 text-gray-800">
        <Navbar />
        <main className="pt-16 flex-grow">{children}</main>
        <Footer />
      </div>
    );
  }
  
  
export default App;
