import React from "react";

const BookingButton = ({ className = "" }) => {
  const handleClick = () => {
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-white text-brand-text hover:text-white hover:bg-brand-accent hover:border-brand-accent py-3 px-10 rounded-full border-transparent text-lg shadow-xl transition duration-300 ${className}`}
    >
      Réserver mon instant sacré
    </button>
  );
};

export default BookingButton;
