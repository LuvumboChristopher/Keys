"use client";

import AgencesSection from "@/components/Home/AgencesSection";
import Banner from "@/components/Home/Banner";
import { CallToActionJobs } from "@/components/Home/CallToActionJobs";
import HeroSection from "@/components/Home/HeroSection";
import SecteursActivite from "@/components/Home/SecteursActivite";
import SolutionsRH from "@/components/Home/SolutionsRH";
import Slider from "@/components/Home/Slider";
import StatsSection from "@/components/Home/StatsSection";
import withInViewAnimation from "@/utils/withInViewAnimation";
import JobsByLocation from "@/components/Home/JobsByLocation";
import JobsPreview from "@/components/Home/JobsPreview";

const AnimatedHero = withInViewAnimation(HeroSection);
const AnimatedStatsSection = withInViewAnimation(StatsSection);
const AnimatedJobsByLocation = withInViewAnimation(JobsByLocation);
const AnimatedSolutionsRH = withInViewAnimation(SolutionsRH);
const AnimatedCallToActionJobs= withInViewAnimation(CallToActionJobs);
const AnimatedSlider = withInViewAnimation(Slider);
const AnimatedEconomicSector = withInViewAnimation(SecteursActivite);
const AnimatedAgencesSection = withInViewAnimation(AgencesSection);
const AnimatedJobsPreview= withInViewAnimation(JobsPreview);



export default function HomePage() {
  return (
    <>
        <AnimatedHero/>
        <AnimatedSolutionsRH/>
        <AnimatedEconomicSector/>
        <AnimatedSlider/>
        <AnimatedJobsByLocation/>
        <AnimatedStatsSection/>
        <AnimatedJobsPreview/>
        <AnimatedCallToActionJobs/>
        <AnimatedAgencesSection/>
    </>
  );
}
