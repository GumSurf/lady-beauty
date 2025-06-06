import React from "react";
import ServiceDetail from "./ServiceDetail";

const lipocavitationData = {
  name: "Lipocavitation Anticellulite",
  image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1749134782/4265_lihrqx.jpg",
  description:
    "Technologie non invasive pour réduire la cellulite et remodeler la silhouette. Elle utilise des ultrasons pour détruire les cellules graisseuses et lisser la peau.",
  duration: "45 minutes",
  price: "65 €",
};

const Lipocavitation = () => {
  return <ServiceDetail service={lipocavitationData} />;
};

export default Lipocavitation;
