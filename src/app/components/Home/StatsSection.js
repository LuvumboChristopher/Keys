import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendar, FaUserFriends, FaUserMd } from "react-icons/fa";

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
    <section className="mx-auto text-black bg-cover bg-center relative">
      <div className="relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-center">
          {/* Stat 1 */}
          <div ref={elementRef1} className="bg-gray-50 p-7 md:p-12 rounded-xl border border-gray-300 w-full flex flex-col items-start text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible1 ? 1 : 0, scale: isVisible1 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-4 flex items-center justify-center gap-4"
            >
              <span className="text-md md:text-xl dark:text-blue-500"><FaCalendar/></span>
              <h2 className="text-md text-left">Depuis 2021</h2>
            </motion.div>
            <p className="text-xxs text-left line-clamp-3 ">Depuis 2021, nous évoluons pour répondre aux défis actuels du marché et anticiper les besoins de demain.</p>
          </div>

          {/* Stat 2 */}
          <div ref={elementRef2} className="bg-gray-50 p-7 md:p-12 rounded-xl border border-gray-300 w-full flex flex-col items-start text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible2 ? 1 : 0, scale: isVisible2 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-4 flex items-center justify-center gap-4"
            >
              <span className="text-md md:text-xl dark:text-amber-500"><FaBuilding/></span>
              <h2 className="text-md text-left">5 Agences</h2>
            </motion.div>
            <p className="text-xxs text-left line-clamp-3 ">Pour accompagner nos clients partout sur le territoire avec des solutions adaptées et un service de proximité.</p>
          </div>

          {/* Stat 3 */}
          <div ref={elementRef3} className="bg-gray-50 p-7 md:p-12 rounded-xl border border-gray-300 w-full flex flex-col items-start text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible3 ? 1 : 0, scale: isVisible3 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-4 flex items-center justify-center gap-4"
            >
              <span className="text-md md:text-xl dark:text-yellow-500"><FaUserMd/></span>
              <h2 className="text-md text-left">300+ Intérimaires</h2>
            </motion.div>
            <p className="text-xxs text-left line-clamp-3 ">Prêts à répondre aux besoins des entreprises en apportant leur expertise, leur flexibilité et leur savoir-faire sur le terrain.</p>
          </div>

          {/* Stat 4 */}
          <div ref={elementRef4} className="bg-gray-50 p-7 md:p-12 rounded-xl border border-gray-300 w-full flex flex-col items-start text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible4 ? 1 : 0, scale: isVisible4 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-4 flex items-center justify-center gap-4"
            >
              <span className="text-md md:text-xl dark:text-emerald-600"><FaUserFriends/></span>
              <h2 className="text-md text-left">200+ Clients</h2>
            </motion.div>
            <p className="text-xxs text-left line-clamp-3 ">Qui nous font confiance grâce à la qualité de nos services, notre réactivité et notre engagement à répondre à leurs attentes. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;