import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const elementRef4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === elementRef1.current) setIsVisible1(true);
            if (entry.target === elementRef2.current) setIsVisible2(true);
            if (entry.target === elementRef3.current) setIsVisible3(true);
            if (entry.target === elementRef4.current) setIsVisible4(true);
          } else {
            if (entry.target === elementRef1.current) setIsVisible1(false);
            if (entry.target === elementRef2.current) setIsVisible2(false);
            if (entry.target === elementRef3.current) setIsVisible3(false);
            if (entry.target === elementRef4.current) setIsVisible4(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      elementRef1.current,
      elementRef2.current,
      elementRef3.current,
      elementRef4.current,
    ];

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="mx-auto py-16 text-black bg-cover bg-center relative">
      <div className="container relative z-20">
        <div className="flex flex-col items-center sm:flex-row flex-wrap gap-16 justify-center items-start">
          {/* Stat 1 */}
          <motion.div
            ref={elementRef1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible1 ? 1 : 0, y: isVisible1 ? 0 : 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-max flex justify-center items-center flex-col text-center"
          >
            <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
              <span className="text-5xl md:text-6xl">🗃️</span>
              <motion.h2 className="text-5xl">
                1.6 K+
              </motion.h2>
            </div>
            <p className="w-full text-sm text-center pt-4">
              Offres d&#39;Emploi disponibles
            </p>
          </motion.div>
           {/* Stat 3 */}
           <motion.div
            ref={elementRef3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible3 ? 1 : 0, y: isVisible3 ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-max flex justify-center items-center flex-col text-center"
          >
            <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
              <span className="text-5xl md:text-6xl">📈</span>
              <motion.h2 className="text-5xl">
                250+
              </motion.h2>
            </div>
            <p className="w-full text-sm text-center pt-4">
              Nouvelles offres cette semaine
            </p>
          </motion.div>
          {/* Stat 2 */}
          <motion.div
            ref={elementRef2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible2 ? 1 : 0, y: isVisible2 ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="w-max flex justify-center items-center flex-col text-center"
          >
            <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
              <span className="text-5xl md:text-6xl">💼</span>
              <motion.h2 className="text-5xl">
                180+
              </motion.h2>
            </div>
            <p className="w-full text-sm text-center pt-4">
              Entreprises recrutant
            </p>
          </motion.div>
         
          {/* Stat 4 */}
          <motion.div
            ref={elementRef4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible4 ? 1 : 0, y: isVisible4 ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-max flex justify-center items-center flex-col text-center"
          >
            <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
              <span className="text-5xl md:text-6xl">📊</span>
              <motion.h2 className="text-5xl">
                6.5 K+
              </motion.h2>
            </div>
            <p className="w-full text-sm text-center pt-4">
              Candidats recrutés
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
