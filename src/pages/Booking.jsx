import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Soin du visage",
    "Épilation",
    "Massage bien-être",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Rendez-vous réservé :", formData);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      service: "",
    });
  };

  return (
    <div className="min-h-screen max-w-md mx-auto mt-20 p-6 bg-white rounded shadow animate-fadeIn">
      {!submitted ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-brand-primary text-center font-playfair">
            Réservez votre rendez-vous
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-brand-text" htmlFor="name">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-brand-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-brand-text" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-brand-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-brand-text" htmlFor="service">
                Type de prestation
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-brand-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <option value="">Sélectionnez une prestation</option>
                {services.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-brand-text" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-brand-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-brand-text" htmlFor="time">
                Heure
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-brand-accent rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-brand-heading font-bold py-3 rounded transition"
            >
              Réserver
            </button>
          </form>
        </>
      ) : (
        <div className="text-center p-6 bg-brand-background rounded shadow animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 text-brand-primary">Merci !</h2>
          <p className="mb-6 text-brand-text">Votre rendez-vous a bien été enregistré.</p>
          <button
            onClick={handleReset}
            className="bg-brand-primary hover:bg-brand-primary/90 text-brand-heading font-bold py-2 px-6 rounded transition"
          >
            Réserver un autre rendez-vous
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;
