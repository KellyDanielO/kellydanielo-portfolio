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
import ProjectSection from "./sections/ProjectSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home-section');

  useIntersectionObserver(setActiveSection);


  return (
    <>
      <SocialsSection />
      <main className="min-h-screen bg-main w-full overflow-auto font-roboto">
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
