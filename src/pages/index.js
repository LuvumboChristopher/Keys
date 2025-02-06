'use client';

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import AgencesSection from "@/app/components/Home/AgencesSection";
import { CallToActionJobs } from "@/app/components/Home/CallToActionJobs";
import SecteursActivite from "@/app/components/Home/SecteursActivite";
import SolutionsRH from "@/app/components/Home/SolutionsRH";
import withInViewAnimation from "@/app/utils/withInViewAnimation";
import JobsByLocation from "@/app/components/Home/JobsByLocation";
import JobsPreview from "@/app/components/Home/JobsPreview";
import Partenaires from "@/app/components/Home/Partenaires";
import Hero from "@/app/components/Home/Hero";
import { pageTitles } from "@/app/utils/titles";
import Processus from "@/app/components/Home/Processus";
import AboutKeys from "@/app/components/Home/AboutKeys";
import { DownloadApp } from "@/app/components/Home/DowloadApp";
import AnimatedText from "@/app/components/Home/AnimatedText";

const AnimatedHeroSlider = withInViewAnimation(Hero);
const AnimatedSolutionsRH = withInViewAnimation(SolutionsRH);
const AnimatedJobsByLocation = withInViewAnimation(JobsByLocation);
const AnimatedJobsPreview = withInViewAnimation(JobsPreview);
const AnimatedCallToActionJobs = withInViewAnimation(CallToActionJobs);
const AnimatedAgencesSection = withInViewAnimation(AgencesSection);
const AnimatedPartenaires = withInViewAnimation(Partenaires);

export default function HomePage() {
  const [pageTitle, setPageTitle] = useState(pageTitles.home);
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            switch (index) {
              case "0":
                setPageTitle(pageTitles.home);
                break;
              case "1":
                setPageTitle(pageTitles.AboutKeys);
                break;
              case "2":
                setPageTitle(pageTitles.howItWorks);
                break;
              case "3":
                setPageTitle(pageTitles.jobsByLocation);
                break;
              case "4":
                setPageTitle(pageTitles.myKeysApp);
                break;
              case "5":
                setPageTitle(pageTitles.secteursActivite);
                break;
              case "6":
                setPageTitle(pageTitles.jobOffers);
                break;
              case "7":
                setPageTitle(pageTitles.partenaires);
                break;
              case "8":
                setPageTitle(pageTitles.agences);
              break;
              default:
                setPageTitle(pageTitles.home);
            }
          }
        });
      },
      {
        threshold: scrollDirection === "down" ? 0.1 : 0.9,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionRefs, scrollDirection]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.previousScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      window.previousScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div ref={(el) => (sectionRefs.current[0] = el)} data-index="0">
        <AnimatedHeroSlider />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)} data-index="1">
        <AboutKeys />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)} data-index="2">
        <Processus />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)} data-index="3">
        <AnimatedJobsByLocation />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)} data-index="4">
        <DownloadApp />
      </div>
      <div ref={(el) => (sectionRefs.current[5] = el)} data-index="5">
        <SecteursActivite />
      </div>
      <div ref={(el) => (sectionRefs.current[6] = el)} data-index="6">
        <AnimatedJobsPreview />
      </div>
      <div ref={(el) => (sectionRefs.current[7] = el)} data-index="7">
        <AnimatedPartenaires />
      </div>
      <AnimatedCallToActionJobs />
      <div ref={(el) => (sectionRefs.current[8] = el)} data-index="8">
        <AgencesSection />
      </div>
    </>
  );
}
