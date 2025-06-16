import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        name: "Sophie M.",
        text: "Un accueil chaleureux et des soins de qualité. Je ressors toujours détendue et ravie du résultat !",
    },
    {
        name: "Claire R.",
        text: "Le personnel est professionnel et à l’écoute. Un vrai moment de bien-être, je recommande vivement !",
    },
    {
        name: "Julie D.",
        text: "J’ai testé le microneedling, résultat incroyable ! Merci Lady Beauty pour votre savoir-faire.",
    },
];

const Testimonials = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
    };
  
    return (
      <div className="relative w-full min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0"
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <section className="relative max-w-3xl mx-auto py-16 px-6 text-center animate-fadeInUp font-poppins rounded-xl bg-transparent">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold mb-12 font-playfair">
            Ce que disent nos clientes
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-8">
                <p className="text-white italic text-lg mb-6 font-poppins">
                  “{testimonial.text}”
                </p>
                <p className="font-bold text-brand-rose text-xl font-playfair">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    );
  };
  

export default Testimonials;
