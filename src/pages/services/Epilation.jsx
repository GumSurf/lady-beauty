// EpilationCireFil.jsx
import React from "react";
import ServiceDetail from "./ServiceDetail";

const epilationData = {
  name: "Épilation à la cire et au fil",
  image: "https://res.cloudinary.com/dopysnsl1/image/upload/v1748873290/pexels-shkrabaanthony-5177995_jl2sni.jpg",
  description:
    "Techniques d’épilation classiques pour une peau douce, utilisant la cire ou le fil selon la zone et le besoin pour une finition parfaite.",
  duration: "30 minutes",
  price: "35 €",
};

const Epilation = () => <ServiceDetail service={epilationData} />;
export default Epilation;
