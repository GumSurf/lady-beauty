// Plasmapene.jsx
import React from "react";
import ServiceDetail from "./ServiceDetail";

const plasmapenData = {
  name: "Plasmapen",
  image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1749043492/before-after-portrait-mature-woman-retouched_rgxleq.jpg",
  description:
    "Traitement innovant utilisant un plasma froid pour raffermir et régénérer la peau, atténuant rides, cicatrices et imperfections.",
  duration: "50 minutes",
  price: "130 €",
};

const Plasmapen = () => <ServiceDetail service={plasmapenData} />;
export default Plasmapen;
