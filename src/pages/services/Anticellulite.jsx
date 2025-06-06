// Anticellulite.jsx
import React from "react";
import ServiceDetail from "./ServiceDetail";

const anticelluliteData = {
  name: "Traitement Anticellulite",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  description:
    "Méthodes ciblées pour réduire la cellulite, améliorer la texture de la peau et redessiner la silhouette grâce à des massages et soins spécifiques.",
  duration: "45 minutes",
  price: "60 €",
};

const Anticellulite = () => <ServiceDetail service={anticelluliteData} />;
export default Anticellulite;
