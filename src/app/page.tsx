"use client"
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Intrapreneurship from "@/components/Intrapreneurship";
import Kickbox from "@/components/Kickbox";
import KickboxProcess from "@/components/KickboxProcess";
import OurCommunity from "@/components/OurCommunity";

export default function Home() {
  return (
    <>
      <Hero />
      <Kickbox />
      <HowItWorks />
      <KickboxProcess />
      <OurCommunity />
      <Intrapreneurship />
      <Faq/>
    </>
  );
}
