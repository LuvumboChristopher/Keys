"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import Image from "next/image";


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
      threshold: 0.1
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
      spaceBetween: 24,
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
        1280: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
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

  const sectors = [
    {
      name: "E-commerce",
      image: "/images/sectors/secteur-ecommerce-croissance-tendances.webp",
      description: "Le secteur de l'e-commerce se transforme rapidement, offrant des expériences d'achat personnalisées grâce à l'intelligence artificielle et à la big data."
    },
    {
      name: "Agriculture",
      image: "/images/sectors/secteur-agriculture-technologie-durable.jpeg",
      description: "L'agriculture durable et la technologie de précision permettent de produire plus avec moins d'impact environnemental, assurant une sécurité alimentaire mondiale."
    },
    {
      name: "Transport",
      image: "/images/sectors/secteur-transport-mobilite-durable.webp",
      description: "La mobilité durable transforme le secteur du transport avec des solutions écologiques comme les véhicules électriques et les infrastructures intelligentes."
    },
    {
      name: "Grande distribution",
      image: "/images/sectors/secteur-grande-distribution-omnichannel.webp",
      description: "Le secteur de la grande distribution s'adapte à la demande omnicanal, en combinant magasins physiques et services en ligne pour une expérience fluide."
    },
    {
      name: "Commerce alimentaire",
      image: "/images/sectors/secteur-commerce-alimentaire-durabilite.webp",
      description: "Le commerce alimentaire évolue avec une attention particulière à la durabilité et à la réduction du gaspillage alimentaire."
    },
    {
      name: "Santé",
      image: "/images/sectors/secteur-sante-telemedecine-technologie.webp",
      description: "Les innovations en télémédecine et la technologie de santé permettent des soins de santé plus accessibles, efficaces et personnalisés."
    },
    {
      name: "Industrie",
      image: "/images/sectors/secteur-industrie-automatisation.jpg",
      description: "L'industrie 4.0, combinant automatisation et technologie IoT, transforme les processus de production pour plus d'efficacité et de durabilité."
    },
    {
      name: "Agro / Textile",
      image: "/images/sectors/secteur-agro-textile-durabilite-materiaux.webp",
      description: "Le secteur agro-textile se tourne vers des pratiques durables et le recyclage des matériaux pour une industrie plus verte et plus éthique."
    },
    {
      name: "Banque",
      image: "/images/sectors/secteur-banque-transformation-digitale.webp",
      description: "La transformation numérique du secteur bancaire améliore l'efficacité des services financiers tout en garantissant une sécurité accrue grâce aux technologies émergentes."
    }
  ];

  return (
    <section className="bg-gray-50 border-t border-b pb-14">
      <div className="">
        <div className="relative group/nav">
          <motion.div
            id="secteurs-d'activité"
            className="container py-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
          >
            <h2 className="text-center text-3xl lg:text-4xl pb-6 lg:py-2">
              Tous nos
              <motion.span
                className="px-3 bg-yellow-500 cursor-pointer rounded-lg"
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                secteurs
              </motion.span>
              d’activité
            </h2>
            <div className="max-w-4xl mx-auto text-justify sm:hidden">
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
            <p className="hidden sm:block max-w-5xl mx-auto text-center py-4">
              Chez Keys, nous mettons à votre disposition une expertise diversifiée pour répondre
              aux besoins spécifiques de chaque secteur d&#39;activité. Que ce soit dans le
              domaine de l&#39;industrie, de la santé, du commerce, ou des technologies, nous
              nous engageons à vous offrir des solutions sur-mesure, adaptées aux exigences de
              chaque entreprise et de chaque candidat. Découvrez nos domaines d&#39;intervention
              et trouvez la clé de votre succès professionnel avec nous.
            </p>
          </motion.div>
          <motion.div
            ref={swiperRef}
            className="swiper-container slider-center-inline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            style={{ overflow: "hidden" }}
          >
            <div className="swiper-wrapper text-white">
              {sectors.map((sector, index) => (
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label={`${index + 1} / ${sectors.length}`}
                  key={index}

                >
                  <div className="group relative rounded-3xl overflow-hidden cursor-pointer"
                    style={{
                      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.52)",
                    }}>
                    <div className="relative width-[616px] h-[400px] xl:h-[300px]  w-full overflow-hidden transition-all duration-500 group-hover:scale-110">
                      <Image
                        src={sector.image}
                        alt={`secteur-${sector.name}`}
                        width={616}
                        height={390}
                        className="h-full w-full object-cover duration-500  transition-all duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black duration-500  opacity-60 group-hover:opacity-40"></div>
                    </div>
                    <div className="w-[calc(100%-4px)] text-left absolute bottom-0 flex flex-col justify-between items-start gap-y-8 p-7 sm:flex-row sm:items-center">
                      <div className="flex-1 text-colorButteryWhite">
                        <h1 className="w-full mx-auto mb-[15px] text-white text-2xl font-thin transition-all duration-300"
                          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                          {sector.name}
                        </h1>
                        <p className="text-sm line-clamp-2">{sector.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecteursActivite;
