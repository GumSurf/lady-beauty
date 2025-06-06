import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        title: "Visage et peau",
        activities: [
            { id: "a", label: "Soin visage & corps", to: "/services/soin-visage-corps" },
            { id: "b", label: "Microblading", to: "/services/microblading" },
            { id: "c", label: "Microneedling", to: "/services/microneedling" },
        ],
    },
    {
        id: 2,
        title: "Techniques spécifiques",
        activities: [
            { id: "d", label: "Ventouse", to: "/services/ventouse" },
            { id: "e", label: "Plasmapen", to: "/services/plasmapen" },
        ],
    },
    {
        id: 3,
        title: "Corporels et esthétiques",
        activities: [
            { id: "f", label: "Anticellulite", to: "/services/anticellulite" },
            { id: "g", label: "Épilation cire & fil", to: "/services/epilation-cire-fil" },
        ],
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // States mobiles pour ouvrir chaque sous-menu
    const [openMobileMenu, setOpenMobileMenu] = useState({
        1: false,
        2: false,
        3: false,
    });

    const toggleMobileSubMenu = (id) => {
        setOpenMobileMenu((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <nav className="bg-brand-primary text-brand-text shadow-md fixed w-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="hover:text-brand-accent_premium mb-6 md:mb-0 font-bold text-xl text-brand-heading font-playfair font-semibold">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Lady Beauty
                        </Link>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link
                            to="/"
                            className="hover:text-brand-accent_premium transition font-poppins font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Accueil
                        </Link>

                        {/* Catégories avec dropdown */}
                        {categories.map((cat) => (
                            <div key={cat.id} className="group relative">
                                <button
                                    className="hover:text-brand-accent_premium transition font-poppins font-semibold flex items-center gap-1"
                                    type="button"
                                >
                                    {cat.title}
                                    <svg
                                        className="w-4 h-4 inline-block"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                {/* Dropdown */}
                                <div className="absolute left-0 top-full mt-0 w-56 bg-brand-primary rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                                    <ul className="pt-2">
                                        {cat.activities.map((act) => (
                                            <li key={act.id}>
                                                <Link
                                                    to={act.to}
                                                    className="block px-4 py-2 hover:text-brand-accent_premium font-semibold transition"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {act.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        <Link
                            to="/contact"
                            className="hover:text-brand-accent_premium transition font-poppins font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/booking"
                            onClick={() => setIsOpen(false)}
                            className="bg-brand-accent_premium text-white px-4 py-2 rounded border border-transparent hover:bg-white hover:text-brand-accent_premium hover:border-brand-accent_premium transition duration-300 font-semibold shadow-sm"
                        >
                            Réservation
                        </Link>

                    </div>

                    {/* Menu mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            aria-label="Toggle menu"
                            className="focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile déroulant */}
            {isOpen && (
                <div className="md:hidden bg-brand-primary px-2 pt-2 pb-4 space-y-1">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded hover:bg-brand-accent_premium transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Accueil
                    </Link>

                    {/* Catégories mobiles avec toggle */}
                    {categories.map((cat) => (
                        <div key={cat.id}>
                            <button
                                onClick={() => toggleMobileSubMenu(cat.id)}
                                className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-brand-accent transition font-semibold"
                            >
                                {cat.title}
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${openMobileMenu[cat.id] ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Sous-menu déroulant mobile */}
                            {openMobileMenu[cat.id] && (
                                <div className="pl-4">
                                    {cat.activities.map((act) => (
                                        <Link
                                            key={act.id}
                                            to={act.to}
                                            className="block px-3 py-2 rounded hover:bg-brand-accent transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {act.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Link
                        to="/contact"
                        className="block px-3 py-2 rounded hover:bg-brand-accent transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/booking"
                        className="block px-3 py-2 rounded bg-brand-primary text-brand-text hover:bg-brand-accent transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Réservation
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
