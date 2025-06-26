import React from "react";
import SeoHelmet from "../components/SeoHelmet";


const PolitiqueConfidentialite = () => {
    return (
        <main className="bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto font-serif">
            <SeoHelmet title="Politique de confidentialité | Lady Beauty" description="Politique de confidentialité du site Lady Beauty" />
            <h1 className="text-4xl font-bold mb-10 text-center">Politique de confidentialité</h1>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-700">
                    Chez Lady Beauty, nous accordons une grande importance à la confidentialité de vos données personnelles. Cette politique vise à vous informer de manière claire et transparente sur la manière dont nous collectons, utilisons et protégeons vos informations.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
                <p className="text-gray-700">
                    Nous collectons uniquement les données nécessaires à la fourniture de nos services : nom, prénom, adresse e-mail, numéro de téléphone, et historique de réservation. Ces données sont collectées lorsque vous utilisez notre formulaire de contact ou notre système de réservation en ligne.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
                <p className="text-gray-700">
                    Les données collectées sont utilisées uniquement dans le cadre de la gestion de vos rendez-vous, de la communication avec vous, et à des fins statistiques internes. Elles ne sont ni vendues, ni cédées à des tiers.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">4. Conservation des données</h2>
                <p className="text-gray-700">
                    Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact, sauf obligation légale contraire.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">5. Sécurité</h2>
                <p className="text-gray-700">
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
                <p className="text-gray-700">
                    Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation du traitement et de portabilité de vos données. Pour exercer vos droits, vous pouvez nous contacter à : <a href="mailto:contact@ladybeauty.fr" className="underline text-brand-accent hover:text-brand-accent_premium">contact@ladybeauty.fr</a>
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
                <p className="text-gray-700">
                    Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter par e-mail ou via notre formulaire de contact.
                </p>
            </section>
        </main>
    );
};

export default PolitiqueConfidentialite;
