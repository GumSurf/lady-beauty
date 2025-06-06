// Microbladinge.jsx
import React from "react";
import ServiceDetail from "./ServiceDetail";

const microbladingData = {
  name: "Microblading",
  image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1749037334/pexels-estoymhrb-20765765_sdvlqg.jpg",
  description:
    "Technique semi-permanente pour embellir les sourcils en dessinant des poils naturels, redéfinissant la forme et l’intensité du regard.",
  duration: "90 minutes",
  price: "150 €",
};

const Microblading = () => <ServiceDetail service={microbladingData} />;
export default Microblading;
