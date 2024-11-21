"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaKey } from "react-icons/fa";
import Image from "next/image";

const JobsByLocation = () => {

  const cities = [
    { name: "Paris", image: "/images/cities/paris.jpeg", description: "Explorez les meilleures opportunités professionnelles à Paris, la capitale économique de la France." },
    { name: "Lyon", image: "/images/cities/lyon.jpeg", description: "Lyon, un centre majeur pour l'industrie et l'innovation, offre une grande variété de postes." },
    { name: "Marseille", image: "/images/cities/marseille.jpeg", description: "Marseille est une ville dynamique avec des emplois dans le secteur portuaire, touristique et technologique." },
    { name: "Toulouse", image: "/images/cities/toulouse.webp", description: "Toulouse, le centre de l'industrie aéronautique, offre de nombreuses possibilités de carrière." },
    { name: "Nice", image: "/images/cities/nice.jpeg", description: "Nice allie un cadre de vie exceptionnel avec des opportunités dans les secteurs du tourisme et des services." },
    { name: "Bordeaux", image: "/images/cities/bordeaux.jpeg", description: "Bordeaux, réputée pour son vin et son secteur technologique en pleine expansion, offre de nombreuses opportunités." }
  ];

  const adjustTextLength = (text, length = 120) => {
    if (text.length < length) {
      return text + " ".repeat(length - text.length);
    } else {
      return text.substring(0, length);
    }
  };

  return (
    <section className="bg-gray-50 border-t border-b">
      <div className="container text-center w-full mx-auto py-12">
        <h2 className="text-center text-3xl lg:text-4xl py-2 text-shadow-xl"
        >
          Emplois par{" "}
          <motion.span
            className="px-3 bg-yellow-500 cursor-pointer"
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            localisation
          </motion.span>
        </h2>
        <small className="block  mb-6">
          Découvrez les offres d&#39;emploi disponibles dans les principales villes de France.<br />
        </small>
        <p className="max-w-3xl mx-auto text-md ">
          Que vous soyez à la recherche d&#39;une nouvelle opportunité de carrière ou que vous souhaitiez explorer des options dans des secteurs variés, nous vous offrons un large éventail d&#39;offres adaptées à vos compétences et vos aspirations.
        </p>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 overflow-hidden">
        {cities.map((city, index) => (
          <Link key={index} href={`/jobs/${index}`} passHref>
            <div className="relative group overflow-hidden cursor-pointer shadow-lg">


              <div className="h-[260px] transition-all duration-500 group-hover:scale-105">
                <Image
                  width={1000}
                  height={1000}
                  src={city.image}
                  alt={`city-${city.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-60 group-hover:opacity-70"></div>
              </div>
              <div className="absolute top-24 flex w-full">
              <div className="max-w-xs mx-auto text-left">
                  <h1 className="pb-10 text-white text-3xl font-bold transition-all duration-300 group-hover:text-2xl text-shadow-sm"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                    {city.name}
                  </h1>
                  <small className="absolute w-full text-xs top-12 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-500 text-sm">
                    Voir les offres
                  </small>
                  <p className="text-white text-xs">
                    {adjustTextLength(city.description)}
                  </p>
                </div>
            
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="container py-10 text-center">
        <p className="text-md font-bold font-black">Trouvez l&#39;opportunité qui vous correspond !</p>
      </div>
    </section>
  );
};

export default JobsByLocation;
