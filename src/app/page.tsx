"use client"
import { useState } from "react";
import useIntersectionObserver from "./components/SectionObserver";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";
import SocialsSection from "./sections/SocialsSection";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import ServiceSection from "./sections/ServiceSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";
import ProjectSection from "./sections/ProjectSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home-section');

  useIntersectionObserver(setActiveSection);


  return (
    <>
      <SocialsSection />
      <main className="min-h-screen  text-white bg-main w-full overflow-auto font-roboto">
        {/* Navigation Bar */}
        <NavBar oberver={activeSection} />
        {/* Navigation Bar ending */}
        {/* Hero section beginning */}
        <HeroSection />
        {/* Hero section ending */}
        {/* About Section */}
        <AboutSection />
        {/* End of about section */}
        <ResumeSection />
        {/* Services Section */}
        <ServiceSection />
        {/* Skill Section */}
        <SkillSection />
        {/* Project Section */}
        <ProjectSection />
        {/* Contact Section */}
        <ContactSection />
        {/* Footer Section Begin */}
        <FooterComponent />
        {/* Footer Section End */}
      </main>
    </>
  );
}
