"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { sectors } from "@/app/utils/sectors";

const SecteursActivite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const swiperRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.5
    });

    const element = swiperRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
      autoplay: {
        delay: 250,
        disableOnInteraction: false,
      },
      speed: 3500,
      navigation: {
        nextEl: ".economic-sector-project-button-next",
        prevEl: ".economic-sector-project-button-prev",
      },
      effect: "slide",
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        1440: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2.35,
        },
        480: {
          slidesPerView: 1.5,
        },
        375: {
          slidesPerView: 1,
        },
      },
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (swiper) swiper.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section id="secteurs-d'activité">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="relative group/nav py-8 md:py-14">
          <div className="container">
            <h2 className="text-left md:text-center text-xl md:text-2xl md:text-3xl mb-3 truncate">
              Tous nos
              <motion.span
                className="px-1 bg-yellow-500 cursor-pointer rounded-md"
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                secteurs
              </motion.span>
              d’activité
            </h2>
            <div className="text-left text-xs sm:text-xs sm:text-sm md:text-md max-w-4xl mx-auto md:hidden py-3 mb-6">
              <p className="py-3">
                Chez Keys, nous mettons à votre disposition une expertise diversifiée
                pour répondre aux besoins spécifiques de chaque secteur d&#39;activité.
              </p>
              <p className="py-3">
                Que ce soit dans le domaine de l&#39;industrie, de la santé, du commerce,
                ou des technologies, nous nous engageons à vous offrir des solutions
                sur-mesure, adaptées aux exigences de chaque entreprise et de chaque candidat.
              </p>
              <p className="py-3">
                Découvrez nos domaines d&#39;intervention et trouvez la clé de votre succès
                professionnel avec nous.
              </p>
            </div>
            <p className="hidden text-xs sm:text-xs sm:text-sm md:text-md md:block max-w-4xl mx-auto text-center py-3 mb-6 ">
              Chez Keys, nous mettons à votre disposition une expertise diversifiée pour répondre
              aux besoins spécifiques de chaque secteur d&#39;activité. Que ce soit dans le
              domaine de l&#39;industrie, de la santé, du commerce, ou des technologies, nous
              nous engageons à vous offrir des solutions sur-mesure, adaptées aux exigences de
              chaque entreprise et de chaque candidat. Découvrez nos domaines d&#39;intervention
              et trouvez la clé de votre succès professionnel avec nous.
            </p>
          </div>
          <motion.div
            ref={swiperRef}
            className="swiper-container slider-center-inline w-[90%] xs:w-full lg:w-[90%] lg:max-w-[1440px] mx-auto overflow-hidden "
            style={{ overflow: "hidden" }}
          >
            <div className="swiper-wrapper text-white ">
              {sectors.map((sector, index) => (
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label={`${index + 1} / ${sectors.length}`}
                  key={index}
                >
                  <div className="group relative overflow-hidden cursor-pointer rounded-xl overflow-hidden"
                    style={{
                      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.52)",
                    }}
                  >
                    <div className="relative h-[260px] xs:h-[320px] lg:md:h-[360px] xl:h-[300px] w-full overflow-hidden transition-all duration-500 group-hover:scale-110 ">
                      <Image
                        src={sector.image}
                        alt={`secteur-${sector.name}`}
                        width={616}
                        height={390}
                        className="h-full w-full object-cover duration-500 transition-all duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black duration-500 opacity-60 group-hover:opacity-40"></div>
                      </div>
                    <div className="absolute bottom-8 text-center flex flex-col justify-between items-start gap-y-8 sm:flex-row sm:items-start">
                      <div className="w-[85%] mx-auto">
                        <h1 className="w-full text-left mx-auto mb-3 text-white text-base sm:text-lg md:text-xl font-thin transition-all duration-300 line-clamp-1"
                          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                          {sector.name}
                        </h1>
                        <p className="text-xxs sm:text-xs  text-left  line-clamp-2 ">{sector.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SecteursActivite;