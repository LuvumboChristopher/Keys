"use client";

import AgencesSection from "@/components/Home/AgencesSection";
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
const AnimatedSolutionsRH = withInViewAnimation(SolutionsRH);
const AnimatedEconomicSector = withInViewAnimation(SecteursActivite);
const AnimatedJobsByLocation = withInViewAnimation(JobsByLocation);
const AnimatedStatsSection = withInViewAnimation(StatsSection);
const AnimatedJobsPreview= withInViewAnimation(JobsPreview);
const AnimatedCallToActionJobs= withInViewAnimation(CallToActionJobs);
const AnimatedAgencesSection = withInViewAnimation(AgencesSection);



export default function HomePage() {
  return (
    <>
        <AnimatedHero/>
        <AnimatedEconomicSector/>
        <AnimatedStatsSection/>
        <AnimatedJobsByLocation/>
        <AnimatedJobsPreview/>
        <AnimatedSolutionsRH/>
        <AnimatedCallToActionJobs/>
        <AnimatedAgencesSection/>
    </>
  );
}
