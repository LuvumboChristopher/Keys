"use client";

import { CallToAction } from '@/components/CallToAction';
import HeroSection from '@/components/HeroSection';
import SecteursActivite from '@/components/SecteursActivite';
import Slider from '@/components/Slider';
import StatsSection from '@/components/StatsSection';
import withInViewAnimation from "@/utils/withInViewAnimation";


const AnimatedHero = withInViewAnimation(HeroSection);
const AnimatedCallToAction= withInViewAnimation(CallToAction);
const AnimatedSlider = withInViewAnimation(Slider);
const AnimatedEconomicSector = withInViewAnimation(SecteursActivite);




export default function HomePage() {
  return (
    <>
        <AnimatedHero/>
        <AnimatedSlider/>
        <StatsSection/>
        <AnimatedEconomicSector/>
    </>
  );
}
