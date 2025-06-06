import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-brand-text py-8 font-poppins z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal : coordonnées à gauche, carte à droite */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Colonne gauche : infos & navigation */}
          <div className="flex-1 space-y-6">
            <div className="font-bold text-2xl text-brand-text hover:text-brand-accent_premium font-playfair">
              Lady Beauty
            </div>

            <nav className="space-x-6">
              <Link to="/" className="hover:text-brand-accent_premium transition">
                Accueil
              </Link>
              <Link to="/services" className="hover:text-brand-accent_premium transition">
                Services
              </Link>
              <Link to="/contact" className="hover:text-brand-accent_premium transition">
                Contact
              </Link>
              <Link to="/booking" className="hover:text-brand-accent_premium transition">
                Réservation
              </Link>
            </nav>

            <div className="space-y-1 text-brand-text/90">
              <p>
                Téléphone :{" "}
                <a href="tel:+33123456789" className="underline hover:text-brand-accent_premium">
                  01 23 45 67 89
                </a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:contact@ladybeauty.fr" className="underline hover:text-brand-accent_premium">
                  contact@ladybeauty.fr
                </a>
              </p>
            </div>
          </div>

          {/* Colonne droite : carte Google Maps */}
          <div className="flex-1">
            <h4 className="text-lg font-medium mb-2">Où nous trouver</h4>
            <div className="rounded-xl overflow-hidden shadow-md w-full h-64">
              <iframe
                title="Google Maps - Lady Beauty"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.481603251261!2d-3.3378626876585575!3d47.75271217108353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48105e7dac05b4db%3A0x13f37190d50e7329!2s28%20Rue%20de%20Kergreis%2C%2056600%20Lanester!5e0!3m2!1sfr!2sfr!4v1748948635738!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-brand-text/70 font-poppins">
          &copy; {new Date().getFullYear()} Lady Beauty. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
