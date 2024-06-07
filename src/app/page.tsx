"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./components/SectionObserver";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import ServiceSection from "./sections/ServiceSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import SocialsSection from "./sections/SocialsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home-section');
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const skillRef = useRef<HTMLAnchorElement>(null);
  const serviceRef = useRef<HTMLAnchorElement>(null);
  const projectRef = useRef<HTMLAnchorElement>(null);

  useIntersectionObserver(setActiveSection);

  useEffect(() => {
    switch (activeSection) {
      case 'home-section':
        homeRef.current?.classList.add('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'about-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.add('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'resume-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.add('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'skill-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.add('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'service-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.add('active');
        projectRef.current?.classList.remove('active');
        break;
      case 'project-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.add('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.add('active');
        break;
      case 'contact-section':
        homeRef.current?.classList.remove('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.add('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
      default:
        homeRef.current?.classList.add('active');
        skillRef.current?.classList.remove('active');
        aboutRef.current?.classList.remove('active');
        resumeRef.current?.classList.remove('active');
        contactRef.current?.classList.remove('active');
        serviceRef.current?.classList.remove('active');
        projectRef.current?.classList.remove('active');
        break;
    }
  }, [activeSection]);

  return (
    <>
      <SocialsSection />
      <main className="min-h-screen bg-main w-full overflow-auto font-roboto">
        {/* Navigation Bar */}
        <NavBar homeRef={homeRef} aboutRef={aboutRef} resumeRef={resumeRef} skillRef={skillRef} contactRef={contactRef} oberver={activeSection} serviceRef={serviceRef} />
        {/* Navigation Bar ending */}

        {/* Hero section beginning */}
        <HeroSection />
        {/* Hero section ending */}

        {/* About Section */}
        <AboutSection />
        {/* End of about section */}
       {/* Resume Section */}
       <ResumeSection />
       {/* End of resume section */}
        {/* Service Section */}
        <ServiceSection />
        {/* End Service Section */}

        {/* Skill Section */}
        <SkillSection />
        {/* Contact Section */}

        <ContactSection />
        {/* Footer Section Begin */}
        <FooterComponent />
        {/* Footer Section End */}
      </main>
    </>
  );
}
