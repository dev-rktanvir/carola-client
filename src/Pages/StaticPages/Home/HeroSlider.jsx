import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import slider1 from "../../../assets/sliderImg/slide2.png";
import slider2 from "../../../assets/sliderImg/slider-3.jpg";

const slides = [
  {
    id: 1,
    image: slider1,
    subHeading: "Rent Your Dream Car",
    heading: "Luxury Cars for Every Journey",
    text: "Experience the thrill of driving top-of-the-line vehicles. Our extensive collection of luxury cars ensures comfort, style, and performance on every trip, making each journey unforgettable.",
    buttonText: "Book Now",
  },
  {
    id: 2,
    image: slider2,
    subHeading: "Affordable. Reliable. Easy.",
    heading: "Drive Anywhere, Anytime",
    text: "Enjoy hassle-free car rentals with flexible plans tailored to your schedule. From quick trips to long drives, we make it simple and affordable to explore wherever you want.",
    buttonText: "Get Started",
  },
];

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div
              className="relative w-full h-[90vh] flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0" />

              {/* Content container */}
              <div className="relative z-10 w-11/12 lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6 pt-24">
                {/* Left content */}
                <div className="flex flex-col justify-center text-secondary space-y-4">
                  <motion.p
                    key={`${index}-sub-${activeSlide}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm md:text-base font-medium tracking-wide uppercase text-primary"
                  >
                    {slide.subHeading}
                  </motion.p>

                  <motion.h1
                    key={`${index}-head-${activeSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-secondary leading-tight"
                  >
                    {slide.heading}
                  </motion.h1>

                  <motion.p
                    key={`${index}-text-${activeSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-secondary text-justify max-w-full md:max-w-lg text-sm md:text-base"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.button
                    key={`${index}-btn-${activeSlide}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-6 bg-primary hover:bg-secondary text-white font-semibold py-3 md:py-4 cursor-pointer px-6 md:px-12 rounded-md w-fit text-sm md:text-base"
                  >
                    {slide.buttonText}
                  </motion.button>
                </div>

                {/* Right side empty */}
                <div className="hidden lg:block"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
