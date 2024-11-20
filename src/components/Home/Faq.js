"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Comment puis-je postuler pour une mission via votre agence ?",
      answer:
        "Pour postuler, vous pouvez visiter notre site et consulter les offres disponibles. Une fois que vous avez trouvé une mission qui vous intéresse, il vous suffit de cliquer sur "Postuler" et de remplir le formulaire en ligne avec votre CV et vos informations.",
    },
    {
      question: "Quelles sont les qualifications requises pour m"inscrire ?",
      answer:
        "Nous recherchons des candidats ayant une variété de compétences, en fonction des besoins de nos clients. Une expérience préalable dans le secteur souhaité est souvent un plus, mais nous considérons également les débutants pour certaines missions.",
    },
    {
      question: "Quels sont les avantages de passer par une agence intérimaire ?",
      answer:
        "Les agences intérimaires vous permettent d"accéder à une large gamme d"opportunités de travail temporaire. Vous bénéficiez également d"un accompagnement personnalisé, de la sécurité de l"emploi avec un contrat intérimaire, et de conseils pour votre développement professionnel.",
    },
    {
      question: "Quels types de missions proposez-vous ?",
      answer:
        "Nous proposons des missions dans divers secteurs tels que l"administration, la logistique, la santé, et bien plus. Nos missions varient en durée et en responsabilité, ce qui vous permet de trouver celle qui correspond le mieux à vos besoins et compétences.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container py-20 flex flex-col lg:flex-row gap-8">
      {/* Columna de texto (35%) */}
      <div className="w-full lg:w-[40%] animate-fadeInLeft">
        <h6 className="text-gray-500 text-lg font-semibold">Questions Fréquentes</h6>
        <h2 className="text-3xl font-bold">Foire aux Questions</h2>
        <p className="mt-4 text-gray-600">
          Retrouvez ici les réponses aux questions les plus courantes concernant notre agence et les services que nous offrons.
        </p>
      </div>

      {/* Columna de preguntas (65%) */}
      <div className="w-full lg:w-[60%] animate-fadeIn">
        <div className="grid gap-4" id="accordionFAQ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "active-faq" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-5 focus:outline-none transition-all duration-300 ease-in-out  ${
                  activeIndex === index
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="text-md font-medium">{faq.question}</span>
                <span className="text-sm">{activeIndex === index ? "▲" : "▼"}</span>
              </button>
              <div
                className={`text-sm p-4 text-gray-600 transition-all duration-500 ease-in-out faq-answer ${
                  activeIndex === index ? "show-answer" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
