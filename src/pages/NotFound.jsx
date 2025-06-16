import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white text-brand-text flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-extrabold text-brand-accent mb-6 tracking-tight">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Oups… cette page est introuvable
        </h2>
        <p className="text-gray-500 mb-8">
          Il semblerait que la page que vous cherchez n’existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-brand-accent text-white font-medium rounded-full shadow-lg hover:bg-brand-accent_premium transition"
        >
          Retour à l’accueil
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
