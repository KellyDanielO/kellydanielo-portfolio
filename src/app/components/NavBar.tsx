"use client"
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
interface NavBarProps {
    oberver: any
}

const NavBar = ({oberver }: NavBarProps) => {
    const homeRef = useRef<HTMLAnchorElement>(null);
    const aboutRef = useRef<HTMLAnchorElement>(null);
    const resumeRef = useRef<HTMLAnchorElement>(null);
    const contactRef = useRef<HTMLAnchorElement>(null);
    const skillRef = useRef<HTMLAnchorElement>(null);
    const serviceRef = useRef<HTMLAnchorElement>(null);
    const projectRef = useRef<HTMLAnchorElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

  useEffect(() => {
    switch (oberver) {
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
  }, [oberver]);
    return <>
        <nav className="w-full lg:w-[80%] bg-main z-10 fixed top-0 left-1/2 transform -translate-x-1/2  py-5  flex justify-between lg:px-o px-5">
            {/* Title Section */}
            <Link href={"#"} className="font-bold uppercase text-2xl font-freeman transition-all ease-in hover:text-primary" >KELLY DANIEL</Link>
            <ul className="hidden lg:flex gap-5">
                <li><Link href={"#home-section"} className="nav-links" ref={homeRef}>Home</Link></li>
                <li><Link href={"#about-section"} className="nav-links" ref={aboutRef}>About</Link></li>
                <li><Link href={"#resume-section"} className="nav-links" ref={resumeRef}>Resume</Link></li>
                <li><Link href={"#service-section"} className="nav-links" ref={serviceRef}>Services</Link></li>
                <li><Link href={"#skill-section"} className="nav-links" ref={skillRef}>Skills</Link></li>
                <li><Link href={"#project-section"} className="nav-links">Projects</Link></li>
                <li><Link href={"#contact-section"} className="nav-links" ref={contactRef}>Contact</Link></li>
                {/* <li><Link href={""} className="nav-links">{oberver}</Link></li> */}
            </ul>
            {/* Mobile Menu toggle */}
            <button
                id="menu-btn"
                className={`block hamburger lg:hidden focus:outline-none  ${isActive ? "open " : ""
                    } `}
                onClick={toggleActiveClass}
            >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>

        </nav>

        <ul
            className={`hidden hm_menu md mx-auto gap-6 flex-col bg-shade w-10/12 shadow-lg p-5  lg:hidden ${isActive ? "active" : ""
                } `}
        >
            <div className="flex justify-center items-center flex-col h-screen gap-5 text-xl">

                <li onClick={toggleActiveClass}><Link href={"#home-section"} className="nav-links" >Home</Link></li>
                <li onClick={toggleActiveClass}><Link href={"#about-section"} className="nav-links" >About</Link></li>
                <li onClick={toggleActiveClass}><Link href={"#resume-section"} className="nav-links">Resume</Link></li>
                <li onClick={toggleActiveClass}><Link href={"#service-section"} className="nav-links">Services</Link></li>
                <li onClick={toggleActiveClass}><Link href={"#skill-section"} className="nav-links" >Skills</Link></li>
                <li onClick={toggleActiveClass}><Link href={"#project-section"} className="nav-links">Projects</Link></li>
                <li onClick={toggleActiveClass}><Link href={"#contact-section"} className="nav-links">Contact</Link></li>
                <div className="p-5 bg-black/50 rounded-full"  onClick={toggleActiveClass}>
                    <IoClose className="text-white" />
                </div>
            </div>
        </ul>
    </>
}
export default NavBar;

