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
      threshold: 0.25
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
      spaceBetween: 16,
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
        1024: {
          slidesPerView: 3.5,
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
    <section className="bg-gray-100 pb-20">
      <div className="">
        <div className="relative group/nav">
          <div className="container py-10 ">
            <h2 className="text-center text-4xl py-2">Tous nos
              <motion.span
                className="px-3 bg-yellow-500 cursor-pointer"
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                secteurs
              </motion.span>{" "}
              d’activité</h2>
            <p className="max-w-4xl mx-auto text-center text-black py-3">Chez Keys, nous mettons à votre disposition une expertise diversifiée pour répondre aux besoins spécifiques de chaque secteur d"activité. Que ce soit dans le domaine de l’industrie, de la santé, du commerce, ou des technologies, nous nous engageons à vous offrir des solutions sur-mesure, adaptées aux exigences de chaque entreprise et de chaque candidat. Découvrez nos domaines d’intervention et trouvez la clé de votre succès professionnel avec nous</p>
          </div>
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
                  <div className="group relative rounded-xl overflow-hidden cursor-pointer">
                    <div className="relative width-[616px] h-[380px] w-full overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={`secteur-${sector.name}`}
                        width={616}
                        height={390}
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <div className="w-[calc(100%-4px)] absolute bottom-0 flex flex-col justify-between items-start gap-y-8 p-7 sm:flex-row sm:items-center">
                      <div className="max-w-[600px] flex-1 text-colorButteryWhite">
                        <p
                          className="mb-[10px] block text-xl font-bold leading-[1.4] md:text-2xl text-shadow-md transition-all duration-500 ease-in-out"
                          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
                        >
                          {sector.name}
                        </p>
                        <p className="text-sm line-clamp-2">{sector.description}</p>
                      </div>
                      <div className="relative inline-flex items-start justify-center overflow-hidden" href="/">
                        <FaKey
                          className="text-3xl p-1 translate-x-0 opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0"
                        />
                        <FaKey
                          className="text-3xl p-1 text-yellow-500 absolute -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                        />
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
