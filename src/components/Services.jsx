// src/components/Services.jsx
import React from "react";

const services = [
  {
    title: "Soin du visage",
    description: "Hydratation, éclat et relaxation totale.",
  },
  {
    title: "Épilation",
    description: "Résultat net et durable, confort assuré.",
  },
  {
    title: "Massage bien-être",
    description: "Lâchez prise avec un massage personnalisé.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
        Nos services
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-pink-50 p-6 rounded-xl shadow-sm border border-pink-100 text-center">
            <h4 className="text-xl font-semibold text-pink-600 mb-2">{service.title}</h4>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
