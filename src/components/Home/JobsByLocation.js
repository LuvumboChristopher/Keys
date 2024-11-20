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
    <section className="">
      <div className="container text-center w-full mx-auto py-12">
        <h2 className="text-center text-4xl py-2">
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
        <p className="max-w-2xl mx-auto text-md py-1">
          Découvrez les offres d"emploi disponibles dans les principales villes de France.
          <br /> Trouvez l"opportunité qui vous correspond !
        </p>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-lg overflow-hidden">
        {cities.map((city, index) => (
          <Link key={index} href={`/jobs/${index}`} passHref>
            <div className="relative group overflow-hidden cursor-pointer rounded-xl border shadow-lg">
              <div className="relative w-full h-[300px] transition-all duration-500 group-hover:scale-105">
                <Image
                   layout="responsive"
                   width={16}
                   height={9} 
                  src={city.image}
                  alt={`city-${city.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-60 group-hover:opacity-70"></div>
              </div>
              <div className="absolute top-36 flex flex-col justify-center items-start sm:flex-row sm:items-center w-full">
                <div>
                  <h1 className="pb-10 text-white text-center text-2xl font-bold transition-all duration-300 group-hover:text-3xl text-shadow">
                    {city.name}
                  </h1>
                  <p className=" text-white text-center text-xs px-5">
                    {adjustTextLength(city.description)}
                  </p>
                </div>
                <small className="absolute w-full text-center text-xs top-14 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-500 text-sm">
                  Voir les offres
                </small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default JobsByLocation;
