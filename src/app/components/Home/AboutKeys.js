"use client";

import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutKeys() {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center my-14">

        <motion.div
          className="w-full lg:w-7/12 px-6 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs sm:text-sm lg:text-md">
            <h2 className="text-sm uppercase text-gray-500 mb-3">Qui Sommes-Nous ?</h2>
            <h3 className="text-2xl font-bold mb-5">
              Une agence de recrutement qui valorise la stratégie et l&#39;engagement humain.
            </h3>
            <p className="mb-6">
              Chez Keys, nous croyons en l&#39;importance d&#39;une approche sur-mesure pour chaque client et candidat. 
              Notre équipe s&#39;efforce d&#39;identifier des talents qui correspondent parfaitement aux besoins des entreprises 
              tout en respectant les aspirations des individus.
            </p>
          </div>

          <div className="flex flex-wrap mt-3 text-xxs sm:text-xs lg:text-md">
            <div className="w-full px-4">
              <ul className="list-none mb-0">
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-yellow-500 mr-3" />
                  Recrutement sur mesure pour chaque poste clé.
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-yellow-500 mr-3" />
                  Suivi personnalisé pour les entreprises et candidats.
                </li>
              </ul>
            </div>

            <div className="w-full px-4">
              <ul className="list-none mb-0">
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-yellow-500 mr-3" />
                  Stratégie de recrutement alignée sur vos objectifs.
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-yellow-500 mr-3" />
                  Accompagnement continu pour une intégration réussie.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-5/12 px-6 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/contact/candidate-image.webp"
            alt="Image descriptive"
            width={1000}
            height={1000}
            className="w-full rounded-xl shadow-lg h-[300px] object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
}
