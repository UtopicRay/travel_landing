"use client";
import CampSection from "@/components/CampSection";
import DownloadSection from "@/components/DownloadSection";
import FeatureSection from "@/components/FeatureSection";
import GuideSection from "@/components/GuideSection";
import HeroSection from "@/components/HeroSection";
import { useAnimation as animations } from "@/useAnimation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    animations()
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
