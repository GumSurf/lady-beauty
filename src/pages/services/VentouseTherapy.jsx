// Ventouse.jsx
import React from "react";
import ServiceDetail from "./ServiceDetail";

const ventouseData = {
  name: "Ventouse",
  image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1749037949/pexels-rdne-8313197_hnf5tx.jpg",
  description:
    "Technique de massage par succion améliorant la circulation sanguine et lymphatique, favorisant la détente musculaire et la réduction des tensions.",
  duration: "30 minutes",
  price: "40 €",
};

const VentouseTherapy = () => <ServiceDetail service={ventouseData} />;
export default VentouseTherapy;
