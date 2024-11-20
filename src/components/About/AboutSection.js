"use client"

import Image from "next/image";

export default function AboutKeys() {
  return (
    <div className="container">


      <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] md:mx-[-20px] xl:mx-[-35px] items-center mb-10 xl:!mb-14 lg:!mb-14 md:!mb-14">

        {/* Columna de imágenes */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[80px]">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">

            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <Image
                  className="rounded-[0.4rem]"
                  src="/images/pexels-photo-448828.webp"
                  alt="Notre équipe en action"
                  layout="responsive"
                  width={500}
                  height={600}
                />
              </figure>
            </div>

            <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full !self-end mt-[25px]">
              <figure className="rounded-[0.4rem]">
                <Image
                  className="rounded-[0.4rem]"
                  src="/images/pexels-photo-8293646.webp"
                  alt="Partenariats avec les entreprises"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </figure>
            </div>

            <div className="w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
              <figure className="!rounded-[.4rem] xl:!mx-5 lg:!mx-5 md:!mx-5">
                <Image
                  className="!rounded-[.4rem]"
                  src="/images/pexels-photo-8986100.webp"
                  alt="Accompagnement personnalisé"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Columna de texto */}
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[80px]">
          <h2 className="text-[0.75rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">Qui Sommes-Nous ?</h2>
          <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-5">
            Une agence de recrutement qui valorise la stratégie et l"engagement humain.
          </h3>
          <p className="!mb-6">
            Chez Keys, nous croyons en l"importance d"une approche sur-mesure pour chaque client et candidat. Notre équipe s"efforce d"identifier des talents qui correspondent parfaitement aux besoins des entreprises tout en respectant les aspirations des individus.
          </p>

          {/* Bullet points */}
          <div className="flex flex-wrap mx-[-15px] mt-[-15px] xl:mx-[-20px]">
            <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                <li className="relative pl-[1.25rem]">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem]"></i>
                  </span>
                  <span>Recrutement sur mesure pour chaque poste clé.</span>
                </li>
                <li className="relative pl-[1.25rem] mt-3">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem]"></i>
                  </span>
                  <span>Suivi personnalisé pour les entreprises et candidats.</span>
                </li>
              </ul>
            </div>

            <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
              <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                <li className="relative pl-[1.25rem]">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem]"></i>
                  </span>
                  <span>Stratégie de recrutement alignée sur vos objectifs.</span>
                </li>
                <li className="relative pl-[1.25rem] mt-3">
                  <span>
                    <i className="uil uil-check absolute left-0 text-[1.05rem] leading-none tracking-[normal] !text-center flex items-center justify-center text-[#343f52] rounded-[100%] top-[0.2rem]"></i>
                  </span>
                  <span>Accompagnement continu pour une intégration réussie.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
