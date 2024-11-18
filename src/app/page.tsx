"use client";
import CampSection from "@/components/CampSection";
import DownloadSection from "@/components/DownloadSection";
import FeatureSection from "@/components/FeatureSection";
import GuideSection from "@/components/GuideSection";
import HeroSection from "@/components/HeroSection";
import { inView } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    inView(".fade-up", (card) => {
      card.target.classList.add("animate-fade-up");
    });
    inView(".fade-right", (card) => {
      card.target.classList.add("animate-fade-right");
    });
    inView(".fade-left", (card) => {
      card.target.classList.add("animate-fade-left");
    });
    inView(".fade-down", (card) => {
      card.target.classList.add("animate-fade-down");
    });
  }, []);
  return (
    <>
      <HeroSection />
      <CampSection />
      <GuideSection />
      <FeatureSection />
      <DownloadSection />
    </>
  );
}
