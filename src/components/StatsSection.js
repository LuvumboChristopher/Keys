"use client";

import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section
      className="w-full mx-auto py-12 text-black bg-cover bg-center relative"
    >      
      <div className="max-w-screen-lg mx-auto relative z-20 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="text-6xl font-extrabold mb-1">
              <motion.h2 className="">
                1.6 K+
              </motion.h2>
            </div>
            <p className="text-md text-center">Offres d'Emploi Disponibles</p>
          </motion.div>
          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="text-6xl font-extrabold mb-1">
              <motion.h2 className="">
                180+
              </motion.h2>
            </div>
            <p className="text-md text-center">Entreprises recrutant</p>
          </motion.div>
          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="text-6xl font-extrabold mb-1">
              <motion.h2 className="">
                250+
              </motion.h2>
            </div>
            <p className="text-md text-center">Nouvelles offres cette semaine</p>
          </motion.div>
          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="text-6xl font-extrabold mb-1">
              <motion.h2 className="">
                6.5 K+
              </motion.h2>
            </div>
            <p className="text-md text-center">Candidats recrutés</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
