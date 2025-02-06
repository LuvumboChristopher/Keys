"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSearch } from "@/app/context/SearchContext";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cities } from "@/app/utils/cities";

export function ImageCarousel() {
  const { setLocation, handleSearch } = useSearch();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCityClick = (cityName) => {
    setLocation(cityName);
    handleSearch();
    router.push(`/jobs?location=${encodeURIComponent(cityName)}`);
  };

  const handleImageClick = (index) => {
    if (index === currentIndex) {
      handleCityClick(cities[currentIndex].name);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cities.length) % cities.length);
  };

  return (
    <div className="hidden lg:block xl:w-max overflow-hidden">
      <div className="relative flex items-center justify-center w-[840px] h-[300px] overflow-hidden">
        <motion.div
          className="absolute transition-all duration-1000 ease-in-out transform z-0 opacity-100"
          style={{
            transform: `translateX(-45%)`,
          }}
        >
          <div
            key={currentIndex - 1}
            onClick={() => handleImageClick((currentIndex + 1) % cities.length)}
            className="w-[430px] h-[240px] relative group overflow-hidden cursor-pointer shadow-lg rounded-2xl mx-2 md:mx-3 border border-gray-300"
            style={{
              transform: "scale(0.8)",
              zIndex: 1,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="h-[260px] transition-all duration-300 md:group-hover:scale-105">
              <img
                width={1000}
                height={1000}
                src={cities[(currentIndex - 1 + cities.length) % cities.length].image}
                alt={`city-${cities[(currentIndex - 1 + cities.length) % cities.length].name}`}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 md:group-hover:opacity-55"></div>
            <div className="absolute bottom-14 flex w-full z-10">
              <div className="relative max-w-[80%] mx-auto text-left text-white">
                <h1 className="pb-8 text-2xl font-bold transition-all duration-300 md:group-hover:text-[26px]" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  {cities[(currentIndex - 1 + cities.length) % cities.length].name}
                </h1>

                <p className="text-xs">{cities[(currentIndex - 1 + cities.length) % cities.length].description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="transition-all duration-1000 ease-in-out transform z-10 "
          style={{
            transform: `translateX(0%)`,
            scale: "1.1",
            zIndex: 2,
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div
            key={currentIndex}
            onClick={() => handleCityClick(cities[currentIndex].name)}
            className="w-[380px] h-[640px] lg:h-[240px] relative group overflow-hidden cursor-pointer shadow-lg rounded-2xl  mx-2 md:mx-3"
          >
            <div className=" h-[640px] lg:h-[260px] transition-all duration-300 md:group-hover:scale-105">
              <img
                width={1000}
                height={1000}
                src={cities[currentIndex].image}
                alt={`city-${cities[currentIndex].name}`}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out lg:group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500 md:group-hover:opacity-55"></div>
            <div className="absolute bottom-14 flex w-full z-10">
              <div className="relative max-w-[80%] mx-auto text-left text-white">
                <h1 className="pb-8 text-2xl font-bold transition-all duration-300 md:group-hover:text-[26px]" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                  {cities[currentIndex].name}
                </h1>
                <small className="absolute w-full text-xxs bottom-[38px] transform -translate-y-1/2 md:opacity-0 md:md:group-hover:opacity-100 transition-all duration-300 text-yellow-500 text-sm">
                  Voir les offres
                </small>
                <p className="text-xxs">{cities[currentIndex].description}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <button
          onClick={prevImage}
          className="absolute left-0 z-20 text-white bg-black p-2 rounded-full top-1/2 transform -translate-y-1/2"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-[20%] z-20 text-white bg-black p-2 rounded-full top-1/2 transform -translate-y-1/2"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
