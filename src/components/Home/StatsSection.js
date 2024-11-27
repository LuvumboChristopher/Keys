"use client";

import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section
    id="une-vision-différente-de-l'emploi"
      className="w-full mx-auto py-12 text-black bg-cover bg-center relative"
    >      
      <h1 className="text-xl sm:text-2xl text-center pb-8 sm:pb-10 md:pb-12">Une vision différente de l&#39;emploi</h1>
      <div className="container max-w-screen-lg mx-auto relative z-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-1 items-start">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="w-full mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
              <span className="text-4xl md:text-5xl lg:text-6xl">
                🗃️
              </span>
              <motion.h2 className="text-4xl md:text-5xl lg:text-5xl">
                1.6 K+
              </motion.h2>
            </div>
            <p className="text-xs sm:text-sm md:text-md  text-center">Offres d&#39;Emploi Disponibles</p>
          </motion.div>
          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="w-full mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-5xl lg:text-6xl">
              💼
            </span>
              <motion.h2 className="text-4xl md:text-5xl lg:text-5xl">
                180+
              </motion.h2>
            </div>
            <p className="text-xs sm:text-sm md:text-md  text-center">Entreprises recrutant</p>
          </motion.div>
          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="w-full mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-5xl lg:text-6xl">
              📈
            </span>
              <motion.h2 className="text-4xl md:text-5xl lg:text-5xl">
                250+
              </motion.h2>
            </div>
            <p className="text-xs sm:text-sm md:text-md  text-center">Nouvelles offres cette semaine</p>
          </motion.div>
          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center flex-col text-center"
          >
            <div className="w-full mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-5xl lg:text-6xl">
              📊
            </span>
              <motion.h2 className="text-4xl md:text-5xl lg:text-5xl">
                6.5 K+
              </motion.h2>
            </div>
            <p className="text-xs sm:text-sm md:text-md  text-center">Candidats recrutés</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
