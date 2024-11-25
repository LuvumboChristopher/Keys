"use client";

import React, { useState, useEffect } from "react";

const ContactPage = () => {
  const [isRecruiter, setIsRecruiter] = useState(false);
  return (
    <section className="relative">
      <div
        className={`grid grid-cols-2 relative ${isRecruiter ? "h-[1000px] md:h-[750px]":"h-[900px] md:h-[650px]"}`}
      >
              <div
              className="bg-yellow-500"
              style={{
                backgroundImage: `url(${isRecruiter 
                  ? "/images/contact/recruiter-image.webp" 
                  : "/images/contact/candidate-image.webp"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
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
        </div>
        <div className=""></div>
        {/* Formulaire dynamique */}
        <div className="absolute inset-0 flex justify-center items-start">
          <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 justify-start">
            {/* Section d"information */}
            <div className="relative h-[360px] pt-10 section-inner p-10 flex flex-col items-start justify-center bg-black bg-opacity-60 text-white">
              <header className="mb-4">
                {isRecruiter ? (
                  <>
                    <h3 className="text-2xl font-bold">
                      Attirez les meilleurs talents et facilitez vos recrutements
                    </h3>
                    <p className="text-md pt-3">
                      En tant que recruteur, trouver les bons candidats est essentiel pour le
                      succès de votre entreprise. Notre solution vous accompagne dans ce
                      processus en simplifiant la recherche de profils qualifiés et en
                      optimisant votre attractivité auprès des talents. Profitez d&#39;une plateforme
                      adaptée à vos besoins pour recruter rapidement et efficacement.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold">
                      Découvrez des opportunités et avancez dans votre carrière
                    </h3>
                    <p className="text-md pt-3">
                      En tant que candidat, notre objectif est de vous mettre en relation avec
                      des offres qui correspondent à vos aspirations et à vos compétences. Que
                      vous soyez en début de carrière ou à la recherche d&#39;un nouveau défi,
                      trouvez des opportunités qui vous aideront à progresser dans votre
                      parcours professionnel.
                    </p>
                  </>
                )}
              </header>
              <p className="text-md pt-3">
                {isRecruiter
                  ? "Faites le premier pas vers une solution adaptée à vos besoins RH."
                  : "Explorez des opportunités de carrière adaptées à vos compétences."}
              </p>
              <div className="absolute top-0 left-0">
                <div className="w-full mb-4 flex group">
                  <button
                    className={`w-1/2 cursor-pointer py-2 px-6 hover:bg-black hover:text-white ${!isRecruiter ? "bg-yellow-500 text-white" : "bg-transparent"
                      }`}
                    onClick={() => setIsRecruiter(false)}
                  >
                    Candidat
                  </button>
                  <button
                    className={`w-1/2 cursor-pointer py-2 px-6 bg-transparent hover:bg-black ${isRecruiter ? "bg-yellow-500 text-white" : "bg-transparent"
                      }`}
                    onClick={() => setIsRecruiter(true)}
                  >
                    Recruteur
                  </button>
                </div>
              </div>
            </div>

            {/* Formulaire dynamique */}
            <div className={`${isRecruiter ? "h-[750px] md:h-[750px]" : "h-[650px] md:h-[650px]"} section-form bg-white p-6 sm:p-8 md:p-10 lg:p-12`}>
              <div className="mt-6 md:m-0">
                <form method="POST" action="#" className="space-y-7">
                  {/* Champs communs */}
                  <div className="w-full gap-10 flex">
                    <div className="w-1/2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full mx-auto mt-1 py-2 block border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                      />
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="surname" className="block text-sm font-medium">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        required
                        className="w-full mx-auto mt-1 py-2 block border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full mt-1 py-2 block w-full border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-1 py-2 block w-full border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                    />
                  </div>
                  {/* Champs spécifiques aux recruteurs */}
                  {isRecruiter && (
                    <div className="gap-10 flex">
                      <div className="w-1/2">
                        <label htmlFor="companyName" className="block text-sm font-medium">
                          Nom de l&#39;entreprise <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          className="mt-1 py-2 block w-full border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                        />
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="companySize" className="block text-sm font-medium">
                          Taille de l&#39;entreprise <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          className="mt-1 py-2 block w-full border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none"
                        >
                          <option value="small">Petite</option>
                          <option value="medium">Moyenne</option>
                          <option value="large">Grande</option>
                        </select>
                      </div>
                    </div>
                  )}
                  {/* Champ pour le message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="mt-1 py-2 block w-full border-b border-black focus:border-yellow-500 focus:ring-yellow-500 outline-none resize-none"
                      rows={isRecruiter ? 4 : 6}
                    ></textarea>
                  </div>
                  {/* Bouton d"envoi */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-4 px-4  hover:bg-black transition"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
