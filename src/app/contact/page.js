"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [isRecruiter, setIsRecruiter] = useState(false);

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`grid grid-cols-1 md:grid-cols-2 relative bg-gray-100  ${isRecruiter ? "h-[800px]" : "h-[700px]"} `}
      >
        <motion.div
          className="md:rounded-ee-[100px] overflow-hidden"
          style={{
            backgroundImage: `url(${isRecruiter ? "/images/contact/recruiter-image.webp" : "/images/contact/candidate-image.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            style={{
              content: "",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </motion.div>

        <div className="absolute inset-0 flex justify-center items-start text-sm">
          <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 justify-start">
            <motion.div
              className="h-max flex flex-col items-start justify-between gap-0 bg-black bg-opacity-60 text-white  md:rounded-es-[50px] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="w-full h-max">
                <div className="w-max flex group">
                  <button
                    className={`w-1/2 cursor-pointer py-3 px-6 hover:bg-black hover:text-white rounded-ee-[10px] overflow-hidden ${!isRecruiter ? "bg-yellow-500 text-white" : "bg-transparent"}`}
                    onClick={() => setIsRecruiter(false)}
                  >
                    Candidat
                  </button>
                  <button
                    className={`w-1/2 cursor-pointer py-3 px-6 bg-transparent hover:bg-black rounded-b-[10px] overflow-hidden ${isRecruiter ? "bg-yellow-500 text-white" : "bg-transparent"}`}
                    onClick={() => setIsRecruiter(true)}
                  >
                    Recruteur
                  </button>
                </div>
              </div>

              <div className="px-6 pt-8 pb-12 text-sm">
                {isRecruiter ? (
                  <>
                    <h3 className="text-2xl font-bold">
                      Attirez les meilleurs talents et facilitez vos recrutements
                    </h3>
                    <p className="text-md pt-3">
                      En tant que recruteur, trouver les bons candidats est essentiel pour le succès de votre entreprise. Notre solution vous accompagne dans ce processus en simplifiant la recherche de profils qualifiés et en optimisant votre attractivité auprès des talents. Profitez d&#39;une plateforme adaptée à vos besoins pour recruter rapidement et efficacement.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold">
                      Découvrez des opportunités et avancez dans votre carrière
                    </h3>
                    <p className="text-md pt-3">
                      En tant que candidat, notre objectif est de vous mettre en relation avec des offres qui correspondent à vos aspirations et à vos compétences. Que vous soyez en début de carrière ou à la recherche d&#39;un nouveau défi, trouvez des opportunités qui vous aideront à progresser dans votre parcours professionnel.
                    </p>
                  </>
                )}
                <p className="text-md pt-6">
                  {isRecruiter
                    ? "Faites le premier pas vers une solution adaptée à vos besoins RH."
                    : "Explorez des opportunités de carrière adaptées à vos compétences."}
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`section-form bg-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-0 xl:py-12 xl:pl-12`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout
            >
              <div className="mt-6 md:m-0">
                <form method="POST" action="#" className="space-y-7">
                  {/* Campos comunes */}
                  <div className="w-full gap-10 flex">
                    <div className="w-1/2">
                      <label htmlFor="name" className="block text-sm font-medium mb-3">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full mx-auto mt-1 p-4 block bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="surname" className="block text-sm font-medium mb-3">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        required
                        className="w-full mx-auto mt-1 p-4 block bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full mt-1 p-4 block w-full bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-3">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1 p-4 block w-full bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                    />
                  </div>
                  {/* Campos específicos para los reclutadores */}
                  {isRecruiter && (
                    <div className="gap-10 flex flex-col lg:flex-row">
                      <div className="w-full lg:w-1/2">
                        <label htmlFor="companyName" className="block text-sm font-medium mb-3">
                          Nom de l&#39;entreprise <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          className="mt-1 p-4 block w-full bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                        />
                      </div>
                      <div className="w-full lg:w-1/2">
                        <label htmlFor="companySize" className="block text-sm font-medium mb-3">
                          Taille de l&#39;entreprise <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          className="mt-1 p-4 block w-full bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                        >
                          <option value="small">Petite</option>
                          <option value="medium">Moyenne</option>
                          <option value="large">Grande</option>
                        </select>
                      </div>
                    </div>
                  )}
                  {/* Campo para el mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-3">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={isRecruiter ? "5" : "5"}
                      required
                      className="mt-1 p-4 block w-full bg-white border rounded-xl border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 outline-none resize-none"
                    />
                  </div>
                  {/* Botón de envío */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-full py-4 mt-4 text-md font-semibold text-white bg-yellow-500 hover:bg-black rounded-lg"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
