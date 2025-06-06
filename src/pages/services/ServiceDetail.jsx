import React from "react";

const ServiceDetail = ({ service }) => {
    if (!service) return <p>Service non trouvé</p>;

    return (
        <section className="min-h-screen max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-brand-primary mb-6">{service.name}</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                    loading="lazy"
                />
                <div className="md:w-1/2">
                    <p className="mb-4 text-brand-text">{service.description}</p>
                    {service.duration && (
                        <p className="mb-2 italic text-brand-primary">
                            Durée : <strong>{service.duration}</strong>
                        </p>
                    )}
                    {service.price && (
                        <p className="mb-4 italic text-brand-primary">
                            Prix : <strong>{service.price}</strong>
                        </p>
                    )}
                    <a
                        href="/booking"
                        className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded shadow transition"
                    >
                        Prendre rendez-vous
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;
