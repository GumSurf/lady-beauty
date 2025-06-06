// Microneedling.jsx
import React from "react";
import ServiceDetail from "./ServiceDetail";

const microneedlingData = {
  name: "Microneedling",
  image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1749036951/woman-wellness-center-having-skin-treatment_gias95.jpg",
  description:
    "Procédé stimulant la production de collagène par micro-perforations de la peau, améliorant la texture, l'élasticité et l'éclat naturel.",
  duration: "60 minutes",
  price: "120 €",
};

const Microneedling = () => <ServiceDetail service={microneedlingData} />;
export default Microneedling;
