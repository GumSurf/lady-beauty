import React from "react";

const BookingButton = ({ className = "" }) => {
  return (
    <a
      href="https://www.fresha.com/fr/p/fatma-aydin-5599261?pId=2527112&fbclid=PAZXh0bgNhZW0CMTEAAaezt7xGhlRSJE2h-fqct0hop4WSmBeblKyEzKqgLQACNboMukQNpMFr-ENvZw_aem_eE9AQbfhEKd7tna3DzhaKQ"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white text-brand-text hover:text-white hover:bg-brand-accent hover:border-brand-accent py-3 px-10 rounded-full border-transparent text-lg shadow-xl transition duration-300 font-semibold ${className}`}
    >
      Réserver mon instant sacré
    </a>
  );
};

export default BookingButton;
