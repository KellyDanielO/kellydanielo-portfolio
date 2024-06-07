"use client"
import Image from "next/image";
import Link from "next/link";
import MeImage from "../assets/images/me.png";
import { LegacyRef, RefObject, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./components/SectionObserver";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/Footer";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaLocationArrow } from "react-icons/fa";
import AppSvg from '../assets/svgs/app.svg'
import FrontendSvg from '../assets/svgs/frontend.svg'
import BackendSvg from '../assets/svgs/backend.svg'
import SocialsSection from "./sections/SocialsSection";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import ServiceSection from "./sections/ServiceSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";

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
        <NavBar oberver={activeSection}/>
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
        {/* Contact Section */}

        <ContactSection />
        {/* Footer Section Begin */}
        <FooterComponent />
        {/* Footer Section End */}
      </main>
    </>
  );
}
