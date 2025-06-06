import React from "react";
import ServiceDetail from "./ServiceDetail";

const winnerFillerData = {
    name: "Winner Filler",
    image: "https://images.unsplash.com/photo-1618515213234-95b9c3f136e2?auto=format&fit=crop&w=600&q=80",
    description:
        "Le Winner Filler est un soin innovant qui hydrate intensément la peau et redonne du volume, pour un teint frais et éclatant.",
    duration: "45 minutes",
    price: "80 €",
};

const WinnerFiller = () => {
    return <ServiceDetail service={winnerFillerData} />;
};

export default WinnerFiller;
