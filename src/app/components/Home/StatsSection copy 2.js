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
    <section className="mx-auto text-black bg-cover bg-center relative">
      <div className="relative z-20">
        <div className="grid grid-cols-2 gap-6 justify-items-center items-center ">
          {/* Stat 1 */}
          <div ref={elementRef1} className="bg-gray-50 w-full rounded-xl border p-5 px-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible1 ? 1 : 0, scale: isVisible1 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-2 flex items-center justify-center gap-3"
            >
              <span className="text-4xl md:text-6xl">🗓️</span>
              <h2 className="text-4xl">2021</h2>
            </motion.div>
            <p className="text-xs ">Depuis 2021</p>
          </div>

          {/* Stat 2 */}
          <div ref={elementRef2} className="bg-gray-50 w-full rounded-xl border p-5 px-10  flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible2 ? 1 : 0, scale: isVisible2 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-2 flex items-center justify-center gap-3"
            >
              <span className="text-4xl md:text-6xl">🏬</span>
              <h2 className="text-4xl">5</h2>
            </motion.div>
            <p className="text-xs ">Agences en France</p>
          </div>

          {/* Stat 3 */}
          <div ref={elementRef3} className="bg-gray-50 w-full rounded-xl border p-5 px-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible3 ? 1 : 0, scale: isVisible3 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-2 flex items-center justify-center gap-3"
            >
              <span className="text-4xl md:text-6xl">👨🏽‍🔧</span>
              <h2 className="text-4xl">300+</h2>
            </motion.div>
            <p className="text-xs ">Intérimaires</p>
          </div>

          {/* Stat 4 */}
          <div ref={elementRef4} className="bg-gray-50 w-full rounded-xl border p-5 px-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isVisible4 ? 1 : 0, scale: isVisible4 ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold mb-2 flex items-center justify-center gap-3"
            >
              <span className="text-4xl md:text-6xl">👬</span>
              <h2 className="text-4xl">200+</h2>
            </motion.div>
            <p className="text-xs ">Clients satisfaits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;