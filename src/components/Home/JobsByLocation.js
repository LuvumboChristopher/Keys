"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaKey } from "react-icons/fa";
import Image from "next/image";

const cities = [
  { name: "Paris", image: "/images/cities/paris.jpeg", description: "Explorez les meilleures opportunités professionnelles à Paris, la capitale économique de la France." },
  { name: "Lyon", image: "/images/cities/villedelyon.jpeg", description: "Lyon, un centre majeur pour l'industrie et l'innovation, offre une grande variété de postes." },
  { name: "Marseille", image: "/images/cities/marseille.jpeg", description: "Marseille est une ville dynamique avec des emplois dans le secteur portuaire, touristique et technologique." },
  { name: "Toulouse", image: "/images/cities/toulouse.webp", description: "Toulouse, le centre de l'industrie aéronautique, offre de nombreuses possibilités de carrière." },
  { name: "Nice", image: "/images/cities/nice.jpeg", description: "Nice allie un cadre de vie exceptionnel avec des opportunités dans les secteurs du tourisme et des services." },
  { name: "Bordeaux", image: "/images/cities/bordeaux.jpeg", description: "Bordeaux, réputée pour son vin et son secteur technologique en pleine expansion, offre de nombreuses opportunités." }
];

const JobsByLocation = () => {
  const [isVisible, setIsVisible] = useState(Array(cities.length).fill(false));
  const sectionRef = useRef([]);

  const adjustTextLength = (text, length = 120) => {
    if (text.length < length) {
      return text + " ".repeat(length - text.length);
    } else {
      return text.substring(0, length);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index"), 10);
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            const updatedVisibility = [...prev];
            updatedVisibility[index] = true;
            return updatedVisibility;
          });
        }
      });
    }, { threshold: 0.5 });

    sectionRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      sectionRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
  return (
    <section id="emplois-par-localisation" className="bg-gray-50 border-t border-b">
      <div className="container text-center w-full mx-auto pt-7 pb-10">
        <h2 className="text-center text-3xl lg:text-4xl py-2 text-shadow-xl">
          Emplois par{" "}
          <motion.span
            className="px-3 bg-yellow-500 cursor-pointer rounded-lg"
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            localisation
          </motion.span>
        </h2>
        <small className="block mb-6">
          Découvrez les offres d&#39;emploi disponibles dans les principales villes de France.<br />
        </small>
        <p className="max-w-4xl mx-auto text-md">
          Que vous soyez à la recherche d&#39;une nouvelle opportunité de carrière ou que vous souhaitiez explorer des options dans des secteurs variés, nous vous offrons un large éventail d&#39;offres adaptées à vos compétences et vos aspirations.
        </p>
      </div>

      <div className="bg-gray-50 max-w-7xl mx-auto flex flex-col gap-6 md:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 overflow-hidden">
        {cities.map((city, index) => (
          <motion.div
            key={index}
            data-index={index}
            ref={(el) => (sectionRef.current[index] = el)}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible[index] ? 1 : 0,
              y: isVisible[index] ? 0 : 20,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Link href={`/jobs`}>
              <div className="relative group overflow-hidden cursor-pointer rounded-3xl" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.12)" }}>
                <div className="h-[290px] transition-all duration-500 group-hover:scale-105">
                  <Image
                    width={1000}
                    height={1000}
                    src={city.image}
                    alt={`city-${city.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-60 group-hover:opacity-70"></div>
                </div>
                <div className="absolute top-28 flex w-full">
                  <div className="max-w-xs mx-auto text-left">
                    <h1 className="pb-10 text-white text-3xl font-bold transition-all duration-300 group-hover:text-2xl text-shadow-sm" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                      {city.name}
                    </h1>
                    <small className="absolute w-full text-xs top-12 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-500 text-sm">
                      Voir les offres
                    </small>
                    <p className="text-white text-xs">{adjustTextLength(city.description)}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="container py-12 text-center">
        <p className="text-md font-bold font-black">Trouvez l&#39;opportunité qui vous correspond !</p>
      </div>
    </section>
  );
};

export default JobsByLocation;
