import React from "react";
import SeoHelmet from "../components/SeoHelmet";

const MentionsLegales = () => {
    return (
        <>
            <SeoHelmet title="Mentions légales | Lady Beauty" description="Mentions légales du site Lady Beauty" />
            <div className="max-w-4xl mx-auto px-6 py-16 font-serif text-brand-text">
                <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
                    <p className="text-gray-700">Lady Beauty</p>
                    <p className="text-gray-700">28 Rue de Kergreis, 56600 Lanester</p>
                    <p className="text-gray-700">Téléphone : 07 81 58 90 22</p>
                    <p className="text-gray-700">Email : contact@ladybeauty.fr</p>
                    <p className="text-gray-700">Directrice de publication : Lady Beauty</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
                    <p className="text-gray-700">Vercel Inc.</p>
                    <p className="text-gray-700">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                    <p className="text-gray-700">Site : <a href="https://vercel.com" className="underline hover:text-brand-accent">vercel.com</a></p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
                    <p className="text-gray-700">
                        Le contenu de ce site est protégé par le droit de la propriété intellectuelle.
                        Toute reproduction ou diffusion sans autorisation écrite est interdite.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
                    <p className="text-gray-700">
                        Les données collectées sont traitées conformément à notre{" "}
                        <a href="/politique-de-confidentialite" className="underline hover:text-brand-accent">
                            Politique de confidentialité
                        </a>.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                    <p className="text-gray-700">
                        Ce site utilise des cookies à des fins de bon fonctionnement et de statistiques.
                        Vous pouvez gérer vos préférences dans votre navigateur.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Création du site</h2>
                    <p className="text-gray-700">Site réalisé par Gabriel Christe. Tous droits réservés.</p>
                </section>
            </div>
        </>
    );
};

export default MentionsLegales;
