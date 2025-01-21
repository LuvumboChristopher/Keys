"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Carrousel from '@/app/components/Home/Carrousel';
import { ImageCarousel } from "./ImageCarousel";

const JobsByLocation = () => {
  return (
    <>
      <section id="emplois-par-localisation" className="container flex flex-col lg:flex-row items-center gap-10 overflow-hidden ">
        <div className="w-full xl:w-[58%] text-left py-10 md:py-12">
          <h2 className="text-left md:text-center lg:text-left text-xl md:text-2xl md:text-3xl py-2">
            Emplois par{" "}
            <span
              className="px-1 bg-yellow-500 cursor-pointer rounded-md"
            >
              localisation
            </span>
          </h2>
          <small className="w-full  md:text-center lg:text-left text-xxs italic sm:text-xs block pt-2 mb-6 max-w-xs md:max-w-full">
            Découvrez les offres d&#39;emploi disponibles dans les principales villes de France.<br />
          </small>
          <div className="space-y-8 md:max-w-2xl mx-auto ">
            <p className="w-full mr-auto md:text-center lg:text-left text-xs sm:text-sm lg:text-md text-black max-w-4xl">
              Que vous recherchiez un emploi dans une grande ville dynamique ou dans une région plus calme et paisible, nous vous proposons une large gamme d&#39;offres d&#39;emploi qui s&#39;adapte parfaitement à vos préférences personnelles et à votre mode de vie.
            </p>
            <p className="w-full mr-auto md:text-center lg:text-left text-xs sm:text-sm lg:text-md text-black max-w-4xl">
              En choisissant une localisation qui vous correspond, vous accédez non seulement à des emplois en adéquation avec vos compétences, mais vous bénéficiez également d&#39;un cadre de vie qui soutient votre épanouissement personnel et professionnel.
            </p>
          </div>
        </div>
        <ImageCarousel/>
      </section>
      <Carrousel />
    </>
  );
};

export default JobsByLocation;
