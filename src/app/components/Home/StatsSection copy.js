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
    <section className="mx-auto py-12 text-black bg-cover bg-center relative">
    <div className="container relative z-20">
      <div className="flex flex-col items-center sm:flex-row flex-wrap gap-16 justify-center items-start">
        {/* Stat 1 */}
        <div className="w-max flex justify-center items-center flex-col text-center">
          <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-6xl">🗃️</span>
            <h2 className="text-4xl">1.6 K+</h2>
          </div>
          <p className="w-full text-xs text-center">Offres d&#39;Emploi disponibles</p>
        </div>

        {/* Stat 2 */}
        <div className="w-max flex justify-center items-center flex-col text-center">
          <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-6xl">💼</span>
            <h2 className="text-4xl">180+</h2>
          </div>
          <p className="w-full text-xs text-center">Entreprises recrutant</p>
        </div>

        {/* Stat 3 */}
        <div className="w-max flex justify-center items-center flex-col text-center">
          <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-6xl">📈</span>
            <h2 className="text-4xl">250+</h2>
          </div>
          <p className="w-full text-xs text-center">Nouvelles offres cette semaine</p>
        </div>

        {/* Stat 4 */}
        <div className="w-max flex justify-center items-center flex-col text-center">
          <div className="mx-auto font-extrabold mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl md:text-6xl">📊</span>
            <h2 className="text-4xl">6.5 K+</h2>
          </div>
          <p className="w-full text-xs text-center">Candidats recrutés</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default StatsSection;
