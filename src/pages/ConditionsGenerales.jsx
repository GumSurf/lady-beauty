import React from "react";
import SeoHelmet from "../components/SeoHelmet";

const ConditionsGenerales = () => {
    return (
        <>
            <SeoHelmet title="Conditions générales | Lady Beauty" description="Conditions générales d'utilisation du site Lady Beauty" />
            <div className="max-w-4xl mx-auto px-6 py-16 font-serif text-brand-text">
                <h1 className="text-4xl font-bold mb-8">Conditions générales d’utilisation</h1>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
                    <p className="text-gray-700">
                        Les présentes conditions régissent l’utilisation du site ladybeauty.fr.
                        En naviguant sur ce site, vous acceptez sans réserve les présentes dispositions.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">2. Accès au site</h2>
                    <p className="text-gray-700">
                        Le site est accessible 24h/24, 7j/7, sauf en cas de force majeure ou de maintenance.
                        Lady Beauty ne peut être tenue responsable en cas d’interruption ou d’indisponibilité.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">3. Responsabilité</h2>
                    <p className="text-gray-700">
                        Lady Beauty décline toute responsabilité quant à l’usage qui pourrait être fait des
                        informations présentes sur le site.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
                    <p className="text-gray-700">
                        Tous les contenus (textes, images, vidéos) sont la propriété exclusive de Lady Beauty.
                        Toute reproduction est interdite sans autorisation préalable.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Droit applicable</h2>
                    <p className="text-gray-700">
                        Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux
                        compétents seront ceux de Lorient.
                    </p>
                </section>
            </div>
        </>
    );
};

export default ConditionsGenerales;
